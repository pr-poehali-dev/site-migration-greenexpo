"""
Отправка уведомления о новом лиде на email и в Telegram.
Принимает: name, phone, email, role (опционально), source (popup/form).
v3
"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import urllib.request


def send_emails(name: str, phone: str, email: str, role: str, source: str):
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']
    recipients = ['managergreenexpo@yandex.ru', 'egorova.pr@gmail.com']

    source_label = 'Поп-ап форма' if source == 'popup' else 'Форма на сайте'
    role_label = role if role else 'не указана'

    body = f"""Новая заявка с сайта GreenExpo!

Источник: {source_label}
Имя: {name}
Телефон: {phone}
Email: {email}
Роль: {role_label}
"""

    msg = MIMEMultipart()
    msg['From'] = smtp_user
    msg['To'] = ', '.join(recipients)
    msg['Subject'] = f'Новая заявка GreenExpo от {name}'
    msg.attach(MIMEText(body, 'plain', 'utf-8'))

    with smtplib.SMTP_SSL(smtp_host, 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, recipients, msg.as_string())


def send_telegram(name: str, phone: str, email: str, role: str, source: str):
    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_ids = [299451222, '@nastacia_egorova']

    source_label = 'Поп-ап форма' if source == 'popup' else 'Форма на сайте'
    role_label = role if role else 'не указана'

    text = (
        f"🌿 *Новая заявка GreenExpo*\n\n"
        f"📋 Источник: {source_label}\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"✉️ Email: {email}\n"
        f"🏷 Роль: {role_label}"
    )

    for chat_id in chat_ids:
        data = json.dumps({
            'chat_id': chat_id,
            'text': text,
            'parse_mode': 'Markdown'
        }).encode('utf-8')
        req = urllib.request.Request(
            f'https://api.telegram.org/bot{token}/sendMessage',
            data=data,
            headers={'Content-Type': 'application/json'}
        )
        urllib.request.urlopen(req, timeout=10)


def handler(event: dict, context) -> dict:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    role = body.get('role', '').strip()
    source = body.get('source', 'form')

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'name and phone are required'})
        }

    send_emails(name, phone, email, role, source)
    send_telegram(name, phone, email, role, source)

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'ok': True})
    }