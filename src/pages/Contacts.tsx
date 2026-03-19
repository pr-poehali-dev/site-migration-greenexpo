import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const contacts = [
  {
    dept: 'Общие вопросы',
    phone: '+7 (495) 988-99-04',
    email: 'info@greenexpo.pro',
  },
  {
    dept: 'Участие в выставке (экспоненты)',
    phone: '+7 (495) 509-01-43',
    email: 'expo@greenexpo.pro',
  },
  {
    dept: 'Пресс-служба',
    phone: '+7 (495) 988-99-04',
    email: 'press@greenexpo.pro',
  },
];

const hotels = [
  { name: 'Marriott Москва Красные Холмы', distance: '20 минут на метро', stars: '★★★★★' },
  { name: 'Крокус Сити Отель', distance: '5 минут пешком', stars: '★★★★' },
  { name: 'Ramada by Wyndham', distance: '10 минут на такси', stars: '★★★★' },
  { name: 'Holiday Inn Express', distance: '15 минут на метро', stars: '★★★' },
];

export default function Contacts() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Контакты</h1>
          <p className="font-opensans text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>
            Свяжитесь с нами по любому вопросу
          </p>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Организатор */}
            <div className="card-eco p-8">
              <h2 className="font-montserrat font-700 text-xl mb-6" style={{ color: 'var(--eco-green)' }}>Организатор</h2>
              <div className="font-montserrat font-700 text-base mb-1" style={{ color: 'var(--eco-text)' }}>
                ООО «Выставочная компания ГринЭкспо»
              </div>
              <div className="font-opensans text-sm mb-4" style={{ color: '#5a7a5a' }}>ИНН 7705906333</div>
              <div className="space-y-3">
                <div className="flex items-start gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                  <Icon name="MapPin" size={16} style={{ color: 'var(--eco-green)', marginTop: 2, flexShrink: 0 }} />
                  <span>125315, г. Москва, ул. Планерная, д. 7, корп. 1, стр. 3</span>
                </div>
                {contacts.map((c) => (
                  <div key={c.dept}>
                    <div className="font-montserrat font-600 text-xs mb-1" style={{ color: 'var(--eco-green)' }}>{c.dept}</div>
                    <div className="flex items-center gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                      <Icon name="Phone" size={14} style={{ color: 'var(--eco-green)' }} />
                      <a href={`tel:${c.phone.replace(/\D/g, '')}`} className="hover:underline">{c.phone}</a>
                    </div>
                    <div className="flex items-center gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                      <Icon name="Mail" size={14} style={{ color: 'var(--eco-green)' }} />
                      <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Место проведения */}
            <div className="card-eco p-8">
              <h2 className="font-montserrat font-700 text-xl mb-6" style={{ color: 'var(--eco-green)' }}>Место проведения</h2>
              <div className="font-montserrat font-700 text-base mb-1" style={{ color: 'var(--eco-text)' }}>
                МВЦ «Крокус Экспо»
              </div>
              <div className="space-y-3 font-opensans text-sm mt-3" style={{ color: 'var(--eco-text)' }}>
                <div className="flex items-start gap-2">
                  <Icon name="Building2" size={16} style={{ color: 'var(--eco-green)', marginTop: 2, flexShrink: 0 }} />
                  <span>Павильон 1, зал 1</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} style={{ color: 'var(--eco-green)', marginTop: 2, flexShrink: 0 }} />
                  <span>Московская обл., Красногорский р-н, 65–66 км МКАД (внешняя сторона)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Train" size={16} style={{ color: 'var(--eco-green)', flexShrink: 0 }} />
                  <span>м. Мякинино (Арбатско-Покровская линия)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Car" size={16} style={{ color: 'var(--eco-green)', flexShrink: 0 }} />
                  <span>Бесплатная парковка на территории МВЦ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} style={{ color: 'var(--eco-green)', flexShrink: 0 }} />
                  <span>8–10 сентября 2025, 10:00–18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className="card-eco p-8 max-w-2xl mx-auto">
            <h2 className="font-montserrat font-700 text-xl mb-6" style={{ color: 'var(--eco-green)' }}>Написать нам</h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Имя *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <textarea placeholder="Сообщение *" rows={4} className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none resize-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <button type="submit" className="w-full font-montserrat font-700 text-base py-4 rounded-full transition-all hover:scale-[1.02]" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
                ОТПРАВИТЬ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Гостиницы */}
      <section id="hotels" className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title">Гостиницы рядом</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hotels.map((h) => (
              <div key={h.name} className="card-eco p-6 flex gap-4 items-center">
                <Icon name="Hotel" size={28} style={{ color: 'var(--eco-green)', flexShrink: 0 }} />
                <div>
                  <div className="font-montserrat font-700 text-sm" style={{ color: 'var(--eco-text)' }}>{h.name}</div>
                  <div className="font-opensans text-xs" style={{ color: 'var(--eco-green-light)' }}>{h.stars}</div>
                  <div className="font-opensans text-xs mt-1" style={{ color: '#5a7a5a' }}>{h.distance}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
