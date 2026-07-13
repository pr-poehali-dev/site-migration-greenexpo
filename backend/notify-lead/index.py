"""
Отправка уведомления о новом лиде на email и в Telegram.
Принимает: name, phone, email, role (опционально), source (popup/form),
utm_source, utm_medium, utm_campaign, utm_term, utm_content (опционально).
v5
"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import requests


def format_utm(utm: dict) -> str:
    labels = {
        'utm_source': 'Источник (utm_source)',
        'utm_medium': 'Канал (utm_medium)',
        'utm_campaign': 'Кампания (utm_campaign)',
        'utm_term': 'Ключевое слово (utm_term)',
        'utm_content': 'Объявление (utm_content)',
    }
    lines = []
    for key, label in labels.items():
        val = utm.get(key, '').strip()
        if val:
            lines.append(f"{label}: {val}")
    return '\n'.join(lines) if lines else 'не определён'


def send_emails(name: str, phone: str, email: str, role: str, source: str, utm: dict):
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']
    recipients = ['managergreenexpo@yandex.ru', 'egorova.pr@gmail.com']

    source_labels = {
        'popup': 'Поп-ап форма',
        'form': 'Форма на сайте',
        'dacha_participant': 'Спецпроект ДАЧА — заявка участника',
        'dacha_presentation': 'Спецпроект ДАЧА — запрос презентации',
    }
    source_label = source_labels.get(source, 'Форма на сайте')
    role_label = role if role else 'не указана'
    utm_text = format_utm(utm)

    body = f"""Новая заявка с сайта GreenExpo!

Источник формы: {source_label}
Имя: {name}
Телефон: {phone}
Email: {email}
Роль: {role_label}

— UTM-метки —
{utm_text}
"""

    msg = MIMEMultipart()
    msg['From'] = smtp_user
    msg['To'] = ', '.join(recipients)
    msg['Subject'] = f'Новая заявка GreenExpo от {name}'
    msg.attach(MIMEText(body, 'plain', 'utf-8'))

    with smtplib.SMTP_SSL(smtp_host, 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, recipients, msg.as_string())


def send_telegram(name: str, phone: str, email: str, role: str, source: str, utm: dict):
    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_ids = [299451222, 925960165]

    source_labels = {
        'popup': 'Поп-ап форма',
        'form': 'Форма на сайте',
        'dacha_participant': 'Спецпроект ДАЧА — заявка участника',
        'dacha_presentation': 'Спецпроект ДАЧА — запрос презентации',
    }
    source_label = source_labels.get(source, 'Форма на сайте')
    role_label = role if role else 'не указана'

    utm_lines = []
    for key in ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']:
        val = utm.get(key, '').strip()
        if val:
            utm_lines.append(f"  {key}: {val}")
    utm_block = '\n'.join(utm_lines) if utm_lines else '  не определён'

    text = (
        f"🌿 Новая заявка GreenExpo\n\n"
        f"📋 Форма: {source_label}\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"✉️ Email: {email}\n"
        f"🏷 Роль: {role_label}\n\n"
        f"📊 UTM-метки:\n{utm_block}"
    )

    url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload_base = {'text': text}
    for chat_id in chat_ids:
        sent = False
        last_err = None
        for attempt in range(3):
            try:
                resp = requests.post(
                    url,
                    json={'chat_id': chat_id, **payload_base},
                    timeout=(6, 6),
                )
                if resp.status_code == 200:
                    print(f'Telegram OK for chat {chat_id} (attempt {attempt + 1})')
                    sent = True
                    break
                last_err = f'HTTP {resp.status_code}: {resp.text}'
                if 400 <= resp.status_code < 500:
                    break
            except Exception as e:
                last_err = str(e)
        if not sent:
            print(f'Telegram send failed for chat {chat_id}: {last_err}')


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

    utm = {
        'utm_source': body.get('utm_source', ''),
        'utm_medium': body.get('utm_medium', ''),
        'utm_campaign': body.get('utm_campaign', ''),
        'utm_term': body.get('utm_term', ''),
        'utm_content': body.get('utm_content', ''),
    }

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'name and phone are required'})
        }

    try:
        send_emails(name, phone, email, role, source, utm)
    except Exception as e:
        print(f'Email send failed: {e}')

    try:
        send_telegram(name, phone, email, role, source, utm)
    except Exception as e:
        print(f'Telegram send failed: {e}')

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'ok': True})
    }