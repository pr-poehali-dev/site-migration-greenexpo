import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_accepted');
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_accepted', '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-50 rounded-2xl shadow-xl p-4 flex flex-col gap-3"
      style={{
        backgroundColor: 'rgba(28, 28, 28, 0.96)',
        border: '1px solid rgba(255,255,255,0.1)',
        maxWidth: '280px',
        width: 'calc(25vw + 60px)',
        minWidth: '220px',
      }}
    >
      <p className="font-opensans text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
        Используя данный сайт, вы даёте согласие на использование файлов cookie, помогающих нам сделать его удобнее для вас.
      </p>
      <button
        onClick={handleAccept}
        className="font-montserrat font-700 text-xs tracking-widest px-6 py-2.5 rounded-full transition-all hover:opacity-90 self-start"
        style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
      >
        ОК
      </button>
    </div>
  );
};

export default CookieBanner;
