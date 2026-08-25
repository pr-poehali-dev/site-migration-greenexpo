import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSeo } from '@/hooks/useSeo';
import SubsidiesHero from '@/components/subsidies/SubsidiesHero';
import ExpensesList from '@/components/subsidies/ExpensesList';
import RegionsGrid from '@/components/subsidies/RegionsGrid';
import { regions } from '@/components/subsidies/regionsData';

const expenseItems = [
  'на регистрационный взнос',
  'на аренду выставочной площади',
  'на застройку и оборудование стенда (в том числе монтажно-демонтажные услуги, инженерно-технические услуги)',
];

export default function Subsidies() {
  useSeo({
    title: 'Субсидии на участие в GreenExpo 2026 — выставка эко и органических товаров',
    description: 'Субсидии и льготы на участие в выставке GreenExpo 2026 для производителей эко-продуктов, органического земледелия и натуральных товаров. Условия для фермеров и малого бизнеса.',
  });

  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <SubsidiesHero />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <ExpensesList items={expenseItems} />
          <RegionsGrid regions={regions} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
