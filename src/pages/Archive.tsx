import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const heroImg = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/files/4db694dd-cc8c-49d7-979b-20eb8b01522b.jpg';

export default function Archive() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Архив</h1>
          <p className="font-opensans text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>История выставки GreenExpo</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-eco p-8 flex gap-8 items-center">
            <div className="rounded-xl overflow-hidden flex-shrink-0 w-48 h-36 hidden md:block">
              <img src={heroImg} alt="GreenExpo 2024" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-montserrat font-800 text-3xl mb-2" style={{ color: 'var(--eco-green)' }}>GreenExpo 2024</div>
              <div className="font-opensans text-sm mb-3" style={{ color: '#5a7a5a' }}>I Международная Выставка-Форум • 4–6 сентября 2024</div>
              <p className="font-opensans text-sm leading-relaxed mb-4" style={{ color: 'var(--eco-text)' }}>
                Первая выставка GreenExpo прошла в МВЦ «Крокус Экспо» и собрала более 5 000 посетителей. 72 экспонента из 8 стран представили свою продукцию. Прошли 28 деловых мероприятий, состоялось вручение первой премии GreenAward.
              </p>
              <div className="flex flex-wrap gap-4">
                {[{ icon: 'Users', val: '5 000+', label: 'посетителей' }, { icon: 'Building2', val: '72', label: 'экспонента' }, { icon: 'Globe', val: '8', label: 'стран' }, { icon: 'Calendar', val: '28', label: 'мероприятий' }].map((item) => (
                  <div key={item.label} className="flex items-center gap-1">
                    <Icon name={item.icon} size={14} style={{ color: 'var(--eco-green)' }} />
                    <span className="font-montserrat font-700 text-sm" style={{ color: 'var(--eco-text)' }}>{item.val}</span>
                    <span className="font-opensans text-xs" style={{ color: '#5a7a5a' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
