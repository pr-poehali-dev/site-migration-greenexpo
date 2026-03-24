import Header from '@/components/Header';
import Footer from '@/components/Footer';

const hotels = [
  {
    name: '«Аквариум Отель» ⭐⭐⭐',
    img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/dcadaf31-34d4-485a-9e07-0f1982f02026.jpg',
    imgAlt: 'Hotel Aquarium',
    description: (
      <>
        <p>
          Отель «АКВАРИУМ» ⭐⭐⭐ расположен в Crocus Expo, на выставку можно попасть за несколько минут пешком
          даже не выходя на улицу. 225 уютных номеров располагают всем необходимым для комфортного и спокойного отдыха.
        </p>
        <p className="mt-3">
          Бронирование будет доступно по ссылке:{' '}
          <a href="https://aquariumhotel.ru/rooms/" target="_blank" rel="noopener noreferrer" className="hotel-link">
            https://aquariumhotel.ru/rooms/
          </a>
        </p>
        <p className="mt-3 font-semibold">Контактные данные для бронирования:</p>
        <ul className="mt-1 space-y-1 text-sm">
          <li>– электронная почта - <span className="hotel-link">reservations@izont-club.ru</span></li>
          <li>– телефон <span className="hotel-link">+7 (499) 490-18-28</span></li>
          <li>– WhatsApp <span className="hotel-link">+7 (926) 837-01-34</span></li>
        </ul>
        <a href="https://aquariumhotel.ru/" target="_blank" rel="noopener noreferrer" className="hotel-link block mt-2">
          https://aquariumhotel.ru/
        </a>
      </>
    ),
  },
  {
    name: 'Бизнес-отель 4* «Гринвуд»',
    img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/93c08cf9-d592-46f9-b748-6b257e16cee3.jpeg',
    imgAlt: 'Greenwood Hotel',
    description: (
      <>
        <p>
          Бизнес-отель 4* «Гринвуд», расположен на территории Бизнес-центра «Гринвуд», 69км МКАД.
        </p>
        <p className="mt-3 font-semibold">Отель «Гринвуд»**** это:</p>
        <ul className="mt-1 space-y-1 text-sm list-none">
          <li>– 376 номеров различных категорий;</li>
          <li>– Завтрак по системе шведский стол/сет-меню, включенный в стоимость проживания;</li>
          <li>– Wi-Fi, халаты, тапочки, гигиенические принадлежности, индивидуальное кондиционирование в номерах;</li>
          <li>– Отель в 4 км от Крокуса Экспо и в 14 км от аэропорта Шереметьево.</li>
        </ul>
        <a href="http://www.hotelgreenwood.ru" target="_blank" rel="noopener noreferrer" className="hotel-link block mt-3">
          www.hotelgreenwood.ru
        </a>
      </>
    ),
  },
  {
    name: 'Апарт-отель YE\'S Mitino',
    img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/4f231809-5a0c-48e9-8e16-8a4c254bccad.jpg',
    imgAlt: "YE'S Mitino",
    description: (
      <>
        <p>
          Апарт – отель YE'S Mitino отлично подходит для комфортного проживания в Москве.
          Удобное расположение в 7 минутах ходьбы от станции метро «Митино». Локация отеля
          окружена ландшафтным парком, лесопарком и озерами. А уютные номера оснащены
          всеми необходимыми условиями: кухонной зоной, ванной комнатой, зонами для работы и отдыха.
        </p>
        <p className="mt-3">
          YE'S Mitino обладает богатой инфраструктурой и предлагает к услугам гостей: фитнес с
          бассейном, ресторан, систему хранения, зону паркинга, круглосуточную стойку ресепшн,
          уборку апартаментов и услуги химчистки.
          Рядом с комплексом имеются удобная транспортная развязка, крупнейшие торговые
          комплексы, рестораны, салоны красоты.
        </p>
        <p className="mt-3 font-semibold">Контакты отеля для бронирования проживания:</p>
        <p className="text-sm mt-1">Тел: 8 (812) 210-43-50 Доб. 404</p>
      </>
    ),
  },
  {
    name: '«Hampton by Hilton Moscow Strogino» ⭐⭐⭐',
    img: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/b34cfa33-d665-42fa-bf53-a4347dd8acd4.jpeg',
    imgAlt: 'Hampton by Hilton',
    description: (
      <>
        <p>
          М.Строгино, ул.Кулакова, 20. 1 остановка на метро от Выставочного центра «Крокус Экспо».
          Гостиница на 206 номеров, ресторан, оплата картой, возможно проживание с животными,
          Wi-Fi, тренажёрный зал, прачечная, химчистка.
        </p>
        <a href="https://hamptonstrogino.ru/" target="_blank" rel="noopener noreferrer" className="hotel-link block mt-2">
          https://hamptonstrogino.ru/
        </a>
      </>
    ),
  },
  {
    name: 'Гостиница «Крошка Енот»',
    img: null,
    imgAlt: '',
    description: (
      <>
        <p className="text-sm">
          Завтрак • Парковка • Wi-Fi • 10 минут до метро «Тушинская», «Пятницкое шоссе»,
          «Строгино» • Рум-сервис • Рядом с ВЦ «КРОКУС ЭКСПО» Строгино ул. Кулакова, 20.
          1 остановка на метро от Выставочного центра «Крокус Экспо» • Гостиница на 206 номеров
        </p>
        <a href="http://www.krashika-enot.ru/" target="_blank" rel="noopener noreferrer" className="hotel-link block mt-2">
          http://www.krashika-enot.ru/
        </a>
      </>
    ),
  },
];

export default function Hotel() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-20 max-w-4xl mx-auto px-4">
        <h1
          className="font-montserrat font-800 text-3xl md:text-4xl text-center mb-12"
          style={{ color: 'var(--eco-green-dark)' }}
        >
          Отели, ближайшие к МВЦ «Крокус Экспо»:
        </h1>

        <div className="space-y-12">
          {hotels.map((hotel) => (
            <div key={hotel.name}>
              <h2
                className="font-montserrat font-700 text-lg mb-4"
                style={{ color: 'var(--eco-text)' }}
              >
                {hotel.name}
              </h2>
              <div className={`flex flex-col ${hotel.img ? 'md:flex-row' : ''} gap-6`}>
                <div
                  className="font-opensans text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--eco-text)' }}
                >
                  {hotel.description}
                </div>
                {hotel.img && (
                  <div className="md:w-72 shrink-0">
                    <img
                      src={hotel.img}
                      alt={hotel.imgAlt}
                      className="w-full h-48 md:h-56 object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
              <hr className="mt-8 border-t" style={{ borderColor: 'rgba(45,106,45,0.15)' }} />
            </div>
          ))}
        </div>

        {/* Кнопка Как добраться */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.flowers-expo.ru/flowers-expo/visitors/road.html?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=button_3_block"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat font-700 text-sm tracking-widest px-12 py-4 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
          >
            КАК ДОБРАТЬСЯ
          </a>
        </div>
      </section>

      <Footer />

      <style>{`
        .hotel-link { color: var(--eco-green); }
        .hotel-link:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}