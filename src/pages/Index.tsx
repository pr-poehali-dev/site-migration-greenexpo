import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const heroImage = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/5394c160-2a6a-4345-a2d3-d23038df86b2.jpg';
const expoImage = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/4db694dd-cc8c-49d7-979b-20eb8b01522b.jpg';

const heroBg = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/d60355ee-7f16-4f7a-9e5e-b0ac8b130940.png';

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
  { icon: 'TrendingUp', title: 'Расширение рынка сбыта', desc: 'Прямой выход на новых клиентов и партнёров из 40+ регионов России' },
  { icon: 'Handshake', title: 'Офлайн-контакты', desc: 'Живое общение с байерами торговых сетей: ВкусВилл, Wildberries, Самокат' },
  { icon: 'BarChart3', title: 'Аналитика рынка', desc: 'Доклады экспертов о трендах органического рынка 2025–2026' },
  { icon: 'Award', title: 'Имидж и PR', desc: 'Публикации в профессиональных СМИ, телесъёмки, пресс-конференции' },
  { icon: 'Star', title: 'Конкурс GreenAward', desc: 'Участие в конкурсе лучших эко-продуктов и брендов года' },
  { icon: 'Globe', title: 'Международные связи', desc: 'Участники из Беларуси, Казахстана, Армении и стран ЕС' },
];

const subsidyInfo = [
  { title: 'Бизнес-инкубатор и технопарки', desc: 'Резиденты государственных бизнес-инкубаторов могут получить субсидию до 50% стоимости участия' },
  { title: 'Сельхозпроизводители', desc: 'Действуют специальные условия для фермерских хозяйств и малых предприятий АПК. Узнайте подробности у менеджера' },
];

const whyCome = [
  { icon: 'Eye', title: 'Увидеть новинки рынка', desc: 'Сотни эко-брендов в одном месте' },
  { icon: 'ChefHat', title: 'Мастер-классы', desc: 'Кулинарные шоу и дегустации от шеф-поваров' },
  { icon: 'BookOpen', title: 'Обучение', desc: 'Лекции по здоровому образу жизни и питанию' },
  { icon: 'ShoppingCart', title: 'Покупки напрямую', desc: 'Приобретение продуктов по ценам производителей' },
];

const pressItems = [
  { icon: 'Newspaper', label: 'Публикации в СМИ' },
  { icon: 'Camera', label: 'Пресс-конференция' },
  { icon: 'Video', label: 'Телесъёмки' },
];

const partners = [
  { name: 'Фонд Органика', icon: '🌿' },
  { name: 'Wildberries', icon: '🟣' },
  { name: 'Russ', icon: '📡' },
  { name: 'Liga-Sam', icon: '🌾' },
  { name: 'Объединённые кондитеры', icon: '🍫' },
  { name: 'MAJOR AGRO', icon: '🌱' },
];

const infoPartners = [
  { name: 'NIBOMA', icon: '📰' },
  { name: 'ECO portal', icon: '🌍' },
  { name: 'Агро', icon: '🌾' },
  { name: 'Союзорганик', icon: '☘️' },
];

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

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
              onClick={() => { setModalOpen(true); setSent(false); }}
              className="font-montserrat font-700 text-sm tracking-widest px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
            >
              ЗАБРОНИРОВАТЬ СТЕНД
            </button>
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://www.flowers-expo.ru/flowers-expo/get_ticket.html?utm_medium=lnk&utm_source=greenexpo_pro&utm_campaign=regbutton"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat font-700 text-sm tracking-widest px-8 py-4 rounded-full border-2 transition-all duration-200 hover:opacity-80"
                style={{ borderColor: '#b0b8a8', color: 'var(--eco-green-dark)', backgroundColor: 'rgba(255,255,255,0.3)' }}
              >
                КУПИТЬ БИЛЕТ
              </a>
              <a
                href="https://www.flowers-expo.ru/flowers-expo/get_ticket.html?utm_medium=lnk&utm_source=greenexpo_pro&utm_campaign=regbutton"
                target="_blank"
                rel="noopener noreferrer"
                className="font-opensans text-xs underline"
                style={{ color: 'var(--eco-green-dark)', opacity: 0.7 }}
              >
                Зарегистрироваться как посетитель
              </a>
            </div>
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
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full font-montserrat font-700 text-sm tracking-widest py-4 rounded-full transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
                >
                  ОТПРАВИТЬ
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
      <section className="py-16" style={{ backgroundColor: '#f5f5f0' }}>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-sm text-white mb-1 uppercase tracking-wide">Ландшафтная экология</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Товары, услуги и оборудование для ландшафтной индустрии и служб городского озеленения
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-5" style={{ backgroundColor: 'var(--eco-green)' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-sm text-white mb-1 uppercase tracking-wide">Рециклинг</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Ответственное производство, потребление, повторное использование и восстановление товаров, упаковки и материалов
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-5" style={{ backgroundColor: '#1e4a1e' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-sm text-white mb-1 uppercase tracking-wide">Чистый дом и сад</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Экологичные товары, услуги для ухода за домом/садом, инновационные экотехнологии в строительстве домов и коттеджей
                </p>
              </div>
            </div>
          </div>

          {/* Ряд 3: широкая плитка */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="relative rounded-2xl overflow-hidden min-h-[160px] flex items-center p-8" style={{ backgroundColor: 'var(--eco-green)' }}>
              <div className="relative z-10 max-w-[65%]">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-lg text-white mb-2 uppercase tracking-wide">Эко-продукты для человека и питомцев</h3>
                <p className="font-opensans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Технологии, товары, услуги и оборудование для производства экологически чистых продуктов питания человека и домашних питомцев
                </p>
              </div>
            </div>
          </div>

          {/* Ряд 4: две плитки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-2xl overflow-hidden min-h-[160px] flex items-end p-6" style={{ backgroundColor: '#2d5a2d' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="relative z-10">
                <span className="font-opensans text-xs mb-2 block" style={{ color: 'rgba(255,255,255,0.7)' }}>Раздел выставки</span>
                <h3 className="font-montserrat font-800 text-base text-white mb-1 uppercase tracking-wide">ECO Lifestyle</h3>
                <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Агро-Экотуризм, экологичные косметика, одежда, аксессуары, техника, услуги
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[160px] flex items-end p-6" style={{ backgroundColor: '#3a6b3a' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
            <Link
              to="/exhibitors"
              className="inline-block font-montserrat font-700 text-sm tracking-widest px-12 py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
            >
              СПИСОК УЧАСТНИКОВ
            </Link>
          </div>
        </div>
      </section>

      {/* Зелёный баннер */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-green)' }}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-white mb-4">
            ЭКО — это не тренд, это образ жизни
          </h2>
          <p className="font-opensans text-base md:text-lg mb-8" style={{ color: 'rgba(245,240,232,0.85)' }}>
            Присоединяйтесь к сообществу людей, которые выбирают здоровье, экологию и ответственное потребление
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[{ label: 'Производителей органики', val: '80+' }, { label: 'Деловых мероприятий', val: '30+' }, { label: 'Регионов-участников', val: '40+' }, { label: 'Часов нетворкинга', val: '72' }].map((item) => (
              <div key={item.label} className="text-center px-6">
                <div className="font-montserrat font-800 text-3xl text-white">{item.val}</div>
                <div className="font-opensans text-sm" style={{ color: 'rgba(245,240,232,0.75)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему стоит участвовать */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Почему стоит участвовать?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {whyParticipate.map((item) => (
              <div key={item.title} className="card-eco p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(45,106,45,0.1)' }}>
                  <Icon name={item.icon} size={22} style={{ color: 'var(--eco-green)' }} />
                </div>
                <div>
                  <h3 className="font-montserrat font-700 text-sm mb-1" style={{ color: 'var(--eco-text)' }}>{item.title}</h3>
                  <p className="font-opensans text-xs leading-relaxed" style={{ color: '#5a7a5a' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/exhibitors" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
              УЧАСТВОВАТЬ В ВЫСТАВКЕ
            </Link>
          </div>
        </div>
      </section>

      {/* Субсидии */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Субсидии на участие</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {subsidyInfo.map((item) => (
              <div key={item.title} className="card-eco p-8">
                <h3 className="font-montserrat font-700 text-lg mb-3" style={{ color: 'var(--eco-green)' }}>{item.title}</h3>
                <p className="font-opensans text-base leading-relaxed" style={{ color: 'var(--eco-text)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/exhibitors" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
              УЗНАТЬ О СУБСИДИЯХ
            </Link>
          </div>
        </div>
      </section>

      {/* Почему стоит прийти */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Почему стоит прийти?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {whyCome.map((item) => (
              <div key={item.title} className="text-center p-6 card-eco">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(45,106,45,0.1)' }}>
                  <Icon name={item.icon} size={28} style={{ color: 'var(--eco-green)' }} />
                </div>
                <h3 className="font-montserrat font-700 text-base mb-2" style={{ color: 'var(--eco-text)' }}>{item.title}</h3>
                <p className="font-opensans text-sm" style={{ color: '#5a7a5a' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/visitors" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
              ПРИЙТИ БЕСПЛАТНО
            </Link>
          </div>
        </div>
      </section>

      {/* Материалы для СМИ */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Материалы для СМИ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {pressItems.map((item) => (
              <div key={item.label} className="p-8 text-center rounded-2xl cursor-pointer" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark), var(--eco-green))' }}>
                <Icon name={item.icon} size={40} className="mx-auto mb-4" style={{ color: 'rgba(245,240,232,0.8)' }} />
                <div className="font-montserrat font-700 text-white text-base">{item.label}</div>
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
            {[heroImage, expoImage, heroImage, expoImage].map((img, i) => (
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
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-eco p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--eco-green)' }}>
                  <span className="text-white font-montserrat text-xs" style={{ fontWeight: 800 }}>GE</span>
                </div>
                <div>
                  <div className="font-montserrat font-700 text-base" style={{ color: 'var(--eco-green)' }}>GreenExpo</div>
                  <div className="font-opensans text-xs" style={{ color: '#5a7a5a' }}>Выставочная компания</div>
                </div>
              </div>
              <div className="space-y-3 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} style={{ color: 'var(--eco-green)', marginTop: 2 }} />
                  <span>125315, Москва, ул. Планерная, д. 7, корп. 1, стр. 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} style={{ color: 'var(--eco-green)' }} />
                  <a href="tel:+74959889904" className="hover:underline">+7 (495) 988-99-04</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} style={{ color: 'var(--eco-green)' }} />
                  <a href="tel:+74955090143" className="hover:underline">+7 (495) 509-01-43</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} style={{ color: 'var(--eco-green)' }} />
                  <a href="mailto:info@greenexpo.pro" className="hover:underline">info@greenexpo.pro</a>
                </div>
              </div>
            </div>
            <div className="card-eco p-8">
              <h3 className="font-montserrat font-700 text-lg mb-4" style={{ color: 'var(--eco-green)' }}>Место проведения</h3>
              <div className="space-y-3 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                <div className="flex items-start gap-2">
                  <Icon name="Building2" size={16} style={{ color: 'var(--eco-green)', marginTop: 2 }} />
                  <span>МВЦ «Крокус Экспо», павильон 1, зал 1</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} style={{ color: 'var(--eco-green)', marginTop: 2 }} />
                  <span>Московская обл., Красногорский р-н, 65–66 км МКАД</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Train" size={16} style={{ color: 'var(--eco-green)', marginTop: 2 }} />
                  <span>м. Мякинино (Арбатско-Покровская линия)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Calendar" size={16} style={{ color: 'var(--eco-green)', marginTop: 2 }} />
                  <span>8–10 сентября 2025, 10:00–18:00</span>
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
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Имя" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="text" placeholder="Телефон или Email" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <select className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)', color: 'var(--eco-text)' }}>
                <option value="">Я участвую как...</option>
                <option value="exhibitor">Экспонент (участник выставки)</option>
                <option value="visitor">Посетитель</option>
                <option value="press">Представитель прессы</option>
                <option value="speaker">Спикер / докладчик</option>
              </select>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="agree" className="mt-1" />
                <label htmlFor="agree" className="font-opensans text-xs" style={{ color: '#5a7a5a' }}>
                  Даю согласие на обработку персональных данных в соответствии с{' '}
                  <Link to="/privacy" style={{ color: 'var(--eco-green)' }} className="hover:underline">политикой конфиденциальности</Link>
                </label>
              </div>
              <button type="submit" className="w-full font-montserrat text-base py-4 rounded-full transition-all hover:scale-[1.02]" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)', fontWeight: 700 }}>
                ОТПРАВИТЬ ЗАЯВКУ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Партнёры */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Партнёры</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {partners.map((p) => (
              <div key={p.name} className="card-eco px-8 py-4 flex items-center gap-3">
                <span className="text-2xl">{p.icon}</span>
                <span className="font-montserrat text-sm" style={{ fontWeight: 600, color: 'var(--eco-text)' }}>{p.name}</span>
              </div>
            ))}
          </div>
          <h2 className="section-title">Информационные партнёры</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {infoPartners.map((p) => (
              <div key={p.name} className="card-eco px-8 py-4 flex items-center gap-3">
                <span className="text-2xl">{p.icon}</span>
                <span className="font-montserrat text-sm" style={{ fontWeight: 600, color: 'var(--eco-text)' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}