export default function ProgramHero() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-4">Деловая программа</h1>
        <p className="font-opensans text-lg" style={{ color: 'rgba(245,240,232,0.85)' }}>
          7–9 сентября 2026 года • МВЦ «Крокус Экспо»
        </p>
      </div>
    </section>
  );
}
