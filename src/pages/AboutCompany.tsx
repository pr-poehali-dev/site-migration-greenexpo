import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function AboutCompany() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">О компании</h1>
          <p className="font-opensans text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>
            ООО «Выставочная компания ГринЭкспо»
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-eco p-10 mb-8">
            <h2 className="font-montserrat font-700 text-2xl mb-4" style={{ color: 'var(--eco-green)' }}>Кто мы</h2>
            <p className="font-opensans text-base leading-relaxed mb-4" style={{ color: 'var(--eco-text)' }}>
              ООО «Выставочная компания ГринЭкспо» — специализированная выставочная компания, работающая в сфере органического и натурального рынка. Мы создаём профессиональные площадки для встречи производителей, дистрибьюторов и потребителей экологически чистой продукции.
            </p>
            <p className="font-opensans text-base leading-relaxed" style={{ color: 'var(--eco-text)' }}>
              Главный проект компании — ежегодная Международная Выставка-Форум <strong>GreenExpo «Жизнь в стиле ECO»</strong>, которая проводится в МВЦ «Крокус Экспо» в Москве.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: 'Target', title: 'Наша миссия', desc: 'Содействовать развитию органического рынка в России, создавая лучшую площадку для деловых контактов и обмена опытом' },
              { icon: 'Eye', title: 'Наше видение', desc: 'Стать главным событием года для всей индустрии органики и натуральных продуктов в России и СНГ' },
            ].map((item) => (
              <div key={item.title} className="card-eco p-8 flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(45,106,45,0.1)' }}>
                  <Icon name={item.icon} size={22} style={{ color: 'var(--eco-green)' }} />
                </div>
                <div>
                  <h3 className="font-montserrat font-700 text-base mb-2" style={{ color: 'var(--eco-text)' }}>{item.title}</h3>
                  <p className="font-opensans text-sm leading-relaxed" style={{ color: '#5a7a5a' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-eco p-8">
            <h3 className="font-montserrat font-700 text-lg mb-4" style={{ color: 'var(--eco-green)' }}>Реквизиты</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
              <div><span style={{ color: '#5a7a5a' }}>Полное наименование:</span><br />ООО «Выставочная компания ГринЭкспо»</div>
              <div><span style={{ color: '#5a7a5a' }}>ИНН:</span><br />7705906333</div>
              <div><span style={{ color: '#5a7a5a' }}>Юридический адрес:</span><br />город Москва, Озерковский пер., д. 12, этаж 6 пом. 8, 9, офис 611</div>
              <div><span style={{ color: '#5a7a5a' }}>Телефон:</span><br /><a href="tel:+74959889904" className="hover:underline">+7 (495) 988-99-04</a></div>
              <div><span style={{ color: '#5a7a5a' }}>Email:</span><br /><a href="mailto:info@greenexpo.pro" className="hover:underline">info@greenexpo.pro</a></div>
              <div><span style={{ color: '#5a7a5a' }}>Сайт:</span><br /><a href="https://greenexpo.pro" target="_blank" rel="noreferrer" className="hover:underline">greenexpo.pro</a></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/contacts" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full transition-all hover:scale-105" style={{ backgroundColor: 'var(--eco-green)', color: 'var(--eco-beige)' }}>
              СВЯЗАТЬСЯ С НАМИ
            </Link>
            <Link to="/privacy" className="inline-block font-montserrat font-700 px-8 py-3 rounded-full border-2 transition-all hover:scale-105" style={{ borderColor: 'var(--eco-green)', color: 'var(--eco-green)' }}>
              ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}