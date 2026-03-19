import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const days = [
  {
    date: '8 сентября 2025',
    label: 'День 1',
    color: 'var(--eco-green)',
    events: [
      { time: '09:00', type: 'org', title: 'Регистрация участников и посетителей', location: 'Фойе, павильон 1' },
      { time: '10:00', type: 'ceremony', title: 'Торжественное открытие GreenExpo\'2025', location: 'Главная сцена' },
      { time: '11:00', type: 'conf', title: 'Пленарная сессия: «Органический рынок России: итоги 2024 и перспективы 2025»', location: 'Конференц-зал А' },
      { time: '12:30', type: 'conf', title: 'Панельная дискуссия: «Торговые сети и органическая продукция. Как попасть на полку?»', location: 'Конференц-зал А' },
      { time: '13:00', type: 'show', title: 'Кулинарное шоу: «Здоровый обед» от шеф-повара', location: 'Кулинарная сцена' },
      { time: '14:00', type: 'conf', title: 'Сессия: «Органическая сертификация: требования, процедура, стоимость»', location: 'Конференц-зал Б' },
      { time: '15:30', type: 'mk', title: 'Мастер-класс: «Натуральная косметика своими руками»', location: 'Зона мастер-классов' },
      { time: '17:00', type: 'net', title: 'Нетворкинг-сессия: знакомство участников', location: 'Коктейльная зона' },
    ],
  },
  {
    date: '9 сентября 2025',
    label: 'День 2',
    color: 'var(--eco-green-light)',
    events: [
      { time: '10:00', type: 'org', title: 'Открытие второго дня', location: 'Главная сцена' },
      { time: '10:30', type: 'conf', title: 'Конференция: «Экспорт органической продукции. Требования зарубежных рынков»', location: 'Конференц-зал А' },
      { time: '12:00', type: 'award', title: 'Конкурс GreenAward: голосование и объявление финалистов', location: 'Главная сцена' },
      { time: '13:00', type: 'show', title: 'Дегустация органических вин и безалкогольных напитков', location: 'Дегустационная зона' },
      { time: '14:30', type: 'conf', title: 'Круглый стол: «Господдержка производителей органики. Субсидии и льготы»', location: 'Конференц-зал Б' },
      { time: '15:30', type: 'mk', title: 'Лекция: «Как читать этикетку: разбираем состав продукта»', location: 'Зона мастер-классов' },
      { time: '17:00', type: 'net', title: 'B2B встречи: переговорная сессия производителей и ретейлеров', location: 'Переговорные комнаты' },
    ],
  },
  {
    date: '10 сентября 2025',
    label: 'День 3',
    color: '#5a9a5a',
    events: [
      { time: '10:00', type: 'org', title: 'Детская эко-мастерская (для детей 5–12 лет)', location: 'Детская зона' },
      { time: '11:00', type: 'conf', title: 'Итоговая конференция: «Тренды органического рынка 2026»', location: 'Конференц-зал А' },
      { time: '12:00', type: 'award', title: 'Торжественное вручение наград GreenAward', location: 'Главная сцена' },
      { time: '13:00', type: 'show', title: 'Последние дегустации и покупки у производителей', location: 'Выставочный зал' },
      { time: '15:30', type: 'conf', title: 'Пресс-конференция: итоги GreenExpo\'2025', location: 'Конференц-зал Б' },
      { time: '16:00', type: 'ceremony', title: 'Торжественное закрытие GreenExpo\'2025', location: 'Главная сцена' },
    ],
  },
];

const typeColors: Record<string, { bg: string; label: string }> = {
  conf: { bg: 'rgba(45,106,45,0.1)', label: 'Конференция' },
  show: { bg: 'rgba(255,165,0,0.1)', label: 'Шоу / Дегустация' },
  mk: { bg: 'rgba(74,158,74,0.1)', label: 'Мастер-класс' },
  net: { bg: 'rgba(100,149,237,0.1)', label: 'Нетворкинг' },
  org: { bg: 'rgba(200,200,200,0.15)', label: 'Организационное' },
  ceremony: { bg: 'rgba(45,106,45,0.15)', label: 'Церемония' },
  award: { bg: 'rgba(255,215,0,0.15)', label: 'Награждение' },
};

export default function Program() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Программа</h1>
          <p className="font-opensans text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>
            8–10 сентября 2025 года • МВЦ «Крокус Экспо»
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {days.map((day) => (
            <div key={day.date} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="font-montserrat font-800 text-sm px-4 py-2 rounded-full text-white" style={{ backgroundColor: day.color }}>
                  {day.label}
                </div>
                <h2 className="font-montserrat font-700 text-2xl" style={{ color: 'var(--eco-text)' }}>{day.date}</h2>
              </div>
              <div className="space-y-3">
                {day.events.map((ev, i) => (
                  <div key={i} className="card-eco p-4 flex gap-4 items-start" style={{ backgroundColor: typeColors[ev.type]?.bg || 'white' }}>
                    <div className="font-montserrat font-700 text-sm w-14 flex-shrink-0" style={{ color: 'var(--eco-green)' }}>{ev.time}</div>
                    <div className="flex-1">
                      <div className="font-montserrat font-600 text-sm mb-1" style={{ color: 'var(--eco-text)' }}>{ev.title}</div>
                      <div className="flex items-center gap-1 font-opensans text-xs" style={{ color: '#5a7a5a' }}>
                        <Icon name="MapPin" size={12} style={{ color: 'var(--eco-green)' }} />
                        {ev.location}
                      </div>
                    </div>
                    <div className="font-opensans text-xs px-2 py-1 rounded" style={{ backgroundColor: 'rgba(45,106,45,0.12)', color: 'var(--eco-green)', whiteSpace: 'nowrap' }}>
                      {typeColors[ev.type]?.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
