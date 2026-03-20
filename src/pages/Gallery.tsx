import Header from '@/components/Header';
import Footer from '@/components/Footer';

const photos = [
  { src: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/f5916126-7a61-45e1-b923-579c094b71da.jpg', caption: 'Открытие GreenExpo 2025' },
  { src: 'https://cdn.poehali.dev/files/dcbb0a2d-3a87-475d-a8e9-6f71050cf6a5.jpg', caption: 'Экспозиция органических продуктов' },
  { src: 'https://cdn.poehali.dev/files/b0316b19-d712-4eb9-b921-836469c2fd34.jpg', caption: 'Кулинарное шоу' },
  { src: 'https://cdn.poehali.dev/files/6b17fa07-87af-4de2-9e7b-b71f95978e25.jpg', caption: 'Нетворкинг-сессия' },
  { src: 'https://cdn.poehali.dev/files/bf128f7f-5cfb-46ad-a355-bc796f78c755.jpg', caption: 'Мастер-класс' },
  { src: 'https://cdn.poehali.dev/files/21619d54-5a19-47e9-bfa7-0f1d39bbe2a9.jpg', caption: 'Торжественное открытие' },
  { src: 'https://cdn.poehali.dev/files/fe83b722-55d6-4eb1-8e49-1ca73a78a457.jpg', caption: 'Перерезание ленты' },
  { src: 'https://cdn.poehali.dev/files/2e78f1f2-7f12-482c-9e34-833bc6830aba.jpg', caption: 'Выступление на сцене' },
  { src: 'https://cdn.poehali.dev/files/f57dffe5-d867-4209-8be1-9a6a59f59e20.jpg', caption: 'Мастер-класс по уходу за растениями' },
  { src: 'https://cdn.poehali.dev/files/bb02c00c-f83f-44dd-8028-23b5fc14862e.jpg', caption: 'Экостиль на выставке' },
  { src: 'https://cdn.poehali.dev/files/8929b01c-e46f-419c-b090-7cf4203d6b0e.jpg', caption: 'Дегустация томатов' },
  { src: 'https://cdn.poehali.dev/files/da8d3bd0-6aa5-425f-bab9-5299ad08bd1e.jpg', caption: 'Экспозиция роз' },
  { src: 'https://cdn.poehali.dev/files/6a9e0bda-29d1-4196-af4b-864a21b55da1.jpg', caption: 'Овощи и зелень' },
  { src: 'https://cdn.poehali.dev/files/ef91969e-06e2-457f-9205-f3cd8c9eee3b.jpg', caption: 'Сувенир GreenExpo' },
  { src: 'https://cdn.poehali.dev/files/5184e276-ce98-48eb-9486-337d18debb88.jpg', caption: 'Посетители выставки' },
];

export default function Gallery() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Фотогалерея</h1>
          <p className="font-opensans text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>
            GreenExpo 2025 — воспоминания в фотографиях
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-opensans text-sm text-white">{photo.caption}</p>
                  </div>
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