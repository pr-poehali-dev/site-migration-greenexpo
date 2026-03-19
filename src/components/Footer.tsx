import { Link } from 'react-router-dom';

const footerLinks = {
  about: [
    { label: 'О выставке', path: '/about' },
    { label: 'Участникам', path: '/exhibitors' },
    { label: 'Посетителям', path: '/visitors' },
    { label: 'Прессе', path: '/press' },
    { label: 'Как добраться', path: '/contacts#how-to-get' },
    { label: 'Гостиницы', path: '/contacts#hotels' },
    { label: 'Фотогалерея', path: '/gallery' },
    { label: 'Архив', path: '/archive' },
  ],
  company: [
    { label: 'О компании', path: '/about-company' },
    { label: 'Контакты', path: '/contacts' },
    { label: 'Пользовательское соглашение', path: '/terms' },
    { label: 'Политика конфиденциальности', path: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--eco-green-dark)' }} className="pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--eco-green-light)' }}>
                <span className="text-white font-montserrat font-800 text-sm">GE</span>
              </div>
              <div>
                <div className="font-montserrat font-800 text-white text-base leading-tight">GreenExpo</div>
                <div className="font-opensans text-xs" style={{ color: 'var(--eco-sand)' }}>Жизнь в стиле ECO</div>
              </div>
            </Link>
            <p className="font-opensans text-sm mb-4" style={{ color: 'rgba(245,240,232,0.7)' }}>
              II Международная Выставка-Форум для производителей, дистрибьюторов и потребителей ECO продукции
            </p>
            <div className="font-opensans text-sm space-y-1" style={{ color: 'var(--eco-sand)' }}>
              <p>8–10 сентября 2025</p>
              <p>МВЦ «Крокус Экспо», павильон 1</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="font-montserrat font-700 text-white text-sm uppercase tracking-wider mb-4">
              РАССЫЛКА GREENEXPO
            </h4>
            <p className="font-opensans text-sm mb-4" style={{ color: 'rgba(245,240,232,0.7)' }}>
              Подпишитесь на новости выставки и получайте актуальную информацию
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-3 py-2 rounded-lg text-sm font-opensans outline-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
              />
              <button
                className="px-4 py-2 rounded-lg font-montserrat font-600 text-sm text-white transition-all"
                style={{ backgroundColor: 'var(--eco-green-light)' }}
              >
                ОК
              </button>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-sm uppercase tracking-wider mb-4">
              О ВЫСТАВКЕ
            </h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-opensans text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(245,240,232,0.7)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-sm uppercase tracking-wider mb-4">
              О НАС
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-opensans text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(245,240,232,0.7)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contacts */}
            <div className="mt-6 space-y-1">
              <p className="font-opensans text-sm" style={{ color: 'var(--eco-sand)' }}>
                <a href="tel:+74959889904" className="hover:text-white transition-colors">+7 (495) 988-99-04</a>
              </p>
              <p className="font-opensans text-sm" style={{ color: 'var(--eco-sand)' }}>
                <a href="tel:+74955090143" className="hover:text-white transition-colors">+7 (495) 509-01-43</a>
              </p>
              <p className="font-opensans text-sm" style={{ color: 'var(--eco-sand)' }}>
                <a href="mailto:info@greenexpo.pro" className="hover:text-white transition-colors">info@greenexpo.pro</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-opensans text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>
              © 2025 ООО «Выставочная компания ГринЭкспо». ИНН 7705906333
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="font-opensans text-xs hover:text-white transition-colors" style={{ color: 'rgba(245,240,232,0.5)' }}>
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="font-opensans text-xs hover:text-white transition-colors" style={{ color: 'rgba(245,240,232,0.5)' }}>
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
