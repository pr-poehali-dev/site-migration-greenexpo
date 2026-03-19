import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'О ВЫСТАВКЕ', path: '/about' },
  { label: 'ЭКСПОНЕНТАМ', path: '/exhibitors' },
  { label: 'ПОСЕТИТЕЛЯМ', path: '/visitors' },
  { label: 'ПРОГРАММА', path: '/program' },
  { label: 'ПРЕССЕ', path: '/press' },
  { label: 'КОНТАКТЫ', path: '/contacts' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header style={{ backgroundColor: 'var(--eco-green-dark)' }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--eco-green-light)' }}>
              <span className="text-white font-montserrat font-800 text-xs">GE</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-montserrat font-800 text-white text-sm leading-tight">GreenExpo</div>
              <div className="font-opensans text-xs leading-tight" style={{ color: 'var(--eco-sand)' }}>Жизнь в стиле ECO</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-montserrat text-xs font-600 px-3 py-2 rounded transition-all duration-150"
                style={{
                  color: location.pathname === item.path ? 'var(--eco-beige)' : 'rgba(245,240,232,0.8)',
                  backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.15)' : 'transparent',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = location.pathname === item.path ? 'rgba(255,255,255,0.15)' : 'transparent')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/exhibitors#register"
              className="font-montserrat font-700 text-xs px-5 py-2 rounded-full transition-all duration-200"
              style={{ backgroundColor: 'var(--eco-green-light)', color: 'white' }}
            >
              УЧАСТВОВАТЬ
            </Link>
          </div>

          {/* Burger */}
          <button
            className="lg:hidden p-2 rounded"
            style={{ color: 'var(--eco-beige)' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: 'var(--eco-green-dark)' }} className="lg:hidden border-t border-white/10 py-3">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="font-montserrat text-sm font-600 px-4 py-3 rounded transition-all"
                style={{ color: 'var(--eco-beige)' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/exhibitors#register"
              onClick={() => setMenuOpen(false)}
              className="font-montserrat font-700 text-sm px-4 py-3 rounded-full text-center mt-2"
              style={{ backgroundColor: 'var(--eco-green-light)', color: 'white' }}
            >
              УЧАСТВОВАТЬ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
