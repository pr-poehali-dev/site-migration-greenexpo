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
  { src: 'https://cdn.poehali.dev/files/b9396f78-f3ad-4361-affd-5f37a4dd4256.jpg', caption: 'Гортензии и растения' },
  { src: 'https://cdn.poehali.dev/files/687d52bc-03ff-4240-a6c9-3521f497e673.jpg', caption: 'Прогулка по выставке' },
  { src: 'https://cdn.poehali.dev/files/d18f81e4-4983-4add-94d4-543e1611ff92.jpg', caption: 'Дегустация сортов томатов' },
  { src: 'https://cdn.poehali.dev/files/f28908f4-7e5f-4282-bbe6-2bfc7c1f1086.jpg', caption: 'Топиарное искусство' },
  { src: 'https://cdn.poehali.dev/files/e3c615d7-4878-4430-b4f5-014ac6dde0f5.jpg', caption: 'Павильон с экзотическими растениями' },
  { src: 'https://cdn.poehali.dev/files/4519552a-cfeb-44d4-a79f-ad5fe8aac12d.jpg', caption: 'Дегустация огурцов' },
  { src: 'https://cdn.poehali.dev/files/b4a36543-c464-4a31-ab96-42d6557ec022.jpg', caption: 'Оживлённые аллеи выставки' },
  { src: 'https://cdn.poehali.dev/files/1d349e93-8c87-412f-8970-c2b6f648d46e.jpg', caption: 'Зрители на лекции' },
  { src: 'https://cdn.poehali.dev/files/f472e63f-ece0-4f42-a411-a512b2480bbb.jpg', caption: 'Мастер-класс по пересадке растений' },
  { src: 'https://cdn.poehali.dev/files/1639ad53-95d8-4329-961d-39a4460e6dea.jpg', caption: 'Семинар «Заряди растения витаминами»' },
  { src: 'https://cdn.poehali.dev/files/d4e346ff-05a9-43e4-9856-a7029f021ce6.jpg', caption: 'Спикер на мастер-классе' },
  { src: 'https://cdn.poehali.dev/files/e74ede73-5be9-413e-994d-d0b8e32b7d9a.jpg', caption: 'Полный зал на лекции' },
  { src: 'https://cdn.poehali.dev/files/bd34469c-325f-4e5a-a1f8-a253ea4f3029.jpg', caption: 'Стенд «Виноград Ульяновска»' },
  { src: 'https://cdn.poehali.dev/files/6f491f53-2e90-4d7f-918a-5d319b9d36b7.jpg', caption: 'Экспозиция гладиолусов' },
  { src: 'https://cdn.poehali.dev/files/308bcc4d-1369-4d0a-8a61-8e70ee38c49e.jpg', caption: 'Официальное открытие выставки' },
  { src: 'https://cdn.poehali.dev/files/b4d6c893-8976-4c2e-8611-64327217ee91.jpg', caption: 'Команда организаторов на сцене' },
  { src: 'https://cdn.poehali.dev/files/843e1381-7727-4535-a89a-ebe6252a5ad8.jpg', caption: 'Участница с агладеонемой' },
  { src: 'https://cdn.poehali.dev/files/4c83d0c4-e946-4fb0-9ce6-04abab07d382.jpg', caption: 'Публика на показе' },
  { src: 'https://cdn.poehali.dev/files/0a02ebbb-f94f-49d0-af56-8d1732f930cd.jpg', caption: 'Стенд питомника деревьев' },
  { src: 'https://cdn.poehali.dev/files/b94152d6-0da3-4cf7-be5b-8e6eb9fa752d.jpg', caption: 'Экспозиция винограда' },
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