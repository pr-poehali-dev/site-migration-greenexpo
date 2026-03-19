import Header from '@/components/Header';
import Footer from '@/components/Footer';

const heroImg = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/5394c160-2a6a-4345-a2d3-d23038df86b2.jpg';
const expoImg = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/4db694dd-cc8c-49d7-979b-20eb8b01522b.jpg';

const photos = [
  { src: heroImg, caption: 'Открытие GreenExpo 2024' },
  { src: expoImg, caption: 'Экспозиция органических продуктов' },
  { src: heroImg, caption: 'Кулинарное шоу' },
  { src: expoImg, caption: 'Нетворкинг-сессия' },
  { src: heroImg, caption: 'Пленарная сессия' },
  { src: expoImg, caption: 'Дегустация продуктов' },
  { src: heroImg, caption: 'Выставочные стенды' },
  { src: expoImg, caption: 'Мастер-класс' },
];

export default function Gallery() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Фотогалерея</h1>
          <p className="font-opensans text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>
            GreenExpo 2024 — воспоминания в фотографиях
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
