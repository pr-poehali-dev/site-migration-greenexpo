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
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-6 py-4 flex-wrap"
      style={{ backgroundColor: 'rgba(30, 30, 30, 0.97)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
    >
      <p className="font-opensans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '800px' }}>
        Используя данный сайт, вы даёте согласие на использование файлов cookie, помогающих нам сделать его удобнее для вас.
      </p>
      <button
        onClick={handleAccept}
        className="font-montserrat font-700 text-sm tracking-widest px-8 py-3 rounded-full transition-all hover:opacity-90 shrink-0"
        style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
      >
        ОК
      </button>
    </div>
  );
};

export default CookieBanner;
