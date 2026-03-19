import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const heroImage = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/5394c160-2a6a-4345-a2d3-d23038df86b2.jpg';
const expoImage = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/4db694dd-cc8c-49d7-979b-20eb8b01522b.jpg';

const stats = [
  { value: '1000+', label: 'участников' },
  { value: '80+', label: 'экспонентов' },
  { value: '20+', label: 'спикеров' },
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
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 60%, #3a7a3a 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="280" cy="120" rx="200" ry="100" fill="white" transform="rotate(-30 280 120)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-72 h-72 opacity-10 pointer-events-none">
          <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80" cy="220" rx="160" ry="80" fill="white" transform="rotate(20 80 220)" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          <div
            className="inline-block font-montserrat text-sm font-600 px-5 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--eco-sand)', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            8–10 сентября 2025 • Москва • МВЦ «Крокус Экспо», павильон 1, зал 1
          </div>
          <h1 className="font-montserrat font-800 text-5xl md:text-7xl text-white mb-4 leading-tight">
            GreenExpo'2026
          </h1>
          <h2 className="font-montserrat font-700 text-2xl md:text-4xl mb-4" style={{ color: 'var(--eco-beige)' }}>
            Жизнь в стиле <span style={{ color: '#a8d8a8' }}>ECO</span>
          </h2>
          <p className="font-opensans text-lg md:text-xl mb-4 leading-relaxed" style={{ color: 'rgba(245,240,232,0.85)' }}>
            II Международная Выставка-Форум
          </p>
          <p className="font-opensans text-base mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(245,240,232,0.75)' }}>
            для производителей, дистрибьюторов и потребителей ECO продукции
          </p>

          <ul className="text-left max-w-md mx-auto mb-10 space-y-2">
            {['Органические продукты питания и напитки', 'Натуральная косметика и товары для красоты', 'Эко-товары для дома и быта', 'Биоразлагаемая упаковка и технологии'].map((item) => (
              <li key={item} className="flex items-center gap-2 font-opensans text-sm" style={{ color: 'rgba(245,240,232,0.85)' }}>
                <span style={{ color: '#a8d8a8' }}>✓</span> {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/exhibitors"
              className="font-montserrat font-700 text-base px-10 py-4 rounded-full transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: 'white', color: 'var(--eco-green)' }}
            >
              СТАТЬ УЧАСТНИКОМ
            </Link>
            <Link
              to="/visitors"
              className="font-montserrat font-700 text-base px-10 py-4 rounded-full border-2 transition-all duration-200 hover:scale-105"
              style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white' }}
            >
              ПОСЕТИТЬ ВЫСТАВКУ
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-montserrat font-800 text-4xl text-white">{s.value}</div>
                <div className="font-opensans text-sm" style={{ color: 'var(--eco-sand)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О выставке */}
      <section className="py-20" style={{ backgroundColor: 'var(--eco-beige)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">О выставке</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="font-opensans text-base leading-relaxed mb-4" style={{ color: 'var(--eco-text)' }}>
                <strong>GreenExpo</strong> — крупнейшая в России специализированная выставка-форум в сфере органической, натуральной и экологически чистой продукции. Объединяет производителей, дистрибьюторов, ретейлеров и конечных потребителей на единой площадке.
              </p>
              <p className="font-opensans text-base leading-relaxed mb-6" style={{ color: 'var(--eco-text)' }}>
                В 2025 году ждём более 1000 участников из 40+ регионов России и стран СНГ. Три насыщенных дня деловых встреч, дегустаций, мастер-классов и конференций.
              </p>
              <Link to="/about" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
                ПОДРОБНЕЕ О ВЫСТАВКЕ
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImage} alt="GreenExpo выставка" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutFeatures.map((f) => (
              <div key={f.title} className="card-eco p-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(45,106,45,0.1)' }}>
                  <Icon name={f.icon} size={24} style={{ color: 'var(--eco-green)' }} />
                </div>
                <h3 className="font-montserrat font-700 text-base mb-2" style={{ color: 'var(--eco-text)' }}>{f.title}</h3>
                <p className="font-opensans text-sm leading-relaxed" style={{ color: '#5a7a5a' }}>{f.desc}</p>
              </div>
            ))}
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
