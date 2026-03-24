import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useUtm } from '@/hooks/useUtm';

const heroImage = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/5394c160-2a6a-4345-a2d3-d23038df86b2.jpg';
const expoImage = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/4db694dd-cc8c-49d7-979b-20eb8b01522b.jpg';

const heroBg = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/69dcded5-954d-46e4-9cce-df5e656ab60b.png';

const stats = [
  { value: '12000+', label: 'посетителей', green: true },
  { value: '50+', label: 'участников', green: false },
  { value: '30+', label: 'экспертов и спикеров', green: true },
];

const aboutFeatures = [
  { icon: 'Leaf', title: 'Органические продукты', desc: 'Широкий ассортимент натуральных и органических продуктов питания от ведущих производителей России и зарубежья' },
  { icon: 'Recycle', title: 'Экотехнологии', desc: 'Инновационные решения в области переработки, возобновляемой энергетики и устойчивого производства' },
  { icon: 'ShoppingBag', title: 'Эко-товары', desc: 'Биоразлагаемая упаковка, натуральная косметика, органическая бытовая химия и товары для дома' },
  { icon: 'Users', title: 'Нетворкинг', desc: 'Встречи с производителями, дистрибьюторами и инвесторами. Деловые переговоры и заключение контрактов' },
];

const whyParticipate = [
  { icon: 'UserCheck', title: 'Гарантированные качественные B2B контакты', desc: 'с дистрибьюторами, закупщиками торговых сетей, экомагазинов, садовых центров и др.' },
  { icon: 'Target', title: '100% целевая аудитория', desc: '- B2B и B2C потребители' },
  { icon: 'ShoppingCart', title: 'Возможность продавать', desc: 'продукцию' },
  { icon: 'Monitor', title: 'Демонстрация продукции/услуг', desc: 'заинтересованной целевой аудитории' },
  { icon: 'Maximize2', title: 'Расширение рынка сбыта', desc: 'и географии продаж' },
  { icon: 'Award', title: 'Повышение узнаваемости бренда', desc: '' },
  { icon: 'MessageSquareMore', title: 'Получение обратной связи', desc: 'от посетителей выставки' },
  { icon: 'Megaphone', title: 'Продвижение через маркетинговые инструменты', desc: 'FlowersExpo2026 и GreenExpo2026' },
];

const subsidyInfo = [
  { title: 'Бизнес-инкубатор и технопарки', desc: 'Резиденты государственных бизнес-инкубаторов могут получить субсидию до 50% стоимости участия' },
  { title: 'Сельхозпроизводители', desc: 'Действуют специальные условия для фермерских хозяйств и малых предприятий АПК. Узнайте подробности у менеджера' },
];

const whyCome = [
  { icon: '', title: '1 билет – 2 выставки', desc: '(GreenExpo + FlowersExpo)', highlight: 'FlowersExpo', highlightUrl: 'https://www.flowers-expo.ru/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=button_3_block', isLogos: true },
  { icon: 'Users', title: '350+ компаний', desc: '', green: true, img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/ac37263e-a3f0-4e73-b1c3-ab61d796d7ce.png' },
  { icon: 'Percent', title: 'СКИДКИ на продукцию экспонентов', desc: '', img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/4d56a7e4-e90b-481e-b226-d1f27392872f.png' },
  { icon: 'Home', title: 'БЕСПРОИГРЫШНАЯ лотерея для всех посетителей', desc: '', img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/c81118d3-8fd2-4638-93b8-f2f0305f6c19.png' },
  { icon: 'UtensilsCrossed', title: 'Дегустация', desc: 'сортов и гибридов овощных культур российской селекции', green: true, img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/cd0e8157-1622-44ba-83e5-9b973e5c65d0.png' },
  { icon: 'Music', title: 'Насыщенная программа:', desc: 'мастер-классы, лекции, нетворкинг', img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/9862d8ab-b7ef-4b74-95ea-e696ffd6e418.png' },
  { icon: 'UserCheck', title: 'Живые встречи', desc: 'с эко-блогерами и экспертами', img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/033425af-569c-4b6f-a5bc-31c4497d00c6.png' },
];

const pressItems = [
  { img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/3905c358-91dd-4c8e-9b3e-076b5cb45649.jpg', label: 'Публикации в СМИ' },
  { img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/2ae1d359-01d6-44a3-b837-aeb1c216f5cc.jpg', label: 'Пресс-конференция' },
  { img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/884da8d0-6131-4c94-b2e0-522bae05ff46.jpg', label: 'Телесъёмки' },
];

const partners = [
  { name: 'Союз органического земледелия', logo: 'https://cdn.poehali.dev/files/42e67576-c450-45e0-90d0-e9796ca964c9.jpg', url: 'https://soz.bio/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
  { name: 'Фонд Органика', logo: 'https://cdn.poehali.dev/files/9920cf71-2de3-4a84-8396-0fb6e645e493.png', url: 'https://organicfund.ru/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
  { name: 'Wildberries & Russ', logo: 'https://cdn.poehali.dev/files/9dfb62a3-8e69-4bb0-a08c-8c23a309809e.png', url: 'https://www.wildberries.ru/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
  { name: 'Роскачество', logo: 'https://cdn.poehali.dev/files/2c4f4bf7-7240-41e1-bcff-6b312fdc5a63.png', url: 'https://roskachestvo.gov.ru/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
  { name: 'SYNTX', logo: 'https://cdn.poehali.dev/files/eb175aaa-454e-4618-ac5c-7e80672e3d04.jpg', url: 'https://syntx.ai/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
];

const infoPartners = [
  { name: 'ШОЗ', logo: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/220b2bbc-3cae-4d52-ac08-c90e705d371b.jpg', url: 'https://vk.com/organicschool_online?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
  { name: 'АГРОпрактика', logo: 'https://cdn.poehali.dev/files/3215cc0c-27f0-4cab-9555-2eacb8ff8f94.jpg', url: 'https://www.agropraktika.com/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
  { name: 'Союз органического земледелия', logo: 'https://cdn.poehali.dev/files/067b4fdc-f0a2-4535-8417-07d2ba92cdb3.jpg', url: 'https://soz.bio/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
  { name: 'ECO portal', logo: 'https://cdn.poehali.dev/files/b091d059-c574-4adf-932b-21699ea8822e.jpg', url: 'https://ecoportal.su/?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
  { name: 'NIKOMA', logo: 'https://cdn.poehali.dev/files/aa068fce-d090-43fc-b8db-37e389af587b.png', url: 'https://vk.com/nikoma_garden?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=partner_block' },
];

const NOTIFY_URL = 'https://functions.poehali.dev/28e6c844-7b1b-41c6-9811-be3b2957727c';

function reachMetrikaGoal(goal: string) {
  const w = window as unknown as { ym?: (id: number, action: string, goal: string) => void };
  if (w.ym) w.ym(100343781, 'reachGoal', goal);
}

export default function Index() {
  const utm = useUtm();

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const [openForm, setOpenForm] = useState({ name: '', phone: '', email: '', role: '' });
  const [openSent, setOpenSent] = useState(false);
  const [openSending, setOpenSending] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('modal') === 'participate') {
      setModalOpen(true);
      setSent(false);
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  async function handleModalSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'popup', ...utm }),
      });
      reachMetrikaGoal('form_submit');
    } finally {
      setSending(false);
      setSent(true);
    }
  }

  async function handleOpenFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOpenSending(true);
    try {
      await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...openForm, source: 'form', ...utm }),
      });
      reachMetrikaGoal('form_submit');
    } finally {
      setOpenSending(false);
      setOpenSent(true);
    }
  }

  function openModal() {
    reachMetrikaGoal('open_modal');
    setModalOpen(true);
    setSent(false);
  }

  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header onOpenModal={openModal} />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-20">
          <p className="font-opensans text-sm md:text-base mb-6" style={{ color: 'var(--eco-green-dark)' }}>
            <strong>7 - 9 сентября 2026 года</strong>, Москва, МВЦ «Крокус Экспо» Павильон 1, Зал 1
          </p>

          <h1
            className="font-montserrat font-800 leading-tight mb-5"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'var(--eco-green-dark)' }}
          >
            GreenExpo'2026 –<br />Жизнь в стиле ECO
          </h1>

          <p className="font-montserrat font-700 text-base md:text-lg mb-3" style={{ color: 'var(--eco-green-dark)' }}>
            международная Выставка-Форум
          </p>

          <ul className="text-center space-y-2 mb-8">
            <li className="font-opensans text-sm md:text-base leading-relaxed" style={{ color: 'var(--eco-green-dark)' }}>
              • для производителей, дистрибьюторов и потребителей ECO продукции, технологий
            </li>
            <li className="font-opensans text-sm md:text-base leading-relaxed" style={{ color: 'var(--eco-green-dark)' }}>
              • для ландшафтных архитекторов, исполнителей работ, поставщиков оборудования и материалов для ландшафтного дизайна в фокусе ландшафтной экологии
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={openModal}
              className="font-montserrat font-700 text-sm tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
            >
              ЗАБРОНИРОВАТЬ СТЕНД
            </button>
            <a
              href="https://www.flowers-expo.ru/flowers-expo/get_ticket.html?utm_medium=lnk&utm_source=greenexpo_pro&utm_campaign=regbutton"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat font-700 text-sm tracking-widest px-8 py-4 rounded-full border-2 transition-all duration-200 hover:opacity-80"
              style={{ borderColor: '#b0b8a8', color: 'var(--eco-green-dark)', backgroundColor: 'rgba(255,255,255,0.3)' }}
            >
              КУПИТЬ БИЛЕТ
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center px-6 py-3 rounded-2xl min-w-[120px]"
                style={{
                  backgroundColor: s.green ? 'var(--eco-green)' : 'white',
                  color: s.green ? 'white' : 'var(--eco-green-dark)',
                }}
              >
                <div className="font-montserrat font-800 text-2xl">{s.value}</div>
                <div className="font-opensans text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно — Запрос на участие */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
            style={{ backgroundColor: 'white' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
            >
              <Icon name="X" size={20} />
            </button>
            <h2 className="font-montserrat font-800 text-xl mb-6 text-center" style={{ color: 'var(--eco-green-dark)' }}>
              Запрос на участие в выставке
            </h2>
            {sent ? (
              <p className="text-center font-opensans py-6" style={{ color: 'var(--eco-green-dark)' }}>
                Спасибо! Ваш запрос отправлен, мы свяжемся с вами в ближайшее время.
              </p>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                  style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }}
                />
                <input
                  required
                  type="tel"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                  style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }}
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                  style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }}
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full font-montserrat font-700 text-sm tracking-widest py-4 rounded-full transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white', opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ'}
                </button>
                <p className="text-center font-opensans text-xs leading-relaxed" style={{ color: '#888' }}>
                  Нажимая на кнопку «Отправить» я принимаю{' '}
                  <Link to="/terms" className="underline" style={{ color: 'var(--eco-green)' }} onClick={() => setModalOpen(false)}>
                    Пользовательское соглашение
                  </Link>{' '}
                  и даю согласие на обработку, хранение и передачу указанных мной персональных данных согласно{' '}
                  <Link to="/privacy" className="underline" style={{ color: 'var(--eco-green)' }} onClick={() => setModalOpen(false)}>
                    Политике конфиденциальности
                  </Link>
                  *
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* О выставке */}
      <section id="about" className="py-16" style={{ backgroundColor: '#f5f5f0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-center mb-10" style={{ color: 'var(--eco-green-dark)' }}>
            О выставке
          </h2>

          {/* Три верхние карточки-тезиса */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/6b1b6098-e9bf-407d-85d2-19cf2fbc0f07.png" alt="" className="w-10 h-10 flex-shrink-0 mt-1" />
              <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                <strong>GreenExpo</strong> – ведущая площадка для производителей, дистрибьюторов, потребителей ECO продукции, технологий и индустрии ландшафта
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/8e0cdfee-34c3-4a9a-a795-b59ae01bda18.png" alt="" className="w-10 h-10 flex-shrink-0 mt-1" />
              <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                Выставка <strong>объединяет</strong> бизнес, конечных потребителей и специалистов отрасли
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/11002a77-bee3-4e4a-96f0-00cbcc3cee7f.png" alt="" className="w-10 h-10 flex-shrink-0 mt-1" />
              <div>
                <p className="font-montserrat font-700 text-sm mb-1" style={{ color: 'var(--eco-green-dark)' }}>Миссия выставки</p>
                <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                  Поддержка экологических бизнесов и популяризация жизни в стиле ECO
                </p>
              </div>
            </div>
          </div>

          {/* Плиточки разделов выставки */}
          {/* Ряд 1: большая слева + средняя справа */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* ОРГАНИЧЕСКОЕ ЗЕМЛЕДЕЛИЕ — большая зелёная с фото женщины */}
            <div className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-end p-6" style={{ backgroundColor: 'var(--eco-green)' }}>
              <img
                src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/dcf021d6-29c5-422c-9484-c240760fac32.png"
                alt=""
                className="absolute bottom-0 right-4 h-full max-h-[210px] object-contain object-bottom pointer-events-none"
              />
              <div className="relative z-10 max-w-[60%]">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-base text-white mb-2 uppercase tracking-wide">Органическое земледение</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Технологии, товары, услуги и оборудование для органического земледелия, садоводов, садовых центров и ритейла
                </p>
              </div>
            </div>

            {/* СИТИ-ФЕРМЕРСТВО */}
            <div className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-end p-6" style={{ backgroundColor: '#2d5a2d' }}>
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/1e655bb7-61de-4a4c-937a-d3a631169f58.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-base text-white mb-2 uppercase tracking-wide">Сити-фермерство</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Товары, услуги и оборудование для выращивания зелени, овощей и фруктов в городских условиях
                </p>
              </div>
            </div>
          </div>

          {/* Ряд 2: три равные плитки */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-5" style={{ backgroundColor: '#3a6b3a' }}>
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/2235e4a0-6c33-4bf2-82c2-fbc78383aafe.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-sm text-white mb-1 uppercase tracking-wide">Ландшафтная экология</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Товары, услуги и оборудование для ландшафтной индустрии и служб городского озеленения
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-5" style={{ backgroundColor: 'var(--eco-green)' }}>
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/08771415-4a1e-48da-8a8d-0369fe1d2bf8.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-sm text-white mb-1 uppercase tracking-wide">Рециклинг</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Ответственное производство, потребление, повторное использование и восстановление товаров, упаковки и материалов
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-5" style={{ backgroundColor: '#1e4a1e' }}>
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/7bf51926-a502-44cb-a164-8a62afd6bea5.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-sm text-white mb-1 uppercase tracking-wide">Чистый дом и сад</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Экологичные товары, услуги для ухода за домом/садом, инновационные экотехнологии в строительстве домов и коттеджей
                </p>
              </div>
            </div>
          </div>

          {/* Ряд 3: широкая плитка — Эко-продукты */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-center p-8" style={{ backgroundColor: '#2d5a2d' }}>
              <div className="relative z-10 max-w-[60%]">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-lg text-white mb-2 uppercase tracking-wide">Эко-продукты для человека и питомцев</h3>
                <p className="font-opensans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Технологии, товары, услуги и оборудование для производства экологически чистых продуктов питания человека и домашних питомцев
                </p>
              </div>
              <img
                src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/c1d43e3b-d3f3-4596-8e48-985451b19036.png"
                alt=""
                className="absolute right-0 bottom-0 h-[115%] w-auto object-contain object-bottom pointer-events-none"
              />
            </div>
          </div>

          {/* Ряд 4: две плитки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-6" style={{ backgroundColor: '#1e4a1e' }}>
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/30d45dec-6313-4f4a-a94d-8ed33168e4b4.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-base text-white mb-1 uppercase tracking-wide">ECO Lifestyle</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Агро-Экотуризм, экологичные косметика, одежда, аксессуары, техника, услуги
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-6" style={{ backgroundColor: '#3a6b3a' }}>
              <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/4929e8cb-e16f-4b7d-afaf-b839ab72f158.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-base text-white mb-1 uppercase tracking-wide">ECO Образование и просвещение</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Обучающие программы, направленные на формирование экосознания и уважительного отношения к природе
                </p>
              </div>
            </div>
          </div>

          {/* Кнопка */}
          <div className="text-center">
            <a
              href="https://www.flowers-expo.ru/online/exhibitors.html?o=name&beh_participation_expo[]=Green%20Expo%202026&utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=button_2_block"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-montserrat font-700 text-sm tracking-widest px-12 py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
            >
              СПИСОК УЧАСТНИКОВ
            </a>
          </div>
        </div>
      </section>

      {/* Зелёный баннер */}
      <section className="py-10" style={{ backgroundColor: 'var(--eco-green)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-white mb-3">
            ЭКО — это не тренд, это образ жизни
          </h2>
          <p className="font-opensans text-base md:text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>
            Присоединяйтесь к сообществу людей, которые выбирают здоровье, экологию и ответственное потребление
          </p>
        </div>
      </section>

      {/* Почему стоит участвовать */}
      <section id="exhibitors" className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-center mb-12" style={{ color: 'var(--eco-text)' }}>
            Почему стоит участвовать?
          </h2>

          {/* Ряд 1: 4 колонки с вертикальными разделителями */}
          <div className="grid grid-cols-2 md:grid-cols-4 mb-0" style={{ borderTop: '1px solid #e0e8d8', borderLeft: '1px solid #e0e8d8' }}>
            {whyParticipate.slice(0, 4).map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 gap-3"
                style={{ borderRight: '1px solid #e0e8d8', borderBottom: '1px solid #e0e8d8' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: 'rgba(45,106,45,0.08)' }}>
                  <Icon name={item.icon} size={26} style={{ color: 'var(--eco-green)' }} />
                </div>
                <div>
                  <p className="font-montserrat font-700 text-sm leading-snug mb-1" style={{ color: 'var(--eco-text)' }}>{item.title}</p>
                  {item.desc && <p className="font-opensans text-xs leading-relaxed" style={{ color: '#5a7a5a' }}>{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Ряд 2: 4 колонки */}
          <div className="grid grid-cols-2 md:grid-cols-4 mb-10" style={{ borderLeft: '1px solid #e0e8d8' }}>
            {whyParticipate.slice(4).map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 gap-3"
                style={{ borderRight: '1px solid #e0e8d8', borderBottom: '1px solid #e0e8d8' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: 'rgba(45,106,45,0.08)' }}>
                  <Icon name={item.icon} size={26} style={{ color: 'var(--eco-green)' }} />
                </div>
                <div>
                  <p className="font-montserrat font-700 text-sm leading-snug mb-1" style={{ color: 'var(--eco-text)' }}>{item.title}</p>
                  {item.desc && <p className="font-opensans text-xs leading-relaxed" style={{ color: '#5a7a5a' }}>{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => { setModalOpen(true); setSent(false); }}
              className="inline-block font-montserrat font-700 text-sm tracking-widest px-12 py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
            >
              ЗАБРОНИРОВАТЬ СТЕНД
            </button>
          </div>
        </div>
      </section>

      {/* Субсидии */}
      <section className="py-16" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-center mb-10" style={{ color: 'var(--eco-green-dark)' }}>
            Субсидии на участие
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-10 flex items-center justify-center text-center shadow-sm">
              <p className="font-opensans text-base leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                Компании могут <span className="font-montserrat font-700" style={{ color: '#c97d2a' }}>получить компенсацию</span> на аренду и застройку стенда
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 flex items-center justify-center text-center shadow-sm">
              <p className="font-opensans text-base leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                <span className="font-montserrat font-700" style={{ color: 'var(--eco-green-dark)' }}>Список расходов,</span> которые можно компенсировать
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/sub"
              className="inline-block font-montserrat font-700 text-sm tracking-widest px-12 py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
            >
              ПОДРОБНЕЕ О СУБСИДИЯХ
            </Link>
          </div>
        </div>
      </section>

      {/* Почему стоит прийти */}
      <section id="visitors" className="py-20" style={{ backgroundColor: '#f5f5f0' }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-center mb-10" style={{ color: 'var(--eco-text)' }}>
            Почему стоит прийти?
          </h2>

          {/* Ряд 1: 4 карточки */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {whyCome.slice(0, 4).map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 flex flex-col items-center text-center"
                style={{ backgroundColor: item.green ? 'rgba(45,106,45,0.08)' : 'white' }}
              >
                {item.isLogos ? (
                  <div className="flex flex-col gap-2 items-center justify-center mb-4">
                    <img src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/50bd4f74-638e-401b-a97a-9648d41cc09d.png" alt="GreenExpo" className="h-8 object-contain" />
                    <img src="https://cdn.poehali.dev/files/c8d69aa7-7bdc-4eb6-9355-88587867cf38.png" alt="FlowersExpo" className="h-8 object-contain" />
                  </div>
                ) : item.img ? (
                  <div className="w-14 h-14 flex items-center justify-center mb-4">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-14 h-14 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={36} style={{ color: 'var(--eco-green)' }} />
                  </div>
                )}
                <p className="font-montserrat font-700 text-sm leading-snug" style={{ color: 'var(--eco-text)' }}>
                  {item.title}
                </p>
                {item.desc && (
                  <p className="font-opensans text-xs mt-1 leading-relaxed" style={{ color: item.highlight ? '#5a7a5a' : '#5a7a5a' }}>
                    {item.desc.replace(item.highlight || '', '')}
                    {item.highlight && (
                      item.highlightUrl
                        ? <a href={item.highlightUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#e07b39', textDecoration: 'underline' }}>{item.highlight}</a>
                        : <span style={{ color: '#e07b39' }}>{item.highlight}</span>
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Ряд 2: 3 карточки */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {whyCome.slice(4).map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 flex flex-col items-center text-center"
                style={{ backgroundColor: item.green ? 'rgba(45,106,45,0.08)' : 'white' }}
              >
                <div className="w-14 h-14 flex items-center justify-center mb-4">
                  {item.img ? (
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                  ) : (
                    <Icon name={item.icon} size={36} style={{ color: 'var(--eco-green)' }} />
                  )}
                </div>
                <p className="font-montserrat font-700 text-sm leading-snug" style={{ color: 'var(--eco-text)' }}>
                  {item.title}
                </p>
                {item.desc && (
                  <p className="font-opensans text-xs mt-1 leading-relaxed" style={{ color: 'var(--eco-green)' }}>
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Кнопки */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.flowers-expo.ru/online/visitor-registration.html?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=button_buy_ticket"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat font-700 text-sm tracking-widest px-10 py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
            >
              КУПИТЬ БИЛЕТ
            </a>
            <Link
              to="/hotel"
              className="font-montserrat font-700 text-sm tracking-widest px-10 py-4 rounded-full border-2 transition-all hover:opacity-80"
              style={{ borderColor: 'var(--eco-green-dark)', color: 'var(--eco-green-dark)', backgroundColor: 'transparent' }}
            >
              КАК ДОБРАТЬСЯ / ГОСТИНИЦЫ
            </Link>
          </div>
        </div>
      </section>

      {/* Материалы для СМИ */}
      <section id="press" className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Материалы для СМИ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {pressItems.map((item) => (
              <div key={item.label} className="relative overflow-hidden rounded-2xl cursor-pointer h-48">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/press" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
              В РАЗДЕЛ ПРЕССЕ
            </Link>
          </div>
        </div>
      </section>

      {/* Фотогалерея */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Фотогалерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/f5916126-7a61-45e1-b923-579c094b71da.jpg',
              'https://cdn.poehali.dev/files/dcbb0a2d-3a87-475d-a8e9-6f71050cf6a5.jpg',
              'https://cdn.poehali.dev/files/b0316b19-d712-4eb9-b921-836469c2fd34.jpg',
              'https://cdn.poehali.dev/files/6b17fa07-87af-4de2-9e7b-b71f95978e25.jpg',
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img src={img} alt={`Фото ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full border-2 transition-all hover:scale-105" style={{ borderColor: 'var(--eco-green)', color: 'var(--eco-green)' }}>
              СМОТРЕТЬ ВСЕ ФОТО
            </Link>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16 relative overflow-hidden" style={{ backgroundColor: '#f5f5f0' }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/84f2f88c-6aa6-4f01-9de8-e809acc3fe7f.png)' }}
        />
        <div className="relative max-w-5xl mx-auto px-4">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            {/* Левая карточка — реквизиты */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                <img
                  src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/50bd4f74-638e-401b-a97a-9648d41cc09d.png"
                  alt="GreenExpo"
                  className="h-14 object-contain"
                />
                <img
                  src="https://cdn.poehali.dev/files/c8d69aa7-7bdc-4eb6-9355-88587867cf38.png"
                  alt="Flowers Expo"
                  className="h-14 object-contain"
                />
              </div>
              <p className="font-montserrat font-bold text-sm uppercase tracking-wide mb-3" style={{ color: 'var(--eco-text)' }}>
                Реквизиты компании:
              </p>
              <ul className="space-y-1.5 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">•</span>
                  <span>ООО «Выставочная компания «ГринЭкспо»</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">•</span>
                  <span>Адрес офиса: Москва, Озерковский переулок, д. 12, офис 611</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">•</span>
                  <span>Телефон: <strong>+7 (495) 118-06-39</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">•</span>
                  <span>Email: <a href="mailto:mail@flowers-expo.ru" className="font-bold hover:underline" style={{ color: 'var(--eco-text)' }}>mail@flowers-expo.ru</a></span>
                </li>
              </ul>
            </div>

            {/* Правая карточка — контакты */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <p className="font-montserrat font-bold text-sm uppercase tracking-wide" style={{ color: 'var(--eco-text)' }}>
                  Контакты:
                </p>
                <img
                  src="https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/50bd4f74-638e-401b-a97a-9648d41cc09d.png"
                  alt="GreenExpo"
                  className="h-10 object-contain"
                />
              </div>
              <div className="space-y-6 font-opensans text-sm">
                <div>
                  <p style={{ color: 'var(--eco-text)' }}>Руководитель выставки-форума GreenExpo. Жизнь в стиле ЕСО</p>
                  <p className="font-bold mt-1" style={{ color: 'var(--eco-text)' }}>Анастасия Егорова</p>
                  <a href="mailto:mail@greenexpo.pro" className="hover:underline" style={{ color: '#c0392b' }}>mail@greenexpo.pro</a>
                </div>
                <div>
                  <p style={{ color: 'var(--eco-text)' }}>Руководитель отдела маркетинга</p>
                  <p className="font-bold mt-1" style={{ color: 'var(--eco-text)' }}>Константин Пожидаев</p>
                  <a href="mailto:marketing@greenexpo.pro" className="hover:underline" style={{ color: '#c0392b' }}>marketing@greenexpo.pro</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Форма регистрации */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title">Принять участие в выставке</h2>
          <div className="card-eco p-8">
            {openSent ? (
              <p className="text-center font-opensans py-8 text-lg" style={{ color: 'var(--eco-green-dark)' }}>
                Спасибо! Ваша заявка принята, мы свяжемся с вами в ближайшее время.
              </p>
            ) : (
              <form className="space-y-4" onSubmit={handleOpenFormSubmit}>
                <input required type="text" placeholder="Имя" value={openForm.name} onChange={e => setOpenForm({ ...openForm, name: e.target.value })} className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
                <input required type="tel" placeholder="Телефон" value={openForm.phone} onChange={e => setOpenForm({ ...openForm, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
                <input type="email" placeholder="Email" value={openForm.email} onChange={e => setOpenForm({ ...openForm, email: e.target.value })} className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
                <select value={openForm.role} onChange={e => setOpenForm({ ...openForm, role: e.target.value })} className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)', color: 'var(--eco-text)' }}>
                  <option value="">Я участвую как...</option>
                  <option value="Экспонент">Экспонент (участник выставки)</option>
                  <option value="Посетитель">Посетитель</option>
                  <option value="Пресса">Представитель прессы</option>
                  <option value="Спикер">Спикер / докладчик</option>
                </select>
                <div className="flex items-start gap-2">
                  <input required type="checkbox" id="agree" className="mt-1" />
                  <label htmlFor="agree" className="font-opensans text-xs" style={{ color: '#5a7a5a' }}>
                    Даю согласие на обработку персональных данных в соответствии с{' '}
                    <Link to="/privacy" style={{ color: 'var(--eco-green)' }} className="hover:underline">политикой конфиденциальности</Link>
                  </label>
                </div>
                <button type="submit" disabled={openSending} className="w-full font-montserrat text-base py-4 rounded-full transition-all hover:scale-[1.02]" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)', fontWeight: 700, opacity: openSending ? 0.7 : 1 }}>
                  {openSending ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Партнёры */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Партнёры</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {partners.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl px-6 py-5 shadow-sm flex items-center justify-center hover:opacity-80 transition-opacity" style={{ minWidth: 160, minHeight: 80 }}>
                <img src={p.logo} alt={p.name} className="max-h-16 max-w-[160px] object-contain" />
              </a>
            ))}
          </div>
          <h2 className="section-title">Информационные партнёры</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {infoPartners.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl px-6 py-5 shadow-sm flex items-center justify-center hover:opacity-80 transition-opacity" style={{ minWidth: 140, minHeight: 80 }}>
                <img src={p.logo} alt={p.name} className="max-h-16 max-w-[160px] object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}