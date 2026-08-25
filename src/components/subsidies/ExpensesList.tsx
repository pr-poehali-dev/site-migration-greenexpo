interface ExpensesListProps {
  items: string[];
}

export default function ExpensesList({ items }: ExpensesListProps) {
  return (
    <>
      {/* Вводный текст */}
      <p className="font-opensans text-sm leading-relaxed mb-6" style={{ color: 'var(--eco-text)' }}>
        Если вы представляете малый или средний бизнес, то можете получить компенсацию на участие в выставках. Региональные Центры поддержки предпринимательства и Центры экспортной поддержки оказывают содействие компаниям, заявившим о своем желании участвовать в отраслевых выставках как в России, так и за рубежом.
      </p>

      {/* Что компенсируется */}
      <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
        <h2 className="font-montserrat font-700 text-lg mb-4" style={{ color: 'var(--eco-green-dark)' }}>
          Какие затраты могут быть компенсированы:
        </h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="font-opensans text-sm leading-relaxed flex gap-2" style={{ color: 'var(--eco-text)' }}>
              <span style={{ color: 'var(--eco-green)' }}>—</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="font-opensans text-sm mt-4" style={{ color: 'var(--eco-text)' }}>
          Чтобы подать заявку и получить субсидию, обратитесь в Центры поддержки бизнеса вашего региона:
        </p>
      </div>
    </>
  );
}
