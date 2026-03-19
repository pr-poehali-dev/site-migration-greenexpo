import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const benefits = [
  { icon: 'Target', title: 'Целевая аудитория', desc: 'Прямой контакт с профессионалами рынка: ретейлеры, дистрибьюторы, импортёры, HoReCa' },
  { icon: 'TrendingUp', title: 'Новые продажи', desc: 'Заключение договоров и соглашений о намерениях прямо на выставке' },
  { icon: 'Globe', title: 'Международный охват', desc: 'Участники из России, Беларуси, Казахстана, Армении и стран Европы' },
  { icon: 'Megaphone', title: 'PR и медиа', desc: 'Публикации в 30+ профильных СМИ, телесъёмки ведущих каналов' },
  { icon: 'Award', title: 'Конкурс GreenAward', desc: 'Возможность получить престижную премию лучшего эко-продукта года' },
  { icon: 'Handshake', title: 'Деловые встречи', desc: 'Участие в b2b-встречах, переговорах и панельных дискуссиях' },
];

const packages = [
  {
    name: 'СТАРТ',
    area: '9 м²',
    price: 'от 90 000 ₽',
    features: ['Стандартный стенд 3×3 м', 'Базовая отделка', '2 бейджа участника', 'Размещение в каталоге', 'Wi-Fi'],
    recommended: false,
  },
  {
    name: 'БИЗНЕС',
    area: '18 м²',
    price: 'от 170 000 ₽',
    features: ['Стенд 3×6 м с дизайном', 'Индивидуальная отделка', '5 бейджей участника', 'Приоритетное размещение в каталоге', 'Упоминание на сайте', 'Wi-Fi', '1 доклад в программе'],
    recommended: true,
  },
  {
    name: 'ПРЕМИУМ',
    area: 'от 36 м²',
    price: 'от 320 000 ₽',
    features: ['Большой угловой стенд', 'Эксклюзивный дизайн', 'Неограниченное кол-во бейджей', 'Логотип на баннерах выставки', 'Рекламная поддержка', 'Wi-Fi', '2 доклада в программе', 'Отдельная переговорная'],
    recommended: false,
  },
];

export default function Exhibitors() {
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', comment: '', agree: false });

  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      {/* Hero */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Экспонентам</h1>
          <p className="font-opensans text-lg mb-8" style={{ color: 'rgba(245,240,232,0.85)' }}>
            Представьте свой продукт тысячам профессионалов рынка органической продукции
          </p>
          <a href="#register" className="inline-block font-montserrat font-700 px-10 py-4 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'white', color: 'var(--eco-green)' }}>
            ОСТАВИТЬ ЗАЯВКУ
          </a>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Почему стоит участвовать?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {benefits.map((b) => (
              <div key={b.title} className="card-eco p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(45,106,45,0.1)' }}>
                  <Icon name={b.icon} size={22} style={{ color: 'var(--eco-green)' }} />
                </div>
                <div>
                  <h3 className="font-montserrat font-700 text-sm mb-1" style={{ color: 'var(--eco-text)' }}>{b.title}</h3>
                  <p className="font-opensans text-xs leading-relaxed" style={{ color: '#5a7a5a' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Пакеты */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Пакеты участия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="card-eco p-8 relative"
                style={{ border: pkg.recommended ? '2px solid var(--eco-green)' : undefined }}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-montserrat font-700 text-xs px-4 py-1 rounded-full" style={{ backgroundColor: 'var(--eco-green)', color: 'white' }}>
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="font-montserrat font-800 text-xl mb-1" style={{ color: 'var(--eco-green)' }}>{pkg.name}</div>
                <div className="font-opensans text-sm mb-2" style={{ color: '#5a7a5a' }}>Площадь: {pkg.area}</div>
                <div className="font-montserrat font-800 text-2xl mb-6" style={{ color: 'var(--eco-text)' }}>{pkg.price}</div>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                      <Icon name="Check" size={16} style={{ color: 'var(--eco-green)', marginTop: 2, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#register" className="block text-center font-montserrat font-700 py-3 rounded-full transition-all hover:scale-105" style={{ backgroundColor: pkg.recommended ? 'var(--eco-green)' : 'transparent', color: pkg.recommended ? 'var(--eco-beige)' : 'var(--eco-green)', border: pkg.recommended ? 'none' : '2px solid var(--eco-green)' }}>
                  ВЫБРАТЬ
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Субсидии */}
      <section id="subsidies" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Субсидии на участие</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card-eco p-8">
              <Icon name="Building" size={32} className="mb-4" style={{ color: 'var(--eco-green)' }} />
              <h3 className="font-montserrat font-700 text-lg mb-3" style={{ color: 'var(--eco-green)' }}>Бизнес-инкубатор и технопарки</h3>
              <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                Резиденты государственных бизнес-инкубаторов, технопарков и индустриальных парков могут получить субсидию до 50% стоимости участия. Для уточнения деталей свяжитесь с нашим менеджером.
              </p>
            </div>
            <div className="card-eco p-8">
              <Icon name="Tractor" size={32} className="mb-4" style={{ color: 'var(--eco-green)' }} />
              <h3 className="font-montserrat font-700 text-lg mb-3" style={{ color: 'var(--eco-green)' }}>Сельхозпроизводители</h3>
              <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                Для фермерских хозяйств, малых предприятий АПК и кооперативов действуют специальные условия участия. Программа государственной поддержки участия в выставках.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Форма регистрации */}
      <section id="register" className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title">Заявка на участие</h2>
          <div className="card-eco p-8">
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Имя и фамилия *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="text" placeholder="Компания *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="tel" placeholder="Телефон *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <select className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)', color: 'var(--eco-text)' }}>
                <option value="">Пакет участия</option>
                <option value="start">СТАРТ (9 м²) — от 90 000 ₽</option>
                <option value="business">БИЗНЕС (18 м²) — от 170 000 ₽</option>
                <option value="premium">ПРЕМИУМ (36+ м²) — от 320 000 ₽</option>
                <option value="individual">Индивидуальный запрос</option>
              </select>
              <textarea placeholder="Комментарий (продукция, вопросы)" rows={3} className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none resize-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <div className="flex items-start gap-2">
                <input type="checkbox" id="agree-ex" className="mt-1" />
                <label htmlFor="agree-ex" className="font-opensans text-xs" style={{ color: '#5a7a5a' }}>
                  Согласен с <Link to="/privacy" style={{ color: 'var(--eco-green)' }} className="hover:underline">политикой конфиденциальности</Link> и <Link to="/terms" style={{ color: 'var(--eco-green)' }} className="hover:underline">пользовательским соглашением</Link>
                </label>
              </div>
              <button type="submit" className="w-full font-montserrat font-700 text-base py-4 rounded-full transition-all hover:scale-[1.02]" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
                ОТПРАВИТЬ ЗАЯВКУ
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
