import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const heroImg = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/5394c160-2a6a-4345-a2d3-d23038df86b2.jpg';

const facts = [
  { icon: 'Calendar', title: 'Дата', desc: '8–10 сентября 2025 года' },
  { icon: 'Building2', title: 'Место', desc: 'МВЦ «Крокус Экспо», павильон 1, зал 1' },
  { icon: 'MapPin', title: 'Адрес', desc: 'Московская обл., Красногорский р-н, 65–66 км МКАД' },
  { icon: 'Clock', title: 'Время работы', desc: '10:00 – 18:00 ежедневно' },
  { icon: 'Users', title: 'Ожидается посетителей', desc: 'более 5 000 человек' },
  { icon: 'Globe', title: 'Международная выставка', desc: 'Участники из России, СНГ и Европы' },
];

const sections = [
  { icon: 'Leaf', title: 'Органические продукты питания', desc: 'Продукты с сертификатами органического производства: молочные продукты, мясо и птица, хлебобулочные изделия, снеки, напитки, масла и соусы.' },
  { icon: 'Flower2', title: 'Натуральная косметика', desc: 'Уходовая косметика, парфюмерия, продукты для волос и тела на натуральной основе без синтетических добавок.' },
  { icon: 'Home', title: 'Эко-товары для дома', desc: 'Биоразлагаемая посуда и упаковка, органическая бытовая химия, натуральные ткани, товары из переработанных материалов.' },
  { icon: 'Sprout', title: 'Сельское хозяйство', desc: 'Фермерские продукты, семена, удобрения и технологии органического земледелия. Агрономические решения для устойчивого производства.' },
  { icon: 'Recycle', title: 'Экотехнологии', desc: 'Переработка, возобновляемая энергетика, умные системы учёта ресурсов, биоразлагаемые материалы нового поколения.' },
  { icon: 'BarChart3', title: 'Деловая программа', desc: 'Конференции, панельные дискуссии, круглые столы с экспертами рынка органической и натуральной продукции.' },
];

export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block font-montserrat text-sm px-4 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'var(--eco-sand)' }}>
            II Международная Выставка-Форум
          </div>
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">О выставке</h1>
          <p className="font-opensans text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>
            GreenExpo — главная площадка для профессионалов эко-рынка в России
          </p>
        </div>
      </section>

      {/* О чём выставка */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="card-eco p-10 mb-12">
            <h2 className="font-montserrat font-700 text-2xl mb-4" style={{ color: 'var(--eco-green)' }}>GreenExpo — кто мы?</h2>
            <p className="font-opensans text-base leading-relaxed mb-4" style={{ color: 'var(--eco-text)' }}>
              GreenExpo — это главная специализированная выставка-форум в сфере органической, натуральной и экологически чистой продукции в России. Мы создаём уникальное пространство для встречи производителей, дистрибьюторов, ретейлеров, инвесторов и конечных потребителей.
            </p>
            <p className="font-opensans text-base leading-relaxed mb-4" style={{ color: 'var(--eco-text)' }}>
              Наша миссия — содействовать развитию органического рынка в России, продвигать культуру здорового и ответственного потребления, создавать условия для деловых контактов и обмена опытом.
            </p>
            <p className="font-opensans text-base leading-relaxed" style={{ color: 'var(--eco-text)' }}>
              В 2025 году выставка пройдёт уже во второй раз. По итогам первого GreenExpo мы можем с гордостью заявить: <strong>более 1000 участников, 80 экспонентов, 30 деловых мероприятий и 5000+ посетителей</strong> за три дня.
            </p>
          </div>

          {/* Факты */}
          <h2 className="section-title">Ключевые факты</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {facts.map((f) => (
              <div key={f.title} className="card-eco p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(45,106,45,0.12)' }}>
                  <Icon name={f.icon} size={20} style={{ color: 'var(--eco-green)' }} />
                </div>
                <div>
                  <div className="font-montserrat font-700 text-sm mb-1" style={{ color: 'var(--eco-text)' }}>{f.title}</div>
                  <div className="font-opensans text-sm" style={{ color: '#5a7a5a' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Разделы выставки */}
          <h2 className="section-title">Разделы выставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sections.map((s) => (
              <div key={s.title} className="card-eco p-6 flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(45,106,45,0.1)' }}>
                  <Icon name={s.icon} size={22} style={{ color: 'var(--eco-green)' }} />
                </div>
                <div>
                  <h3 className="font-montserrat font-700 text-base mb-1" style={{ color: 'var(--eco-text)' }}>{s.title}</h3>
                  <p className="font-opensans text-sm leading-relaxed" style={{ color: '#5a7a5a' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/exhibitors" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
              СТАТЬ ЭКСПОНЕНТОМ
            </Link>
            <Link to="/visitors" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full border-2 transition-all hover:scale-105" style={{ borderColor: 'var(--eco-green)', color: 'var(--eco-green)' }}>
              ЗАРЕГИСТРИРОВАТЬСЯ КАК ПОСЕТИТЕЛЬ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
