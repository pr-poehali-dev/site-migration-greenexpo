import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'О ВЫСТАВКЕ', anchor: 'about' },
  { label: 'ЭКСПОНЕНТАМ', anchor: 'exhibitors' },
  { label: 'ПОСЕТИТЕЛЯМ', anchor: 'visitors' },
  { label: 'ПРОГРАММА', path: '/program' },
  { label: 'ПРЕССЕ', anchor: 'press' },
  { label: 'КОНТАКТЫ', anchor: 'contacts' },
];

interface HeaderProps {
  onOpenModal?: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function scrollToAnchor(anchor: string) {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + anchor);
      setTimeout(() => {
        const el2 = document.getElementById(anchor);
        if (el2) el2.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  function handleNavClick(item: typeof navItems[0]) {
    setMenuOpen(false);
    if (item.path) {
      navigate(item.path);
    } else if (item.anchor) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(item.anchor!);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        scrollToAnchor(item.anchor);
      }
    }
  }

  return (
    <header style={{ backgroundColor: 'var(--eco-green-dark)' }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/files/fd84a788-1a72-431d-bef6-6c7a5d181c51.png"
              alt="GreenExpo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="font-montserrat text-xs font-600 px-3 py-2 rounded transition-all duration-150 cursor-pointer"
                style={{ color: 'rgba(245,240,232,0.8)', backgroundColor: 'transparent', border: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => onOpenModal ? onOpenModal() : navigate('/?modal=participate')}
              className="font-montserrat font-700 text-xs px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: 'var(--eco-green-light)', color: 'white', border: 'none' }}
            >
              УЧАСТВОВАТЬ
            </button>
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
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="font-montserrat text-sm font-600 px-4 py-3 rounded transition-all text-left cursor-pointer"
                style={{ color: 'var(--eco-beige)', backgroundColor: 'transparent', border: 'none' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onOpenModal?.(); }}
              className="font-montserrat font-700 text-sm px-4 py-3 rounded-full text-center mt-2 cursor-pointer"
              style={{ backgroundColor: 'var(--eco-green-light)', color: 'white', border: 'none' }}
            >
              УЧАСТВОВАТЬ
            </button>
          </div>
        </div>
      )}
    </header>
  );
}