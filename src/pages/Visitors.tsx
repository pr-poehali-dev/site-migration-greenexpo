import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const whyCome = [
  { icon: 'Leaf', title: 'Органические продукты', desc: 'Попробуйте и купите сотни видов органических продуктов напрямую от производителей' },
  { icon: 'ChefHat', title: 'Кулинарные шоу', desc: 'Мастер-классы от известных шеф-поваров, специализирующихся на здоровом питании' },
  { icon: 'BookOpen', title: 'Лекции и семинары', desc: 'Образовательная программа по нутрициологии, экологии, устойчивому образу жизни' },
  { icon: 'ShoppingBag', title: 'Покупки', desc: 'Специальные цены производителей, exclusive-продукты, которые сложно найти в рознице' },
  { icon: 'Users', title: 'Нетворкинг', desc: 'Общение с единомышленниками, экспертами рынка органики и представителями брендов' },
  { icon: 'Ticket', title: 'Бесплатный вход', desc: 'Посещение выставки для частных лиц — бесплатно по предварительной регистрации' },
];

const schedule = [
  { day: '8 сентября', events: ['10:00 — Торжественное открытие GreenExpo', '11:00 — Панельная дискуссия: «Органика в России: итоги и перспективы»', '13:00 — Кулинарное шоу: здоровый обед от шеф-повара', '15:00 — Мастер-класс: натуральная косметика своими руками', '17:00 — Нетворкинг-сессия для посетителей'] },
  { day: '9 сентября', events: ['10:00 — Открытие второго дня', '11:00 — Конкурс GreenAward: лучший эко-продукт года', '13:00 — Дегустация органических вин и напитков', '15:00 — Лекция: «Как читать этикетку органического продукта»', '17:00 — Фотосессия с участниками'] },
  { day: '10 сентября', events: ['10:00 — Детская программа: эко-мастерская', '11:00 — Итоговая конференция: тренды рынка 2026', '13:00 — Последние дегустации и покупки', '16:00 — Торжественное закрытие GreenExpo', '17:00 — Вручение наград победителям'] },
];

export default function Visitors() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Посетителям</h1>
          <p className="font-opensans text-lg mb-4" style={{ color: 'rgba(245,240,232,0.85)' }}>
            Бесплатный вход по предварительной регистрации
          </p>
          <p className="font-opensans text-base mb-8" style={{ color: 'rgba(245,240,232,0.7)' }}>
            8–10 сентября 2025 • МВЦ «Крокус Экспо», павильон 1, зал 1 • 10:00–18:00
          </p>
          <a href="#register" className="inline-block font-montserrat font-700 px-10 py-4 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'white', color: 'var(--eco-green)' }}>
            ЗАРЕГИСТРИРОВАТЬСЯ БЕСПЛАТНО
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Почему стоит прийти?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCome.map((item) => (
              <div key={item.title} className="card-eco p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(45,106,45,0.1)' }}>
                  <Icon name={item.icon} size={22} style={{ color: 'var(--eco-green)' }} />
                </div>
                <div>
                  <h3 className="font-montserrat font-700 text-sm mb-1" style={{ color: 'var(--eco-text)' }}>{item.title}</h3>
                  <p className="font-opensans text-xs leading-relaxed" style={{ color: '#5a7a5a' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Расписание */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Программа для посетителей</h2>
          <div className="space-y-6">
            {schedule.map((day) => (
              <div key={day.day} className="card-eco p-8">
                <h3 className="font-montserrat font-700 text-lg mb-4" style={{ color: 'var(--eco-green)' }}>{day.day}</h3>
                <ul className="space-y-2">
                  {day.events.map((ev) => (
                    <li key={ev} className="flex items-start gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                      <span style={{ color: 'var(--eco-green-light)', flexShrink: 0 }}>•</span>
                      {ev}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как добраться */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">Как добраться</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-eco p-8">
              <Icon name="Train" size={32} className="mb-4" style={{ color: 'var(--eco-green)' }} />
              <h3 className="font-montserrat font-700 text-lg mb-3" style={{ color: 'var(--eco-green)' }}>На метро</h3>
              <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                Станция метро Мякинино (Арбатско-Покровская линия). Переход в МВЦ «Крокус Экспо» без выхода на улицу — прямо из станции в комплекс.
              </p>
            </div>
            <div className="card-eco p-8">
              <Icon name="Car" size={32} className="mb-4" style={{ color: 'var(--eco-green)' }} />
              <h3 className="font-montserrat font-700 text-lg mb-3" style={{ color: 'var(--eco-green)' }}>На автомобиле</h3>
              <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                65–66 км МКАД (внешняя сторона), Московская обл., Красногорский р-н. Бесплатная парковка для участников и посетителей выставки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Регистрация */}
      <section id="register" className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title">Бесплатная регистрация</h2>
          <div className="card-eco p-8">
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Имя и фамилия *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <select className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)', color: 'var(--eco-text)' }}>
                <option value="">Я посещаю как...</option>
                <option value="private">Частное лицо</option>
                <option value="professional">Профессионал рынка</option>
                <option value="buyer">Байер / закупщик</option>
                <option value="media">Журналист / блогер</option>
              </select>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="agree-vis" className="mt-1" />
                <label htmlFor="agree-vis" className="font-opensans text-xs" style={{ color: '#5a7a5a' }}>
                  Соглашаюсь с <Link to="/privacy" style={{ color: 'var(--eco-green)' }} className="hover:underline">политикой конфиденциальности</Link>
                </label>
              </div>
              <button type="submit" className="w-full font-montserrat font-700 text-base py-4 rounded-full transition-all hover:scale-[1.02]" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
                ЗАРЕГИСТРИРОВАТЬСЯ
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
