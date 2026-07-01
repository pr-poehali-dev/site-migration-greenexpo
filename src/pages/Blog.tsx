import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSeo } from '@/hooks/useSeo';

const ARTICLES = [
  {
    slug: 'kak-podgotovitsya-k-pervoy-vystavke',
    title: 'Как подготовиться к первой выставке: полный чек-лист для эко-бренда и производителя органической продукции',
    description: 'Подробный чек-лист подготовки к первой выставке для эко-брендов и производителей органики. Стенд, команда, логистика, продвижение — всё по шагам.',
    date: '2026-04-20',
    dateLabel: '20 апреля 2026',
    tag: 'Чек-лист',
    image: 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/45d78e86-a531-43a0-977f-255bf2d3e533.jpg',
  },
];

export default function Blog() {
  useSeo({
    title: 'Блог GreenExpo — статьи об эко-продуктах и органическом земледелии',
    description: 'Блог выставки GreenExpo: статьи об эко-продуктах, органическом земледелии, натуральной косметике, эко-одежде и зелёном образе жизни. Советы для производителей и покупателей.',
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--eco-bg)' }}>
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--eco-green-dark)' }}>
              Блог GreenExpo
            </h1>
            <p className="font-opensans text-base mb-12" style={{ color: 'var(--eco-text-light, #6b7c6b)' }}>
              Экспертные материалы для производителей, эко-брендов и участников выставки
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ARTICLES.map(article => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: 'white' }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-montserrat font-600 px-3 py-1 rounded-full"
                        style={{ backgroundColor: 'var(--eco-green-light, #e8f0e4)', color: 'var(--eco-green-dark)' }}
                      >
                        {article.tag}
                      </span>
                      <span className="text-xs font-opensans" style={{ color: '#9ca39c' }}>
                        {article.dateLabel}
                      </span>
                    </div>
                    <h2 className="font-montserrat font-bold text-lg leading-snug mb-3 group-hover:opacity-80 transition-opacity" style={{ color: 'var(--eco-green-dark)' }}>
                      {article.title}
                    </h2>
                    <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 font-montserrat text-sm font-600" style={{ color: 'var(--eco-green)' }}>
                      Читать статью
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}