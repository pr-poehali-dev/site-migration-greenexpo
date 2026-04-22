import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/94e770a5-5063-43e5-9110-fd23f343fbd9.jpg';

const SEGMENTS = [
  { icon: '🥗', title: 'Органическая продукция и здоровое питание' },
  { icon: '💄', title: 'Натуральная и органическая косметика' },
  { icon: '🏠', title: 'Экотовары для дома и быта' },
  { icon: '🌱', title: 'Сити-фермерство и urban farming' },
  { icon: '🌳', title: 'Ландшафтный дизайн и благоустройство' },
  { icon: '🏕️', title: 'Экотуризм и экологичный отдых' },
  { icon: '👕', title: 'Экологичная мода и аксессуары' },
  { icon: '♻️', title: 'Экологичные технологии и упаковка' },
];

const ADVANTAGES = [
  {
    icon: 'Target',
    emoji: '🎯',
    title: 'Целевая аудитория в одном месте',
    text: 'Закупщики и дистрибьюторы приходят сами — с конкретным запросом на продукцию вашего сегмента.',
  },
  {
    icon: 'Briefcase',
    emoji: '💼',
    title: 'Прямые переговоры с байерами',
    text: 'За 3 дня — десятки живых переговоров с теми, кто принимает решения о закупках.',
  },
  {
    icon: 'Globe',
    emoji: '🌍',
    title: 'Выход на федеральный рынок',
    text: 'Москва, Крокус Экспо. Доступ к партнёрам со всей России и из других стран.',
  },
  {
    icon: 'Handshake',
    emoji: '🤝',
    title: 'Расширение дилерской сети',
    text: 'На выставке работают дистрибьюторы, ищущие новые бренды для своего портфеля.',
  },
  {
    icon: 'Megaphone',
    emoji: '📢',
    title: 'PR и медийный эффект',
    text: 'Работают профильные медиа и блогеры. Участие усиливает позиции бренда.',
  },
  {
    icon: 'BadgePercent',
    emoji: '💰',
    title: 'Субсидии для МСБ',
    text: 'Малый и средний бизнес может компенсировать расходы на участие через региональные программы поддержки.',
  },
];

const BUSINESS_CASES = [
  { emoji: '🏭', condition: 'Если вы региональный производитель', result: 'выход на федеральный рынок' },
  { emoji: '🔍', condition: 'Если вы ищете дистрибьюторов', result: 'прямой контакт с оптовиками' },
  { emoji: '🚀', condition: 'Если вы запускаете новинку', result: 'тестирование и обратная связь' },
  { emoji: '🛒', condition: 'Если хотите войти в торговые сети', result: 'байеры на месте' },
  { emoji: '🌏', condition: 'Если вы зарубежный бренд', result: 'вход на российский рынок' },
  { emoji: '📣', condition: 'Если хотите усилить бренд', result: 'PR и медийный эффект' },
];

const FORMATS = [
  {
    title: 'Выставочный стенд',
    icon: '🏢',
    items: ['от 6 до 12+ м²', 'стандартная застройка', 'мебель, освещение, вывеска', 'размещение в каталоге', 'персональный менеджер'],
  },
  {
    title: 'Деловая программа',
    icon: '🎤',
    items: ['выступление на конференции', 'мастер-класс', 'презентация продукта', 'панельная дискуссия'],
  },
  {
    title: 'Спонсорский пакет',
    icon: '⭐',
    items: ['брендинг зон', 'приоритетное размещение', 'индивидуальные интеграции', 'расширенная реклама'],
  },
  {
    title: 'Онлайн-участие',
    icon: '💻',
    items: ['размещение в онлайн-каталоге', 'упоминание в рассылках', 'доступ к контактам'],
  },
];

const PACKAGE_ITEMS = [
  'Аренда выставочной площади',
  'Стандартная застройка стенда',
  'Вывеска / фриз с названием компании',
  'Электроподключение',
  'Базовая мебель',
  'Размещение в каталоге участников',
  'Размещение на сайте greenexpo.pro',
  'Бейджи для команды',
  'Персональный менеджер проекта',
  'Доступ к зоне переговоров',
];

const STEPS = [
  { num: '01', text: 'Оставьте заявку на сайте' },
  { num: '02', text: 'Обсудим ваши задачи и подберём формат' },
  { num: '03', text: 'Подготовим документы и счёт' },
  { num: '04', text: 'При необходимости — поможем с субсидией' },
  { num: '05', text: 'Подтвердим участие и начнём подготовку' },
];

const FAQ = [
  {
    q: 'Сколько стоит участие?',
    a: 'Стоимость зависит от площади стенда и выбранного пакета. Мы подберём оптимальный вариант под ваш бюджет и задачи. Для МСБ возможна компенсация через субсидию.',
  },
  {
    q: 'Кто посещает выставку?',
    a: 'Закупщики торговых сетей, дистрибьюторы, оптовые компании, HoReCa, маркетплейсы, специализированные магазины и конечные потребители.',
  },
  {
    q: 'Я из региона. Мне это подходит?',
    a: 'Да. GreenExpo — федеральная площадка в Москве. Для региональных компаний МСБ часто доступна субсидия на участие.',
  },
  {
    q: 'Мы небольшая компания. Нам это по силам?',
    a: 'Да. Есть компактные форматы стендов + возможность субсидирования. Мы помогаем подготовиться даже тем, кто участвует впервые.',
  },
  {
    q: 'Как забронировать стенд?',
    a: 'Оставьте заявку на сайте или свяжитесь с менеджером. Мы подберём формат, подготовим документы и подтвердим участие.',
  },
  {
    q: 'Можно ли участвовать в деловой программе?',
    a: 'Да. Вы можете подать заявку на выступление, мастер-класс или презентацию новинки.',
  },
  {
    q: 'Что делать, если я ещё не готов к участию?',
    a: 'Можно начать с онлайн-каталога или посетить выставку в качестве гостя, чтобы оценить площадку.',
  },
];

const AREA_OPTIONS = ['6 м²', '9 м²', '12 м²', 'Больше', 'Не определились'];

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  segment: string;
  comment: string;
  region: string;
  produces: string;
  area: string;
}

const emptyForm = (): FormData => ({
  name: '', phone: '', email: '', company: '',
  segment: '', comment: '', region: '', produces: '', area: '',
});

export default function ForExhibitor() {
  const [form1, setForm1] = useState<FormData>(emptyForm());
  const [form2, setForm2] = useState<FormData>(emptyForm());
  const [form3, setForm3] = useState<FormData>(emptyForm());
  const [form4, setForm4] = useState<FormData>(emptyForm());
  const [sent1, setSent1] = useState(false);
  const [sent2, setSent2] = useState(false);
  const [sent3, setSent3] = useState(false);
  const [sent4, setSent4] = useState(false);

  const handleSubmit = (
    e: React.FormEvent,
    formData: FormData,
    setData: (d: FormData) => void,
    setSent: (v: boolean) => void,
    formName: string,
  ) => {
    e.preventDefault();
    console.log(`${formName}:`, formData);
    setSent(true);
    setData(emptyForm());
  };

  const field = (
    label: string,
    key: keyof FormData,
    data: FormData,
    setData: (d: FormData) => void,
    required = false,
    type = 'text',
  ) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-eco-text font-opensans">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={data[key]}
        onChange={e => setData({ ...data, [key]: e.target.value })}
        className="border border-[var(--eco-sand)] rounded-lg px-4 py-2.5 text-eco-text bg-white focus:outline-none focus:ring-2 focus:ring-[var(--eco-green)] text-sm font-opensans"
      />
    </div>
  );

  const selectField = (
    label: string,
    key: keyof FormData,
    options: string[],
    data: FormData,
    setData: (d: FormData) => void,
    required = false,
  ) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-eco-text font-opensans">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <select
        required={required}
        value={data[key]}
        onChange={e => setData({ ...data, [key]: e.target.value })}
        className="border border-[var(--eco-sand)] rounded-lg px-4 py-2.5 text-eco-text bg-white focus:outline-none focus:ring-2 focus:ring-[var(--eco-green)] text-sm font-opensans"
      >
        <option value="">— Выберите —</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  const successMsg = (
    <div className="text-center py-6">
      <div className="text-4xl mb-3">✅</div>
      <p className="text-eco-green font-semibold font-montserrat text-lg">Заявка отправлена!</p>
      <p className="text-eco-text/70 text-sm font-opensans mt-1">Мы свяжемся с вами в ближайшее время.</p>
    </div>
  );

  const formNote = (
    <div className="mt-4 flex flex-col gap-1.5 text-sm text-eco-text/70 font-opensans">
      <span>✅ Ответим в течение часа в рабочее время</span>
      <span>✅ Данные не передаём третьим лицам</span>
      <span>✅ Расскажем про субсидию для МСБ</span>
      <p className="text-xs mt-1">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <Link to="/privacy" className="text-eco-green underline">политикой конфиденциальности</Link>
      </p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-eco-beige font-opensans">
      <Header />

      {/* Floating messenger button */}
      <a
        href="https://t.me/greenexpo"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#2AABEE] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
        title="Написать в Telegram"
      >
        <Icon name="Send" size={24} />
      </a>

      {/* ===== БЛОК 1: HERO ===== */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26,74,26,0.88) 0%, rgba(45,106,45,0.75) 100%), url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center max-w-4xl">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-montserrat font-600 mb-6 tracking-wide">
            7–9 СЕНТЯБРЯ 2026 · КРОКУС ЭКСПО · МОСКВА
          </div>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            GreenExpo 2026 —<br />
            <span className="text-[#a8d8a8]">международная выставка-форум</span><br />
            «Жизнь в стиле ECO»
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 font-opensans max-w-2xl mx-auto">
            Крокус Экспо, Москва. Площадка, где производители встречаются с покупателями, дистрибьюторами и партнёрами.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <a href="#form1" className="btn-primary px-8 py-4 rounded-xl font-montserrat font-bold text-base inline-block">
              Забронировать стенд
            </a>
            <a href="#form1" className="btn-outline border-2 border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-montserrat font-bold text-base inline-block">
              Получить условия участия
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: '🌿', text: 'B2B + B2C аудитория в одном месте' },
              { icon: '🤝', text: 'Прямые переговоры с байерами и дистрибьюторами' },
              { icon: '💰', text: 'Возможность компенсации расходов через субсидию для МСБ' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-sm">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <span className="font-opensans text-white/90">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 2: О ВЫСТАВКЕ ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-4">Что такое GreenExpo</h2>
          <p className="text-eco-text/80 text-center max-w-3xl mx-auto mb-12 leading-relaxed font-opensans text-lg">
            GreenExpo — международная выставка-форум «Жизнь в стиле ECO». Это специализированная площадка, объединяющая производителей, дистрибьюторов, закупщиков и конечных потребителей в сегментах органического, натурального и экологичного образа жизни.
            <br /><br />
            Выставка проходит в Крокус Экспо — одной из крупнейших выставочных площадок России.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📍', label: 'Крокус Экспо, Москва' },
              { icon: '🌍', label: 'Международный формат' },
              { icon: '👥', label: 'B2B + B2C аудитория' },
              { icon: '🎯', label: '8 тематических разделов' },
            ].map((item, i) => (
              <div key={i} className="card-eco text-center p-6 rounded-2xl border border-[var(--eco-beige-dark)]">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <span className="font-montserrat font-semibold text-eco-text text-sm leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 3: ТЕМАТИЧЕСКИЕ РАЗДЕЛЫ ===== */}
      <section className="py-20 bg-eco-beige">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-4">Ваш бренд вписывается в один из разделов выставки</h2>
          <p className="text-center text-eco-text/70 mb-12 font-opensans">8 специализированных направлений для вашего бизнеса</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {SEGMENTS.map((seg, i) => (
              <div key={i} className="card-eco bg-white p-5 rounded-2xl border border-[var(--eco-beige-dark)] hover:border-[var(--eco-green-light)] transition-colors">
                <span className="text-3xl block mb-2">{seg.icon}</span>
                <span className="font-montserrat font-semibold text-eco-text text-sm leading-snug">{seg.title}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <span className="text-eco-text/70 font-opensans mr-3">Не нашли свой раздел?</span>
            <a href="#form3" className="btn-primary px-6 py-2.5 rounded-xl text-sm font-montserrat font-bold inline-block">
              Напишите нам
            </a>
          </div>
        </div>
      </section>

      {/* ===== БЛОК 4: ФОРМА №1 — СТОИМОСТЬ ===== */}
      <section id="form1" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="border-2 border-[var(--eco-green)] rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="section-title text-center mb-2">Узнайте стоимость участия</h2>
            <p className="text-center text-eco-text/70 mb-8 font-opensans">
              Оставьте заявку — мы подберём оптимальный формат и отправим условия в течение рабочего дня.
            </p>
            {sent1 ? successMsg : (
              <form onSubmit={e => handleSubmit(e, form1, setForm1, setSent1, 'Форма 1 - Стоимость')} className="flex flex-col gap-4">
                {field('Имя', 'name', form1, setForm1, true)}
                {field('Телефон', 'phone', form1, setForm1, true, 'tel')}
                {field('Email', 'email', form1, setForm1, false, 'email')}
                {field('Компания / бренд', 'company', form1, setForm1)}
                {selectField('Сегмент', 'segment', SEGMENTS.map(s => s.title), form1, setForm1)}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-eco-text font-opensans">Комментарий</label>
                  <textarea
                    rows={3}
                    value={form1.comment}
                    onChange={e => setForm1({ ...form1, comment: e.target.value })}
                    className="border border-[var(--eco-sand)] rounded-lg px-4 py-2.5 text-eco-text bg-white focus:outline-none focus:ring-2 focus:ring-[var(--eco-green)] text-sm font-opensans resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary py-4 rounded-xl font-montserrat font-bold text-base mt-2">
                  Получить условия участия
                </button>
                {formNote}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 5: АУДИТОРИЯ ===== */}
      <section className="py-20 bg-eco-beige">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">Кто приходит на GreenExpo</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-[var(--eco-beige-dark)]">
              <h3 className="font-montserrat font-bold text-lg text-eco-green mb-4">B2B-аудитория</h3>
              <ul className="space-y-2">
                {['Закупщики торговых сетей', 'Дистрибьюторы и оптовые компании', 'Владельцы специализированных магазинов', 'Представители маркетплейсов', 'Компании HoReCa', 'Региональные партнёры и дилеры', 'Аптечные сети', 'Импортёры и экспортёры', 'Профильные медиа и блогеры'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-eco-text/80 font-opensans text-sm">
                    <span className="text-eco-green mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[var(--eco-beige-dark)]">
              <h3 className="font-montserrat font-bold text-lg text-eco-green mb-4">B2C-аудитория</h3>
              <ul className="space-y-2">
                {['Осознанные потребители', 'Покупатели органической продукции', 'Поклонники ЗОЖ', 'Потребители натуральной косметики', 'Семьи с детьми', 'Сити-фермеры и садоводы', 'Eco-активисты'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-eco-text/80 font-opensans text-sm">
                    <span className="text-eco-green mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[var(--eco-green)] text-white rounded-2xl p-6 text-center">
            <p className="font-montserrat font-semibold text-lg">
              💡 На GreenExpo приходит подготовленная аудитория. Это значит — высокая заинтересованность, готовность к диалогу и реальные решения о закупках.
            </p>
          </div>
        </div>
      </section>

      {/* ===== БЛОК 6: ПРЕИМУЩЕСТВА ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">Почему компании выбирают GreenExpo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="card-eco bg-eco-beige p-6 rounded-2xl border border-[var(--eco-beige-dark)]">
                <span className="text-4xl block mb-3">{adv.emoji}</span>
                <h3 className="font-montserrat font-bold text-eco-text mb-2">{adv.title}</h3>
                <p className="text-eco-text/70 font-opensans text-sm leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 7: СУБСИДИЯ (АКЦЕНТ) ===== */}
      <section className="py-20 bg-[var(--eco-beige-dark)]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-5xl block mb-4">💰</span>
          <h2 className="section-title mb-4">Участие может быть компенсировано</h2>
          <p className="text-eco-text/80 mb-6 font-opensans text-lg max-w-2xl mx-auto">
            Для малого и среднего бизнеса в ряде регионов России доступны программы, позволяющие компенсировать часть или все расходы на участие в выставке.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['аренду выставочной площади', 'застройку стенда', 'регистрационные взносы', 'рекламные услуги'].map((item, i) => (
              <span key={i} className="bg-[var(--eco-green)] text-white px-4 py-2 rounded-full text-sm font-montserrat font-semibold">
                ✓ {item}
              </span>
            ))}
          </div>
          <p className="text-eco-text/70 mb-8 font-opensans">
            Мы помогаем разобраться, есть ли в вашем регионе такая программа, и подсказываем, как оформить заявку.
          </p>
          <a href="#form2" className="btn-primary px-10 py-4 rounded-xl font-montserrat font-bold text-base inline-block">
            Узнать про субсидию
          </a>
        </div>
      </section>

      {/* ===== БЛОК 8: ФОРМА №2 — СУБСИДИЯ ===== */}
      <section id="form2" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-[var(--eco-beige)] rounded-3xl p-8 md:p-10 border border-[var(--eco-beige-dark)] shadow-md">
            <h2 className="section-title text-center mb-2">Хотите узнать, покроет ли субсидия ваше участие?</h2>
            <p className="text-center text-eco-text/70 mb-8 font-opensans text-sm">
              Оставьте контакты — расскажем, какие программы действуют в вашем регионе и как их получить.
            </p>
            {sent2 ? successMsg : (
              <form onSubmit={e => handleSubmit(e, form2, setForm2, setSent2, 'Форма 2 - Субсидия')} className="flex flex-col gap-4">
                {field('Имя', 'name', form2, setForm2, true)}
                {field('Телефон', 'phone', form2, setForm2, true, 'tel')}
                {field('Регион', 'region', form2, setForm2, true)}
                {field('Компания', 'company', form2, setForm2)}
                <button type="submit" className="btn-primary py-4 rounded-xl font-montserrat font-bold text-base mt-2">
                  Узнать о субсидии
                </button>
                <p className="text-xs text-eco-text/60 font-opensans text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <Link to="/privacy" className="text-eco-green underline">политикой конфиденциальности</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 9: ФОРМАТЫ УЧАСТИЯ ===== */}
      <section className="py-20 bg-eco-beige">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">Выберите формат под ваши задачи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {FORMATS.map((fmt, i) => (
              <div key={i} className="card-eco bg-white p-6 rounded-2xl border border-[var(--eco-beige-dark)] flex flex-col">
                <span className="text-4xl block mb-3">{fmt.icon}</span>
                <h3 className="font-montserrat font-bold text-eco-text mb-3 text-sm">{fmt.title}</h3>
                <ul className="flex flex-col gap-1.5 flex-1">
                  {fmt.items.map((item, j) => (
                    <li key={j} className="text-eco-text/70 font-opensans text-xs flex items-start gap-1.5">
                      <span className="text-eco-green mt-0.5 text-sm">·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#form3" className="btn-primary px-10 py-4 rounded-xl font-montserrat font-bold text-base inline-block">
              Подобрать формат
            </a>
          </div>
        </div>
      </section>

      {/* ===== БЛОК 10: ЧТО ВХОДИТ В ПАКЕТ ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center mb-12">Что входит в базовый пакет экспонента</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {PACKAGE_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-eco-beige rounded-xl px-5 py-3 border border-[var(--eco-beige-dark)]">
                <span className="text-eco-green text-lg flex-shrink-0">✅</span>
                <span className="font-opensans text-eco-text text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center text-eco-text/60 font-opensans text-sm mt-4">
            <strong className="text-eco-text/80">Дополнительно:</strong> брендирование, холодильное оборудование, TV-панели, склад, расширенная реклама.
          </div>
        </div>
      </section>

      {/* ===== БЛОК 11: ДЛЯ КОГО ===== */}
      <section className="py-20 bg-eco-beige">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-12">GreenExpo решает конкретные бизнес-задачи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESS_CASES.map((bc, i) => (
              <div key={i} className="card-eco bg-white p-6 rounded-2xl border border-[var(--eco-beige-dark)]">
                <span className="text-3xl block mb-3">{bc.emoji}</span>
                <p className="font-opensans text-eco-text text-sm">
                  <span className="font-semibold">{bc.condition}</span> — {bc.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 12: ФОРМА №3 — ОБСУДИТЬ ===== */}
      <section id="form3" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="section-title text-center mb-2">Обсудим ваше участие?</h2>
          <p className="text-center text-eco-text/70 mb-10 font-opensans">
            Расскажите о своём бренде — мы предложим оптимальный формат и ответим на все вопросы.
          </p>
          {sent3 ? successMsg : (
            <form onSubmit={e => handleSubmit(e, form3, setForm3, setSent3, 'Форма 3 - Обсудить участие')} className="flex flex-col gap-4 bg-eco-beige p-8 rounded-3xl border border-[var(--eco-beige-dark)]">
              {field('Имя', 'name', form3, setForm3, true)}
              {field('Телефон', 'phone', form3, setForm3, true, 'tel')}
              {field('Email', 'email', form3, setForm3, false, 'email')}
              {field('Компания', 'company', form3, setForm3)}
              {field('Что производите', 'produces', form3, setForm3)}
              <button type="submit" className="btn-primary py-4 rounded-xl font-montserrat font-bold text-base mt-2">
                Отправить заявку
              </button>
              <p className="text-xs text-eco-text/60 font-opensans text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <Link to="/privacy" className="text-eco-green underline">политикой конфиденциальности</Link>
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ===== БЛОК 13: ДЕЛОВАЯ ПРОГРАММА ===== */}
      <section className="py-20 bg-eco-beige">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-4">Больше, чем выставка</h2>
          <p className="text-center text-eco-text/70 mb-12 font-opensans max-w-2xl mx-auto">
            GreenExpo — это не только экспозиция. Деловая программа усиливает эффект от участия для экспонентов и привлекает дополнительную профессиональную аудиторию.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: '📊', title: 'Конференция' },
              { icon: '💬', title: 'Круглые столы' },
              { icon: '🎓', title: 'Мастер-классы' },
              { icon: '🆕', title: 'Презентации новинок' },
              { icon: '🤝', title: 'B2B-встречи в формате speed-dating' },
            ].map((item, i) => (
              <div key={i} className="card-eco bg-white p-5 rounded-2xl border border-[var(--eco-beige-dark)] text-center">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <span className="font-montserrat font-semibold text-eco-text text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 14: МАРКЕТИНГОВАЯ ПОДДЕРЖКА ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-4">Мы продвигаем выставку — вы получаете аудиторию</h2>
          <p className="text-center text-eco-text/70 mb-12 font-opensans max-w-2xl mx-auto">
            К вашему стенду приходят люди, которые уже заинтересованы в вашем сегменте.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'сайт greenexpo.pro',
              'email-рассылки',
              'социальные сети',
              'Яндекс.Директ и таргетинг',
              'профильные медиа',
              'PR-кампания',
              'блогеры и лидеры мнений',
              'отраслевые ассоциации',
            ].map((ch, i) => (
              <span key={i} className="bg-eco-beige border border-[var(--eco-beige-dark)] text-eco-text px-5 py-2.5 rounded-full font-opensans text-sm font-medium">
                {ch}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 15: КАК ПРИНЯТЬ УЧАСТИЕ ===== */}
      <section className="py-20 bg-eco-beige">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-14">5 шагов до вашего стенда на GreenExpo</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[var(--eco-sand)]" />
            <div className="grid md:grid-cols-5 gap-6">
              {STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--eco-green)] text-white flex items-center justify-center font-montserrat font-black text-xl mb-4">
                    {step.num}
                  </div>
                  <p className="font-opensans text-eco-text text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== БЛОК 16: ДИРЕКТОР ВЫСТАВКИ ===== */}
      <section className="py-20 bg-[var(--eco-green-dark)] text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-4">
            Напишите директору выставки напрямую
          </h2>
          <p className="text-white/80 font-opensans mb-10 text-lg max-w-xl mx-auto">
            Остались вопросы? Нужно обсудить нестандартный формат или крупное партнёрство? Напишите лично директору выставки в удобном мессенджере — ответим быстро и по существу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/greenexpo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#2AABEE] hover:bg-[#229ED9] text-white px-8 py-4 rounded-xl font-montserrat font-bold text-base transition-colors"
            >
              <Icon name="Send" size={22} />
              Написать в Telegram
            </a>
            <a
              href="https://vk.me/greenexpo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#4680C2] hover:bg-[#3a6fad] text-white px-8 py-4 rounded-xl font-montserrat font-bold text-base transition-colors"
            >
              <Icon name="MessageCircle" size={22} />
              Написать во ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* ===== БЛОК 17: FAQ ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-eco-beige border border-[var(--eco-beige-dark)] rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="font-montserrat font-semibold text-eco-text text-left py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-eco-text/75 font-opensans text-sm leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== БЛОК 18: ФОРМА №4 — ФИНАЛЬНАЯ ===== */}
      <section id="form4" className="py-20 bg-[var(--eco-green)]">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white text-center mb-4">
            Забронируйте стенд на GreenExpo 2026
          </h2>
          <p className="text-white/85 text-center mb-10 font-opensans">
            Лучшие места уходят первыми. Раннее бронирование = лучшее расположение + специальные условия + максимальная маркетинговая поддержка.
          </p>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
            {sent4 ? successMsg : (
              <form onSubmit={e => handleSubmit(e, form4, setForm4, setSent4, 'Форма 4 - Финальная')} className="flex flex-col gap-4">
                {field('Имя', 'name', form4, setForm4, true)}
                {field('Телефон', 'phone', form4, setForm4, true, 'tel')}
                {field('Email', 'email', form4, setForm4, false, 'email')}
                {field('Компания', 'company', form4, setForm4)}
                {selectField('Желаемая площадь стенда', 'area', AREA_OPTIONS, form4, setForm4)}
                <button type="submit" className="btn-primary py-4 rounded-xl font-montserrat font-bold text-lg mt-2">
                  Забронировать стенд
                </button>
                <div className="flex flex-col gap-1.5 text-sm text-eco-text/70 font-opensans">
                  <span>✅ Ответим в течение часа</span>
                  <span>✅ Бесплатная консультация</span>
                  <span>✅ Поможем с субсидией</span>
                </div>
                <p className="text-xs text-eco-text/60 font-opensans">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <Link to="/privacy" className="text-eco-green underline">политикой конфиденциальности</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== БЛОК 19: КОНТАКТЫ ===== */}
      <section className="py-16 bg-eco-beige">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-10">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[var(--eco-beige-dark)]">
              <h3 className="font-montserrat font-bold text-eco-text mb-4">Участие в выставке</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:+74955090143" className="flex items-center gap-2 text-eco-text hover:text-eco-green transition-colors font-opensans text-sm">
                  <Icon name="Phone" size={16} className="text-eco-green" />
                  +7 (495) 509-01-43
                </a>
                <a href="mailto:expo@greenexpo.pro" className="flex items-center gap-2 text-eco-text hover:text-eco-green transition-colors font-opensans text-sm">
                  <Icon name="Mail" size={16} className="text-eco-green" />
                  expo@greenexpo.pro
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[var(--eco-beige-dark)]">
              <h3 className="font-montserrat font-bold text-eco-text mb-4">Мессенджеры</h3>
              <div className="flex flex-col gap-2">
                <a href="https://t.me/greenexpo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2AABEE] hover:opacity-80 transition-opacity font-opensans text-sm font-medium">
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
                <a href="https://vk.me/greenexpo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#4680C2] hover:opacity-80 transition-opacity font-opensans text-sm font-medium">
                  <Icon name="MessageCircle" size={16} />
                  ВКонтакте
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[var(--eco-beige-dark)]">
              <h3 className="font-montserrat font-bold text-eco-text mb-4">Адрес площадки</h3>
              <p className="text-eco-text/70 font-opensans text-sm leading-relaxed">
                МВЦ «Крокус Экспо», Павильон 1, Зал 1<br />
                Московская обл., Красногорский р-н,<br />
                65–66 км МКАД (внешняя сторона)<br />
                <span className="text-eco-green font-medium">7–9 сентября 2026</span>
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://greenexpo.pro" target="_blank" rel="noopener noreferrer" className="text-eco-green font-montserrat font-semibold hover:underline">
              greenexpo.pro
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
