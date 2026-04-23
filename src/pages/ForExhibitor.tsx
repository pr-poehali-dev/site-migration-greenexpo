import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useUtm } from '@/hooks/useUtm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/94e770a5-5063-43e5-9110-fd23f343fbd9.jpg';
const NOTIFY_URL = 'https://functions.poehali.dev/28e6c844-7b1b-41c6-9811-be3b2957727c';

function reachMetrikaGoal(goal: string) {
  const w = window as unknown as { ym?: (id: number, action: string, goal: string) => void };
  if (w.ym) w.ym(100343781, 'reachGoal', goal);
}

const SEGMENTS = [
  { title: 'Органическое земледелие', desc: 'Технологии, товары, услуги и оборудование для органического земледелия, садоводов, садовых центров и ритейла' },
  { title: 'Сити-фермерство', desc: 'Товары, услуги и оборудование для выращивания зелени, овощей и фруктов в городских условиях' },
  { title: 'Ландшафтная экология', desc: 'Товары, услуги и оборудование для ландшафтной индустрии и служб городского озеленения' },
  { title: 'Рециклинг', desc: 'Ответственное производство, потребление, повторное использование и восстановление товаров, упаковки и материалов' },
  { title: 'Чистый дом и сад', desc: 'Экологичные товары, услуги для ухода за домом/садом, инновационные экотехнологии в строительстве домов и коттеджей' },
  { title: 'Эко-продукты для человека и питомцев', desc: 'Технологии, товары, услуги и оборудование для производства экологически чистых продуктов питания человека и домашних питомцев' },
  { title: 'ECO Lifestyle', desc: 'Агро-Экотуризм, экологичные косметика, одежда, аксессуары, техника, услуги' },
  { title: 'ECO Образование и просвещение', desc: 'Обучающие программы, направленные на формирование экосознания и уважительного отношения к природе' },
];

const ADVANTAGES = [
  { emoji: '', title: 'Целевая аудитория в одном месте', text: 'Закупщики и дистрибьюторы приходят сами — с конкретным запросом на продукцию вашего сегмента.' },
  { emoji: '', title: 'Прямые переговоры с байерами', text: 'За 3 дня — десятки живых переговоров с теми, кто принимает решения о закупках.' },
  { emoji: '', title: 'Выход на федеральный рынок', text: 'Москва, МВЦ "Крокус Экспо". Доступ к партнёрам со всей России и из других стран.' },
  { emoji: '', title: 'Расширение дилерской сети', text: 'Выставку посещают дистрибьюторы, которые ищут новые бренды для своего портфеля.' },
  { emoji: '', title: 'PR и медийный эффект', text: 'В выставке участвуют профильные медиа и блогеры.' },
  { emoji: '', title: 'Субсидии для МСБ', text: 'Малый и средний бизнес может компенсировать расходы на участие через региональные программы.' },
];

const BUSINESS_CASES = [
  { emoji: '', condition: 'Если вы региональный производитель', result: 'выход на федеральный рынок' },
  { emoji: '', condition: 'Если вы ищете дистрибьюторов', result: 'прямой контакт с оптовиками' },
  { emoji: '', condition: 'Если вы запускаете новинку', result: 'тестирование и обратная связь' },
  { emoji: '', condition: 'Если хотите войти в торговые сети', result: 'байеры на месте' },
  { emoji: '', condition: 'Если вы зарубежный бренд', result: 'вход на российский рынок' },
  { emoji: '', condition: 'Если хотите усилить бренд', result: 'PR и медийный эффект' },
];

const FORMATS = [
  { title: 'Выставочный стенд', icon: '', items: ['от 4 до 12+ м²', 'стандартная застройка', 'мебель, освещение, вывеска', 'размещение в каталоге', 'персональный менеджер'] },
  { title: 'Деловая программа', icon: '', items: ['выступление на конференции', 'мастер-класс', 'презентация продукта', 'панельная дискуссия'] },
  { title: 'Спонсорский пакет', icon: '', items: ['брендинг зон', 'приоритетное размещение', 'индивидуальные интеграции', 'расширенная реклама'] },
];

const PACKAGE_ITEMS = [
  'Аренда выставочной площади', 'Стандартная застройка стенда',
  'Вывеска / фриз с названием компании', 'Электроподключение',
  'Базовая мебель', 'Размещение в каталоге участников',
  'Размещение на сайте greenexpo.pro', 'Бейджи для команды',
  'Персональный менеджер проекта', 'Доступ к зоне переговоров',
];

const STEPS = [
  { num: '01', text: 'Оставьте заявку на сайте' },
  { num: '02', text: 'Обсудим ваши задачи и подберём формат' },
  { num: '03', text: 'Подготовим документы и счёт' },
  { num: '04', text: 'При необходимости — поможем с субсидией' },
  { num: '05', text: 'Подтвердим участие и начнём подготовку' },
];

const FAQ = [
  { q: 'Сколько стоит участие?', a: 'Стоимость зависит от площади стенда и выбранного пакета. Мы подберём оптимальный вариант под ваш бюджет и задачи. Для МСБ возможна компенсация через субсидию.' },
  { q: 'Кто посещает выставку?', a: 'Закупщики торговых сетей, дистрибьюторы, оптовые компании, HoReCa, маркетплейсы, специализированные магазины и конечные потребители.' },
  { q: 'Я из региона. Мне это подходит?', a: 'Да. GreenExpo — федеральная площадка в Москве. Для региональных компаний МСБ часто доступна субсидия на участие.' },
  { q: 'Мы небольшая компания. Нам это по силам?', a: 'Да. Есть компактные форматы стендов + возможность субсидирования. Мы помогаем подготовиться даже тем, кто участвует впервые.' },
  { q: 'Как забронировать стенд?', a: 'Оставьте заявку на сайте или свяжитесь с менеджером. Мы подберём формат, подготовим документы и подтвердим участие.' },
  { q: 'Можно ли участвовать в деловой программе?', a: 'Да. Вы можете подать заявку на выступление, мастер-класс или презентацию новинки.' },
  { q: 'Что делать, если я ещё не готов к участию?', a: 'Можно посетить выставку в качестве гостя, чтобы оценить площадку.' },
];

interface ModalFormProps {
  open: boolean;
  onClose: () => void;
  title: string;
  source: string;
  utm: Record<string, string>;
}

function ModalForm({ open, onClose, title, source, utm }: ModalFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source, ...utm }),
      });
      reachMetrikaGoal('form_submit');
    } finally {
      setSending(false);
      setSent(true);
    }
  }

  function handleClose() {
    setForm({ name: '', phone: '', email: '' });
    setSent(false);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: 'white' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={handleClose}>
          <Icon name="X" size={20} />
        </button>
        <h2 className="font-montserrat font-800 text-xl mb-6 text-center" style={{ color: 'var(--eco-green-dark)' }}>
          {title}
        </h2>
        {sent ? (
          <p className="text-center font-opensans py-6" style={{ color: 'var(--eco-green-dark)' }}>
            Спасибо! Ваш запрос отправлен, мы свяжемся с вами в ближайшее время.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required type="text" placeholder="Имя" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
              style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
            <input required type="tel" placeholder="Телефон" value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
              style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
            <input required type="email" placeholder="Email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
              style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
            <button type="submit" disabled={sending}
              className="w-full font-montserrat font-700 text-sm tracking-widest py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white', opacity: sending ? 0.7 : 1 }}>
              {sending ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ'}
            </button>
            <p className="text-center font-opensans text-xs leading-relaxed" style={{ color: '#888' }}>
              Нажимая на кнопку «Отправить» я принимаю{' '}
              <Link to="/terms" className="underline" style={{ color: 'var(--eco-green)' }} onClick={handleClose}>
                Пользовательское соглашение
              </Link>{' '}
              и даю согласие на обработку персональных данных согласно{' '}
              <Link to="/privacy" className="underline" style={{ color: 'var(--eco-green)' }} onClick={handleClose}>
                Политике конфиденциальности
              </Link>*
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ForExhibitor() {
  const utm = useUtm();

  const [modal, setModal] = useState<{ open: boolean; title: string; source: string }>({
    open: false, title: '', source: '',
  });

  const [openForm, setOpenForm] = useState({ name: '', phone: '', email: '' });
  const [openSent, setOpenSent] = useState(false);
  const [openSending, setOpenSending] = useState(false);

  function openModal(title: string, source: string) {
    reachMetrikaGoal('open_modal');
    setModal({ open: true, title, source });
  }

  async function handleOpenFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOpenSending(true);
    try {
      await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...openForm, source: 'forexhibitor_bottom', ...utm }),
      });
      reachMetrikaGoal('form_submit');
    } finally {
      setOpenSending(false);
      setOpenSent(true);
    }
  }

  const ctaBtn = (label: string, title: string, source: string) => (
    <button
      onClick={() => openModal(title, source)}
      className="font-montserrat font-700 text-sm tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
      style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      {/* Floating TG button */}
      <a href="https://t.me/greenexpo" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
        style={{ backgroundColor: '#2AABEE' }} title="Написать в Telegram">
        <Icon name="Send" size={24} className="text-white" />
      </a>

      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,74,26,0.88) 0%, rgba(45,106,45,0.75) 100%), url(${HERO_IMAGE})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center max-w-4xl">
          <div
            className="inline-block border border-white/20 rounded-full px-4 py-1.5 text-sm font-montserrat font-600 mb-6 tracking-wide"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            7–9 СЕНТЯБРЯ 2026 · МВЦ "КРОКУС ЭКСПО" · МОСКВА
          </div>
          <h1 className="font-montserrat font-black leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            GreenExpo 2026 —<br />
            <span style={{ color: '#a8d8a8' }}>международная выставка-форум</span><br />
            «Жизнь в стиле ECO»
          </h1>
          <p className="text-lg md:text-xl mb-12 font-opensans max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            МВЦ "Крокус Экспо", Москва. Площадка, где производители встречаются с покупателями, дистрибьюторами и партнёрами.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { text: 'B2B + B2C аудитория в одном месте' },
              { text: 'Прямые переговоры с байерами и дистрибьюторами' },
              { text: 'Возможность компенсации расходов через субсидию для МСБ' },
            ].map((item, i) => (
              <div key={i} className="border border-white/20 rounded-xl p-4 text-sm"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <span className="font-opensans" style={{ color: 'rgba(255,255,255,0.9)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== О ВЫСТАВКЕ ===== */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-4">Что такое GreenExpo</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 leading-relaxed font-opensans text-lg" style={{ color: 'var(--eco-text)', opacity: 0.8 }}>
            GreenExpo — международная выставка-форум «Жизнь в стиле ECO». Специализированная площадка, объединяющая производителей, дистрибьюторов, закупщиков и потребителей в сегментах органического, натурального и экологичного образа жизни.
            <br /><br />
            Выставка проходит в МВЦ "Крокус Экспо" — одной из крупнейших выставочных площадок России.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'МВЦ "Крокус Экспо", Москва' },
              { label: 'Международный формат' },
              { label: 'B2B + B2C аудитория' },
              { label: '8 тематических разделов' },
            ].map((item, i) => (
              <div key={i} className="card-eco text-center p-6 rounded-2xl" style={{ border: '1px solid var(--eco-beige-dark)' }}>
                <span className="font-montserrat font-semibold text-sm leading-snug" style={{ color: 'var(--eco-text)' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ТЕМАТИЧЕСКИЕ РАЗДЕЛЫ ===== */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">8 специализированных направлений для вашего бизнеса</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {SEGMENTS.map((seg, i) => (
              <div key={i} className="card-eco p-5 rounded-2xl flex flex-col gap-2" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
                <span className="font-montserrat font-bold text-sm leading-snug" style={{ color: 'var(--eco-text)' }}>{seg.title}</span>
                <span className="font-opensans text-xs leading-relaxed" style={{ color: 'var(--eco-text)', opacity: 0.7 }}>{seg.desc}</span>
              </div>
            ))}
          </div>
          <div className="text-center flex flex-wrap items-center justify-center gap-4">
            <span className="font-opensans" style={{ color: 'var(--eco-text)', opacity: 0.7 }}>Не нашли свой раздел?</span>
            {ctaBtn('Напишите нам', 'Запрос на участие в выставке', 'forexhibitor_segments')}
          </div>
        </div>
      </section>

      {/* ===== УЗНАТЬ СТОИМОСТЬ (CTA) ===== */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="section-title mb-4">Узнайте стоимость участия</h2>
          <p className="font-opensans mb-8 text-lg" style={{ color: 'var(--eco-text)', opacity: 0.75 }}>
            Оставьте заявку — мы подберём оптимальный формат и отправим условия в течение рабочего дня.
          </p>
          {ctaBtn('Получить условия участия', 'Узнать стоимость участия', 'forexhibitor_price')}
          <div className="mt-6 flex flex-col gap-1.5 text-sm font-opensans items-center" style={{ color: 'var(--eco-text)', opacity: 0.65 }}>
            <span>Перезвоним в течение часа в рабочее время</span>
            <span>Данные не передаём третьим лицам</span>
            <span>Расскажем про субсидию для МСБ</span>
          </div>
        </div>
      </section>

      {/* ===== АУДИТОРИЯ ===== */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">Кто приходит на GreenExpo</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
              <h3 className="font-montserrat font-bold text-lg mb-4" style={{ color: 'var(--eco-green)' }}>B2B-аудитория</h3>
              <ul className="space-y-2">
                {['Закупщики торговых сетей', 'Дистрибьюторы и оптовые компании', 'Владельцы специализированных магазинов', 'Представители маркетплейсов', 'Компании HoReCa', 'Региональные партнёры и дилеры', 'Профильные медиа и блогеры', 'Специалисты и профильные организации, занимающиеся проектированием, строительством и управлением зелёными пространствами', 'Эксперты в области ландшафтной архитектуры, устойчивого развития городов и зелёной инфраструктуры'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)', opacity: 0.8 }}>
                    <span style={{ color: 'var(--eco-green)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
              <h3 className="font-montserrat font-bold text-lg mb-4" style={{ color: 'var(--eco-green)' }}>B2C-аудитория</h3>
              <ul className="space-y-2">
                {['Потребители ECO продукции', 'Поклонники ЗОЖ', 'Сити-фермеры', 'Eco-активисты', 'Садоводы'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)', opacity: 0.8 }}>
                    <span style={{ color: 'var(--eco-green)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: 'var(--eco-green)' }}>
            <p className="font-montserrat font-semibold text-lg text-white">
              На GreenExpo приходит подготовленная аудитория. Это значит — высокая заинтересованность, готовность к диалогу и реальные решения о закупках.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ПРЕИМУЩЕСТВА ===== */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">Почему компании выбирают GreenExpo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="card-eco p-6 rounded-2xl" style={{ backgroundColor: 'var(--eco-beige)', border: '1px solid var(--eco-beige-dark)' }}>
                <h3 className="font-montserrat font-bold mb-2" style={{ color: 'var(--eco-text)' }}>{adv.title}</h3>
                <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)', opacity: 0.7 }}>{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== СУБСИДИЯ ===== */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="section-title mb-4">Участие может быть компенсировано</h2>
          <p className="mb-6 font-opensans text-lg max-w-2xl mx-auto" style={{ color: 'var(--eco-text)', opacity: 0.8 }}>
            Для малого и среднего бизнеса в ряде регионов России доступны программы, позволяющие компенсировать часть или все расходы на участие в выставке.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['аренда выставочной площади', 'застройка стенда', 'регистрационный взнос', 'рекламные услуги'].map((item, i) => (
              <span key={i} className="text-white px-4 py-2 rounded-full text-sm font-montserrat font-semibold" style={{ backgroundColor: 'var(--eco-green)' }}>
                ✓ {item}
              </span>
            ))}
          </div>
          <p className="mb-8 font-opensans" style={{ color: 'var(--eco-text)', opacity: 0.7 }}>
            Мы помогаем разобраться, есть ли в вашем регионе такая программа, и подсказываем, как оформить заявку.
          </p>
          {ctaBtn('Узнать про субсидию', 'Узнать про субсидию для МСБ', 'forexhibitor_subsidy')}
        </div>
      </section>

      {/* ===== ФОРМАТЫ ===== */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">Выберите формат под ваши задачи</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {FORMATS.map((fmt, i) => (
              <div key={i} className="card-eco p-6 rounded-2xl flex flex-col" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
                <h3 className="font-montserrat font-bold mb-3 text-sm" style={{ color: 'var(--eco-text)' }}>{fmt.title}</h3>
                <ul className="flex flex-col gap-1.5 flex-1">
                  {fmt.items.map((item, j) => (
                    <li key={j} className="font-opensans text-xs flex items-start gap-1.5" style={{ color: 'var(--eco-text)', opacity: 0.7 }}>
                      <span style={{ color: 'var(--eco-green)' }}>·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            {ctaBtn('Подобрать формат', 'Подобрать формат участия', 'forexhibitor_formats')}
          </div>
        </div>
      </section>

      {/* ===== ЧТО ВХОДИТ В ПАКЕТ ===== */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center mb-12">Что входит в базовый пакет экспонента</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {PACKAGE_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl px-5 py-3"
                style={{ backgroundColor: 'var(--eco-beige)', border: '1px solid var(--eco-beige-dark)' }}>
                <Icon name="Check" size={16} className="flex-shrink-0" style={{ color: 'var(--eco-green)' } as React.CSSProperties} />
                <span className="font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center font-opensans text-sm mt-4" style={{ color: 'var(--eco-text)', opacity: 0.6 }}>
            <strong style={{ opacity: 0.8 }}>Дополнительно:</strong> брендирование, холодильное оборудование, TV-панели, склад, расширенная реклама, индивидуальная застройка.
          </p>
        </div>
      </section>

      {/* ===== ДЛЯ КОГО ===== */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">GreenExpo решает конкретные бизнес-задачи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESS_CASES.map((bc, i) => (
              <div key={i} className="card-eco p-6 rounded-2xl" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
                <p className="font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                  <span className="font-semibold">{bc.condition}</span> — {bc.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ОБСУДИТЬ УЧАСТИЕ (CTA) ===== */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="section-title mb-4">Обсудим ваше участие?</h2>
          <p className="font-opensans mb-8 text-lg" style={{ color: 'var(--eco-text)', opacity: 0.75 }}>
            Расскажите о своём бренде — мы предложим оптимальный формат и ответим на все вопросы.
          </p>
          {ctaBtn('Отправить заявку', 'Обсудить участие в выставке', 'forexhibitor_discuss')}
        </div>
      </section>

      {/* ===== ДЕЛОВАЯ ПРОГРАММА ===== */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-4">Больше, чем выставка</h2>
          <p className="text-center mb-12 font-opensans max-w-2xl mx-auto" style={{ color: 'var(--eco-text)', opacity: 0.7 }}>
            GreenExpo — это не только экспозиция. Деловая программа усиливает эффект от участия для экспонентов и привлекает дополнительную профессиональную аудиторию.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              'Конференция',
              'Круглые столы',
              'Мастер-классы',
              'Презентации новинок',
              'B2B-встречи speed-dating',
            ].map((title, i) => (
              <div key={i} className="card-eco p-5 rounded-2xl text-center" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
                <span className="font-montserrat font-semibold text-sm" style={{ color: 'var(--eco-text)' }}>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== МАРКЕТИНГОВАЯ ПОДДЕРЖКА ===== */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-4">Мы продвигаем выставку — вы получаете аудиторию</h2>
          <p className="text-center mb-12 font-opensans max-w-2xl mx-auto" style={{ color: 'var(--eco-text)', opacity: 0.7 }}>
            К вашему стенду приходят люди, которые уже заинтересованы в вашем сегменте.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['сайт greenexpo.pro', 'email-рассылки', 'социальные сети', 'Яндекс.Директ и таргетинг', 'профильные медиа', 'PR-кампания', 'блогеры и лидеры мнений', 'отраслевые ассоциации'].map((ch, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full font-opensans text-sm font-medium"
                style={{ backgroundColor: 'var(--eco-beige)', border: '1px solid var(--eco-beige-dark)', color: 'var(--eco-text)' }}>
                {ch}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5 ШАГОВ ===== */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-14">5 шагов до вашего стенда на GreenExpo</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5" style={{ backgroundColor: 'var(--eco-sand)' }} />
            <div className="grid md:grid-cols-5 gap-6">
              {STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-montserrat font-black text-xl mb-4 text-white"
                    style={{ backgroundColor: 'var(--eco-green)' }}>
                    {step.num}
                  </div>
                  <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ДИРЕКТОР ===== */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-green-dark)' }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-4 text-white">
            Напишите директору выставки напрямую
          </h2>
          <p className="mb-10 font-opensans text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Остались вопросы? Нужно обсудить нестандартный формат или крупное партнёрство? Напишите лично директору выставки в удобном мессенджере.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/nastacia_egorova" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-white px-8 py-4 rounded-full font-montserrat font-700 text-sm tracking-widest transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#2AABEE' }}>
              <Icon name="Send" size={20} />
              Написать в Telegram
            </a>
            <a href="https://vk.me/nastacia.egorova" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-white px-8 py-4 rounded-full font-montserrat font-700 text-sm tracking-widest transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#4680C2' }}>
              <Icon name="MessageCircle" size={20} />
              Написать во ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}
                className="rounded-2xl px-6 overflow-hidden"
                style={{ backgroundColor: 'var(--eco-beige)', border: '1px solid var(--eco-beige-dark)' }}>
                <AccordionTrigger className="font-montserrat font-semibold text-left py-5" style={{ color: 'var(--eco-text)' }}>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-opensans text-sm leading-relaxed pb-5" style={{ color: 'var(--eco-text)', opacity: 0.75 }}>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== ФИНАЛЬНАЯ ОТКРЫТАЯ ФОРМА ===== */}
      <section id="form-bottom" className="py-20" style={{ backgroundColor: 'var(--eco-green)' }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white text-center mb-4">
            Забронируйте стенд на GreenExpo 2026
          </h2>
          <p className="text-center mb-10 font-opensans" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Лучшие места уходят первыми. Раннее бронирование = лучшее расположение + специальные условия + максимальная маркетинговая поддержка.
          </p>
          <div className="rounded-2xl p-8 md:p-10 shadow-xl" style={{ backgroundColor: 'white' }}>
            {openSent ? (
              <p className="text-center font-opensans py-6" style={{ color: 'var(--eco-green-dark)' }}>
                Спасибо! Ваш запрос отправлен, мы свяжемся с вами в ближайшее время.
              </p>
            ) : (
              <form onSubmit={handleOpenFormSubmit} className="space-y-4">
                <input required type="text" placeholder="Имя" value={openForm.name}
                  onChange={e => setOpenForm({ ...openForm, name: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                  style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
                <input required type="tel" placeholder="Телефон" value={openForm.phone}
                  onChange={e => setOpenForm({ ...openForm, phone: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                  style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
                <input required type="email" placeholder="Email" value={openForm.email}
                  onChange={e => setOpenForm({ ...openForm, email: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                  style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
                <button type="submit" disabled={openSending}
                  className="w-full font-montserrat font-700 text-sm tracking-widest py-4 rounded-full transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white', opacity: openSending ? 0.7 : 1 }}>
                  {openSending ? 'ОТПРАВЛЯЕМ...' : 'ЗАБРОНИРОВАТЬ СТЕНД'}
                </button>
                <div className="flex flex-col gap-1.5 text-sm font-opensans" style={{ color: 'var(--eco-text)', opacity: 0.65 }}>
                  <span>✅ Ответим в течение часа</span>
                  <span>✅ Бесплатная консультация</span>
                  <span>✅ Поможем с субсидией</span>
                </div>
                <p className="text-center font-opensans text-xs leading-relaxed" style={{ color: '#888' }}>
                  Нажимая на кнопку «Отправить» я принимаю{' '}
                  <Link to="/terms" className="underline" style={{ color: 'var(--eco-green)' }}>Пользовательское соглашение</Link>{' '}
                  и даю согласие на обработку персональных данных согласно{' '}
                  <Link to="/privacy" className="underline" style={{ color: 'var(--eco-green)' }}>Политике конфиденциальности</Link>*
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== КОНТАКТЫ ===== */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-10">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
              <h3 className="font-montserrat font-bold mb-4" style={{ color: 'var(--eco-text)' }}>Участие в выставке</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:+74951180639" className="flex items-center gap-2 font-opensans text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--eco-text)' }}>
                  <Icon name="Phone" size={16} style={{ color: 'var(--eco-green)', flexShrink: 0 } as React.CSSProperties} />
                  +7 (495) 118-06-39
                </a>
                <a href="mailto:mail@greenexpo.pro" className="flex items-center gap-2 font-opensans text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--eco-text)' }}>
                  <Icon name="Mail" size={16} style={{ color: 'var(--eco-green)', flexShrink: 0 } as React.CSSProperties} />
                  mail@greenexpo.pro
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
              <h3 className="font-montserrat font-bold mb-4" style={{ color: 'var(--eco-text)' }}>Мессенджеры</h3>
              <div className="flex flex-col gap-2">
                <a href="https://t.me/greenexpo" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-opensans text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: '#2AABEE' }}>
                  <Icon name="Send" size={16} /> Telegram
                </a>
                <a href="https://vk.me/greenexpo" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-opensans text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: '#4680C2' }}>
                  <Icon name="MessageCircle" size={16} /> ВКонтакте
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: 'white', border: '1px solid var(--eco-beige-dark)' }}>
              <h3 className="font-montserrat font-bold mb-4" style={{ color: 'var(--eco-text)' }}>Адрес площадки</h3>
              <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)', opacity: 0.7 }}>
                МВЦ «Крокус Экспо», Павильон 1, Зал 1<br />
                Московская обл., Красногорский р-н,<br />
                65–66 км МКАД (внешняя сторона)<br />
                <span className="font-medium" style={{ color: 'var(--eco-green)' }}>7–9 сентября 2026</span>
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://greenexpo.pro" target="_blank" rel="noopener noreferrer"
              className="font-montserrat font-semibold hover:underline" style={{ color: 'var(--eco-green)' }}>
              greenexpo.pro
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* ===== POPUP ===== */}
      <ModalForm
        open={modal.open}
        onClose={() => setModal(m => ({ ...m, open: false }))}
        title={modal.title}
        source={modal.source}
        utm={utm}
      />
    </div>
  );
}