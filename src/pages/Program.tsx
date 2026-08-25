import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSeo } from '@/hooks/useSeo';
import ProgramHero from '@/components/program/ProgramHero';
import ProgramSchedule from '@/components/program/ProgramSchedule';

export default function Program() {
  useSeo({
    title: 'Программа GreenExpo 2026 — лекции и мастер-классы об эко и органике',
    description: 'Деловая программа выставки GreenExpo 2026: лекции об органическом земледелии, эко-продуктах, натуральной косметике и зелёных технологиях. 7–9 сентября 2026, Москва.',
  });

  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <ProgramHero />

      <ProgramSchedule />

      <Footer />
    </div>
  );
}
