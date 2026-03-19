import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const pressContacts = [
  { name: 'Анастасия Иванова', role: 'Пресс-служба GreenExpo', phone: '+7 (495) 988-99-04', email: 'press@greenexpo.pro' },
];

const mediaFeatures = [
  { icon: 'Newspaper', title: 'Пресс-релизы', desc: 'Официальные пресс-релизы и новости выставки для публикации в СМИ' },
  { icon: 'Image', title: 'Фотоматериалы', desc: 'Высококачественные фотографии выставки, экспонентов и мероприятий' },
  { icon: 'Video', title: 'Видеоматериалы', desc: 'Видеозаписи пленарных сессий, мастер-классов и церемоний открытия' },
  { icon: 'FileText', title: 'Пресс-кит', desc: 'Полный пресс-кит с логотипами, биографиями спикеров и описанием выставки' },
  { icon: 'Camera', title: 'Аккредитация', desc: 'Бесплатная пресс-аккредитация для журналистов и блогеров' },
  { icon: 'Mic', title: 'Интервью', desc: 'Организация интервью с организаторами, спикерами и экспонентами' },
];

const publications = [
  { source: 'РБК', title: 'Органический рынок России вырос на 25% за 2024 год', date: 'Январь 2025' },
  { source: 'Коммерсантъ', title: 'GreenExpo: как выставка меняет рынок натуральных продуктов', date: 'Декабрь 2024' },
  { source: 'Ведомости', title: 'Экологичное потребление становится новой нормой', date: 'Ноябрь 2024' },
  { source: 'ECO portal', title: 'Итоги первого GreenExpo: рекордные показатели', date: 'Сентябрь 2024' },
];

export default function Press() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Прессе</h1>
          <p className="font-opensans text-lg mb-8" style={{ color: 'rgba(245,240,232,0.85)' }}>
            Всё необходимое для журналистов, блогеров и представителей СМИ
          </p>
          <a href="#accreditation" className="inline-block font-montserrat font-700 px-10 py-4 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'white', color: 'var(--eco-green)' }}>
            АККРЕДИТОВАТЬСЯ
          </a>
        </div>
      </section>

      {/* Материалы */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Материалы для СМИ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaFeatures.map((item) => (
              <div key={item.title} className="card-eco p-6 flex gap-4 cursor-pointer" style={{ transition: 'all 0.2s' }}>
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

      {/* Публикации */}
      <section className="py-16" style={{ backgroundColor: 'var(--eco-beige-dark)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title">Публикации о GreenExpo</h2>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.title} className="card-eco p-6 flex items-center gap-6">
                <div className="font-montserrat font-800 text-sm px-3 py-2 rounded flex-shrink-0" style={{ backgroundColor: 'rgba(45,106,45,0.1)', color: 'var(--eco-green)' }}>
                  {pub.source}
                </div>
                <div className="flex-1">
                  <div className="font-montserrat font-600 text-sm" style={{ color: 'var(--eco-text)' }}>{pub.title}</div>
                  <div className="font-opensans text-xs mt-1" style={{ color: '#5a7a5a' }}>{pub.date}</div>
                </div>
                <Icon name="ExternalLink" size={16} style={{ color: 'var(--eco-green)', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Аккредитация */}
      <section id="accreditation" className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title">Аккредитация прессы</h2>
          <div className="card-eco p-8 mb-8">
            <p className="font-opensans text-sm leading-relaxed mb-6" style={{ color: 'var(--eco-text)' }}>
              Аккредитация для представителей СМИ, блогеров и контент-мейкеров — бесплатно. Аккредитованные журналисты получают: бейдж пресс, доступ на все мероприятия, отдельную пресс-зону, возможность брать интервью у спикеров.
            </p>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Имя и фамилия *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="text" placeholder="Издание / канал / блог *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)' }} />
              <select className="w-full px-4 py-3 rounded-lg font-opensans text-sm outline-none" style={{ border: '1px solid var(--eco-beige-dark)', backgroundColor: 'var(--eco-beige)', color: 'var(--eco-text)' }}>
                <option value="">Тип СМИ</option>
                <option value="print">Печатное издание</option>
                <option value="online">Онлайн-издание</option>
                <option value="tv">Телевидение</option>
                <option value="radio">Радио</option>
                <option value="blog">Блог / YouTube / Telegram</option>
              </select>
              <button type="submit" className="w-full font-montserrat font-700 text-base py-4 rounded-full transition-all hover:scale-[1.02]" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
                ПОДАТЬ ЗАЯВКУ НА АККРЕДИТАЦИЮ
              </button>
            </form>
          </div>

          {/* Пресс-контакты */}
          {pressContacts.map((c) => (
            <div key={c.email} className="card-eco p-6">
              <h3 className="font-montserrat font-700 text-base mb-3" style={{ color: 'var(--eco-green)' }}>Пресс-служба GreenExpo</h3>
              <div className="font-montserrat font-600 text-sm mb-1" style={{ color: 'var(--eco-text)' }}>{c.name}</div>
              <div className="font-opensans text-xs mb-3" style={{ color: '#5a7a5a' }}>{c.role}</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                  <Icon name="Phone" size={14} style={{ color: 'var(--eco-green)' }} />
                  <a href={`tel:${c.phone.replace(/\D/g, '')}`} className="hover:underline">{c.phone}</a>
                </div>
                <div className="flex items-center gap-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                  <Icon name="Mail" size={14} style={{ color: 'var(--eco-green)' }} />
                  <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
