import { Link, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'О выставке', anchor: 'about' },
  { label: 'Экспонентам', anchor: 'exhibitors' },
  { label: 'Посетителям', anchor: 'visitors' },
  { label: 'Программа', path: '/program' },
  { label: 'Прессе', anchor: 'press' },
  { label: 'Контакты', anchor: 'contacts' },
];

export default function Footer() {
  const navigate = useNavigate();

  function handleNavClick(item: typeof navItems[0]) {
    if (item.path) {
      navigate(item.path);
    } else if (item.anchor) {
      const el = document.getElementById(item.anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(item.anchor!)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }

  return (
    <footer style={{ backgroundColor: 'var(--eco-green-dark)' }} className="pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logos & Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/files/fd84a788-1a72-431d-bef6-6c7a5d181c51.png"
                alt="GreenExpo"
                className="h-10 w-auto object-contain"
              />
              <img
                src="https://cdn.poehali.dev/files/caccf2a2-7076-4882-8486-894308630638.png"
                alt="Flowers Expo 2026"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="font-opensans text-sm mb-3" style={{ color: 'rgba(245,240,232,0.7)' }}>
              2 выставки на одной площадке
            </p>
            <div className="font-opensans text-sm space-y-1" style={{ color: 'var(--eco-sand)' }}>
              <p>7–9 сентября 2026</p>
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

          {/* Nav Links */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-sm uppercase tracking-wider mb-4">
              НАВИГАЦИЯ
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="font-opensans text-sm transition-colors hover:text-white text-left cursor-pointer bg-transparent border-none p-0"
                    style={{ color: 'rgba(245,240,232,0.7)' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-sm uppercase tracking-wider mb-4">
              КОНТАКТЫ
            </h4>
            <div className="space-y-1">
              <p className="font-opensans text-sm" style={{ color: 'var(--eco-sand)' }}>
                <a href="tel:+74951180639" className="hover:text-white transition-colors">+7 (495) 118-06-39</a>
              </p>
              <p className="font-opensans text-sm" style={{ color: 'var(--eco-sand)' }}>
                <a href="mailto:mail@flowers-expo.ru" className="hover:text-white transition-colors">mail@flowers-expo.ru</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-opensans text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>
              © 2026 ООО «Выставочная компания ГринЭкспо». ИНН 7705906333
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