import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useUtm } from '@/hooks/useUtm';
import { reachGoal } from '@/hooks/useAnalytics';

const NOTIFY_URL = 'https://functions.poehali.dev/28e6c844-7b1b-41c6-9811-be3b2957727c';

const BANNER_1 = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/45d78e86-a531-43a0-977f-255bf2d3e533.jpg';
const BANNER_2 = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/c402177b-f2b3-4b9c-8fef-f9b6aa5dd83b.jpg';
const BANNER_3 = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/ceb79da0-a2aa-42e2-a038-3db6b3a9182d.jpg';
const BANNER_5 = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/064208dd-a567-4b1a-9560-a71e14f1702d.jpg';

interface ModalFormProps {
  open: boolean;
  onClose: () => void;
  utm: Record<string, string>;
}

function ModalForm({ open, onClose, utm }: ModalFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'blog_checklist', ...utm }),
      });
      reachGoal('form_submit');
    } finally {
      setSending(false);
      setSent(true);
    }
  }

  function handleClose() {
    setForm({ name: '', phone: '', email: '' });
    setSent(false);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: 'white' }}
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={handleClose}>
          <Icon name="X" size={20} />
        </button>
        <h2 className="font-montserrat font-800 text-xl mb-6 text-center" style={{ color: 'var(--eco-green-dark)' }}>
          Узнать про участие в выставке
        </h2>
        {sent ? (
          <p className="text-center font-opensans py-6" style={{ color: 'var(--eco-green-dark)' }}>
            Спасибо! Ваш запрос отправлен, мы свяжемся с вами в ближайшее время.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required type="text" placeholder="Имя" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
              style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
            <input required type="tel" placeholder="Телефон" value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
              style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
            <input required type="email" placeholder="Email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
              style={{ borderColor: '#d0d8c8', color: 'var(--eco-text)' }} />
            <button type="submit" disabled={sending}
              className="w-full font-montserrat font-700 text-sm tracking-widest py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white', opacity: sending ? 0.7 : 1 }}>
              {sending ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ'}
            </button>
            <div className="flex flex-col gap-2">
              <label className="flex items-start gap-2 font-opensans text-xs leading-relaxed cursor-pointer" style={{ color: '#888' }}>
                <input type="checkbox" required className="mt-0.5 shrink-0 accent-green-700" />
                <span>Я принимаю{' '}
                  <a href="https://www.flowers-expo.ru/terms-of-use.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--eco-green)' }}>Пользовательское соглашение</a>{' '}
                  и{' '}
                  <a href="https://www.flowers-expo.ru/all_oferta.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--eco-green)' }}>Договор оферты</a>
                </span>
              </label>
              <label className="flex items-start gap-2 font-opensans text-xs leading-relaxed cursor-pointer" style={{ color: '#888' }}>
                <input type="checkbox" required className="mt-0.5 shrink-0 accent-green-700" />
                <span>Даю согласие на обработку, хранение и передачу указанных мной персональных данных согласно{' '}
                  <a href="https://www.flowers-expo.ru/confidential.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--eco-green)' }}>Политике конфиденциальности</a>
                </span>
              </label>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const FAQ_ITEMS = [
  {
    q: 'Сколько стоит участие в выставке для малого бизнеса?',
    a: 'Стоимость участия зависит от формата и площади стенда. Для небольшого эко-бренда на старте оптимальна площадь 6–9 м². При этом компании из сегмента МСБ могут компенсировать затраты на участие через региональные программы господдержки — в ряде случаев до 100% расходов на аренду стенда и застройку. Подробнее о субсидиях можно узнать на сайте greenexpo.pro.',
  },
  {
    q: 'За сколько времени нужно начинать подготовку к первой выставке?',
    a: 'Минимальный горизонт подготовки к участию в выставке — 2–3 месяца. За это время вы успеете забронировать стенд по выгодной цене, подготовить материалы и обучить команду. Лучшие места на популярных выставках таких как, например, GreenExpo бронируются за 4–6 месяцев до начала выставки.',
  },
  {
    q: 'Можно ли участвовать в эко-выставке компании из региона?',
    a: 'Да. Региональные производители составляют значительную часть участников профильных эко-выставок в Москве. Более того, участие в федеральной выставке — один из самых эффективных способов заявить о бренде на общероссийском уровне и найти дистрибьюторов в других регионах. Региональные участники также могут получить субсидию через местный Центр поддержки предпринимательства.',
  },
  {
    q: 'Как оценить, стоит ли участвовать в конкретной выставке?',
    a: 'Запросите у организатора данные о посещаемости, составе аудитории и списке участников прошлых лет. Если среди посетителей есть закупщики торговых сетей и дистрибьюторы вашего сегмента — выставка стоит внимания. Если нет — это скорее имиджевое мероприятие, а не инструмент продаж.',
  },
  {
    q: 'Что делать, если бюджет на участие в выставке ограничен?',
    a: 'Рассмотрите два варианта. Первый — уменьшить площадь стенда: даже 4–6 м² при правильной подготовке дают результат. Второй — изучить возможность субсидирования через региональные программы поддержки МСБ. GreenExpo входит в число выставок, участие в которых может быть частично или полностью компенсировано государством.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: '#d0d8c8' }}>
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 font-montserrat font-semibold text-base"
        style={{ color: 'var(--eco-green-dark)' }}
        onClick={() => setOpen(v => !v)}
      >
        <span>{q}</span>
        <Icon name={open ? 'ChevronUp' : 'ChevronDown'} size={20} className="shrink-0 mt-0.5" />
      </button>
      {open && (
        <p className="pb-5 font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
          {a}
        </p>
      )}
    </div>
  );
}

const GALLERY_PLACEHOLDERS = Array.from({ length: 6 });

export default function BlogArticleExhibitionChecklist() {
  const utm = useUtm();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--eco-bg)' }}>
      <Header />
      <ModalForm open={modalOpen} onClose={() => setModalOpen(false)} utm={utm} />

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">

          <nav className="mb-8 flex items-center gap-2 font-opensans text-sm" style={{ color: '#9ca39c' }}>
            <Link to="/" className="hover:underline" style={{ color: 'var(--eco-green)' }}>Главная</Link>
            <span>/</span>
            <Link to="/blog" className="hover:underline" style={{ color: 'var(--eco-green)' }}>Блог</Link>
            <span>/</span>
            <span>Чек-лист подготовки к выставке</span>
          </nav>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-montserrat font-600 px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--eco-green-light, #e8f0e4)', color: 'var(--eco-green-dark)' }}>
              Чек-лист
            </span>
            <span className="text-xs font-opensans" style={{ color: '#9ca39c' }}>20 апреля 2026</span>
          </div>

          <h1 className="font-montserrat font-bold text-2xl md:text-3xl leading-tight mb-6" style={{ color: 'var(--eco-green-dark)' }}>
            Как подготовиться к первой выставке: полный чек-лист для эко-бренда и производителя органической продукции
          </h1>

          <div className="font-opensans text-base leading-relaxed space-y-5" style={{ color: 'var(--eco-text)' }}>

            <p>
              Участие в выставке для небольшого эко-бренда или производителя органической продукции — это не просто возможность показать товар. Это один из самых эффективных способов найти дистрибьюторов, выйти в торговые сети и получить живую обратную связь от целевой аудитории за три дня.
            </p>
            <p>
              Но первая выставка пугает: непонятно, с чего начать, что взять на стенд, как подготовить команду и не потратить деньги впустую. Именно поэтому мы составили подробный чек-лист подготовки к выставке — от бронирования стенда до работы с контактами после мероприятия.
            </p>
            <p>
              Этот материал написан на основе опыта участников GreenExpo — международной выставки-форума, которая ежегодно проходит в Москве в МВЦ "Крокус Экспо".
            </p>

            <div className="my-8 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setModalOpen(true)}>
              <img src={BANNER_1} alt="GreenExpo 2026 — международная выставка-форум" className="w-full h-auto hover:opacity-95 transition-opacity" />
            </div>

            <h2 className="font-montserrat font-bold text-xl md:text-2xl mt-10 mb-4" style={{ color: 'var(--eco-green-dark)' }}>
              Шаг 1. Определите цели: зачем вашему бренду участие в выставке
            </h2>
            <p>
              Прежде чем бронировать выставочный стенд и считать бюджет, ответьте на главный вопрос: какой результат вы хотите получить от участия в выставке?
            </p>
            <p>Для эко-бренда и производителя органической продукции типичные цели участия в выставке выглядят так:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>повышение узнаваемости бренда на федеральном уровне;</li>
              <li>поиск дистрибьюторов и оптовых покупателей — именно на профильные выставки приходят закупщики торговых сетей и дистрибьюторские компании;</li>
              <li>прямые продажи конечным потребителям;</li>
              <li>тестирование нового продукта и сбор живой обратной связи;</li>
              <li>поиск партнёров для совместного производства или кобрендинга.</li>
            </ul>
            <div className="rounded-xl px-5 py-4 text-sm" style={{ backgroundColor: '#f0f5ec', borderLeft: '4px solid var(--eco-green-dark)' }}>
              <strong>Совет от GreenExpo:</strong> чётко сформулируйте 1–2 приоритетные цели до того, как принимать решение об участии в выставке. Именно от целей зависит всё остальное: выбор площадки, размер стенда, состав команды и бюджет подготовки.
            </div>

            <h2 className="font-montserrat font-bold text-xl md:text-2xl mt-10 mb-4" style={{ color: 'var(--eco-green-dark)' }}>
              Шаг 2. Как выбрать выставку и правильно оформить выставочный стенд
            </h2>
            <p>
              Для производителя эко-продукции критически важно выбрать выставку с правильной аудиторией — иначе даже идеально оформленный стенд не даст результата.
            </p>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>На что смотреть при выборе выставки:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Состав посетителей: есть ли среди них закупщики, байеры торговых сетей, дистрибьюторы — или только конечные потребители?</li>
              <li>Специализация: профильная эко-выставка даёт более целевой трафик, чем универсальная продовольственная ярмарка</li>
              <li>История мероприятия: сколько выставок прошло, какова динамика посещаемости</li>
              <li>Участники прошлых лет: если крупные игроки рынка возвращаются — это показатель качества аудитории</li>
            </ul>
            <p>
              Например, GreenExpo в Москве — специализированная эко-выставка, которая проходит в 2026 году в третий раз. Более 12 000 гостей посещают выставку за три дня, среди них: закупщики, дистрибьюторы и конечные потребители эко-продукции одновременно.
            </p>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Как оформить выставочный стенд для эко-бренда</p>
            <p>
              Стенд — это первое, что видит посетитель. У вас есть 3–5 секунд, чтобы остановить человека в потоке. Оформление стенда должно мгновенно транслировать ценности бренда: натуральность, экологичность, качество.
            </p>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Практические рекомендации по оформлению стенда:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Оптимальная площадь для первого участия — 6–9 м²: достаточно для презентации продукта и комфортного общения, не перегружает бюджет</li>
              <li>Материалы: дерево, бамбук, лён, переработанный картон — они работают на философию эко-бренда лучше любого текста</li>
              <li>Визуальная айдентика: единый стиль, читаемый логотип, понятный слоган — посетитель должен понимать, что вы предлагаете за одну секунду</li>
              <li>Зона дегустации или тестирования — возможность попробовать продукт всегда конвертирует лучше, чем просто прочитать этикетку</li>
            </ul>
            <div className="rounded-xl px-5 py-4 text-sm" style={{ backgroundColor: '#f0f5ec', borderLeft: '4px solid var(--eco-green-dark)' }}>
              <strong>Совет от GreenExpo:</strong> не пытайтесь поместить на стенд весь ассортимент. Три продукта, представленные идеально, работают лучше, чем двадцать продуктов в хаотичной выкладке.
            </div>

            <div className="my-8 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setModalOpen(true)}>
              <img src={BANNER_2} alt="Почему стоит участвовать в GreenExpo" className="w-full h-auto hover:opacity-95 transition-opacity" />
            </div>

            <h2 className="font-montserrat font-bold text-xl md:text-2xl mt-10 mb-4" style={{ color: 'var(--eco-green-dark)' }}>
              Шаг 3. Что взять на выставку: продукт и маркетинговые материалы
            </h2>
            <p>
              Важно не перегружать стенд, а сделать акцент на главном.
            </p>
            <p>
              Одна из самых частых ошибок при подготовке к первой выставке — попытка показать весь ассортимент сразу. Это рассеивает внимание посетителя и размывает позиционирование бренда.
            </p>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Продукт:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Выберите 3–5 ключевых позиций, которые лучше всего представляют бренд</li>
              <li>Подготовьте образцы для тестирования или дегустации — это главный инструмент продаж на выставке</li>
              <li>Проверьте упаковку и сроки годности — на выставке это видно сразу</li>
              <li>Подготовьте продукт-магнит: что-то яркое или необычное, что будет останавливать людей у стенда</li>
            </ul>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Маркетинговые материалы для участника выставки:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Каталог продукции — кратко, визуально, с ценами для оптовых покупателей</li>
              <li>Визитки с QR-кодом — ведут на сайт, каталог или форму заявки на оптовый заказ</li>
              <li>Прайс для дистрибьюторов — отдельный документ, не путать с розничным</li>
              <li>Брошюра «О бренде» — история, ценности, сертификаты, производство</li>
              <li>Брендированный мерч — экосумки, блокноты, карандаши: работают на узнаваемость после выставки</li>
            </ul>
            <div className="rounded-xl px-5 py-4 text-sm" style={{ backgroundColor: '#f0f5ec', borderLeft: '4px solid var(--eco-green-dark)' }}>
              <strong>Совет от GreenExpo:</strong> выбирайте только самые сильные продукты и продумывайте их подачу — именно они формируют первое впечатление о бренде.
            </div>

            <h2 className="font-montserrat font-bold text-xl md:text-2xl mt-10 mb-4" style={{ color: 'var(--eco-green-dark)' }}>
              Шаг 4. Команда на стенде: как подготовить людей, которые продают
            </h2>
            <p>Часто именно люди, а не продукт, определяют успех на выставке.</p>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Что нужно подготовить до выставки:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Питч бренда на 30 секунд — короткий рассказ: кто вы, что производите, чем отличаетесь. Каждый сотрудник стенда должен произносить его одинаково</li>
              <li>Ответы на типовые вопросы: состав продукта, наличие сертификатов, условия оптовой закупки, минимальный заказ, география доставки</li>
              <li>Сценарий работы с посетителем: как остановить, как вовлечь, как перевести в контакт</li>
              <li>Система фиксации контактов: блокнот, CRM на телефоне или специальное приложение — каждый разговор должен заканчиваться записанным контактом</li>
            </ul>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Сколько людей нужно на стенде</p>
            <p>Для стенда 6–9 м² оптимально 2–3 человека:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>один работает с входящим потоком и привлекает посетителей</li>
              <li>второй ведёт детальные переговоры с заинтересованными</li>
              <li>третий фиксирует контакты и следит за стендом</li>
            </ul>
            <p>Никогда не оставляйте стенд без сотрудника — это потерянные контакты и плохое впечатление.</p>
            <div className="rounded-xl px-5 py-4 text-sm" style={{ backgroundColor: '#f0f5ec', borderLeft: '4px solid var(--eco-green-dark)' }}>
              <strong>Совет от GreenExpo:</strong> энергия, открытость и искренность команды способны привлечь больше внимания, чем любой визуальный элемент. Привлекайте к работе на стенде самых «влюблённых» в продукт сотрудников — это всегда чувствуется и всегда работает.
            </div>

            <h2 className="font-montserrat font-bold text-xl md:text-2xl mt-10 mb-4" style={{ color: 'var(--eco-green-dark)' }}>
              Шаг 5. Логистика и организационная подготовка к выставке
            </h2>
            <p>Организационные ошибки при подготовке к выставке — одна из главных причин, по которой первое участие оборачивается стрессом вместо результата.</p>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>За 4–6 недель до выставки:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Забронирован и оплачен выставочный стенд</li>
              <li>Получены пропуска для команды и транспортного средства</li>
              <li>Согласован план застройки стенда с организатором</li>
              <li>Заказано дополнительное оборудование (стеллажи, подсветка, холодильник для образцов и др.)</li>
              <li>Проверены технические условия площадки (электричество, интернет, вода)</li>
            </ul>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>За 1–2 недели:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Продукция упакована для транспортировки</li>
              <li>Подготовлены все необходимые документы (сертификаты, декларации соответствия и т.д.)</li>
              <li>Распределены роли в команде на каждый день выставки</li>
            </ul>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>За 1–2 дня:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Монтаж стенда (как правило, за день до открытия)</li>
              <li>Финальная проверка всех элементов стенда</li>
              <li>Брифинг команды: кто за что отвечает, как фиксируем контакты, план на каждый день</li>
            </ul>
            <div className="rounded-xl px-5 py-4 text-sm" style={{ backgroundColor: '#f0f5ec', borderLeft: '4px solid var(--eco-green-dark)' }}>
              <strong>Совет от GreenExpo:</strong> на крупных площадках, таких как МВЦ "Крокус Экспо" в Москве, монтаж начинается за 2-3 дня до открытия выставки. Уточните у организатора расписание монтажа и завоза заранее — опоздание с монтажом означает неготовый стенд в первый день, а это потерянные контакты и нервы команды.
            </div>

            <h2 className="font-montserrat font-bold text-xl md:text-2xl mt-10 mb-4" style={{ color: 'var(--eco-green-dark)' }}>
              Шаг 6. Продвижение участия в выставке: что делать до, во время и после
            </h2>
            <p>
              Выставка начинается задолго до открытия и продолжается после её завершения. Большинство компаний теряют 30–40% потенциального эффекта именно потому, что не выстраивают коммуникацию вокруг своего участия.
            </p>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>До выставки (за 3–4 недели):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Анонсируйте участие в соцсетях, email-рассылке и мессенджерах, например: «Мы будем на GreenExpo'2026 в Москве — приходите к нам на стенд»</li>
              <li>Опубликуйте номер стенда и схему прохода — снизьте барьер для прихода</li>
              <li>Предложите специальные условия для посетителей выставки: скидку, подарок, расширенную дегустацию</li>
              <li>Договоритесь об упоминании в коммуникациях организатора — у GreenExpo, например, есть рассылка по базе посетителей и реклама в соцсетях</li>
            </ul>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Во время выставки:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ведите сторис и короткие видео в режиме реального времени — это привлекает дополнительных посетителей к стенду</li>
              <li>Публикуйте фото с переговоров (с разрешения собеседника)</li>
              <li>Запускайте интерактивы для подписчиков: голосования, вопросы, розыгрыши среди пришедших на стенд</li>
            </ul>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>После выставки (первые 48 часов — критически важны):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Свяжитесь с каждым контактом лично: письмо или сообщение с напоминанием о вашем разговоре</li>
              <li>Отправьте коммерческое предложение всем, кто проявил интерес к оптовым закупкам</li>
              <li>Опубликуйте итоговый пост в соцсетях с благодарностью и анонсом следующих шагов</li>
              <li>Внесите все контакты в CRM и поставьте задачи на follow-up в течение 7 дней</li>
            </ul>
            <div className="rounded-xl px-5 py-4 text-sm" style={{ backgroundColor: '#f0f5ec', borderLeft: '4px solid var(--eco-green-dark)' }}>
              <strong>Совет от GreenExpo:</strong> чем раньше вы начнёте коммуникацию об участии в выставке и чем дольше будете её поддерживать после — тем больше результатов получите. Выставка длится три дня, но работа с её эффектом — минимум три месяца.
            </div>

            <div className="my-8 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setModalOpen(true)}>
              <img src={BANNER_3} alt="Принять участие в выставке GreenExpo" className="w-full h-auto hover:opacity-95 transition-opacity" />
            </div>

            <h2 className="font-montserrat font-bold text-xl md:text-2xl mt-10 mb-4" style={{ color: 'var(--eco-green-dark)' }}>
              Шаг 7. Как оценить результат участия в выставке: аналитика и выводы
            </h2>
            <p>Чтобы объективно оценить эффективность участия в выставке и принять решение об участии в следующем году, зафиксируйте ключевые метрики.</p>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Количественные показатели:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Общее количество собранных контактов</li>
              <li>Количество B2B-переговоров с потенциальными дистрибьюторами и закупщиками</li>
              <li>Количество выставленных коммерческих предложений после выставки</li>
              <li>Объём прямых продаж на стенде</li>
              <li>Количество закрытых сделок в течение 30, 60 и 90 дней после выставки</li>
            </ul>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Качественные показатели:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Реакция аудитории на продукт и упаковку</li>
              <li>Наиболее частые вопросы посетителей — это прямая подсказка для доработки коммуникации</li>
              <li>Что делали конкуренты на своих стендах</li>
              <li>Какие форматы привлечения посетителей работали лучше всего</li>
            </ul>
            <p className="font-semibold" style={{ color: 'var(--eco-green-dark)' }}>Итоговый расчёт ROI участия в выставке:</p>
            <p>
              Сопоставьте общие затраты на участие (стенд + команда + материалы + транспорт) с выручкой от сделок, заключённых благодаря выставке. Горизонт оценки — минимум 3 месяца после мероприятия.
            </p>
            <p>
              Пример простого расчёта: если стоимость участия составила 150 000 рублей, а по итогам выставки в течение трёх месяцев заключено 3 дистрибьюторских договора с совокупным оборотом 900 000 рублей в год — ROI очевиден даже без сложных формул.
            </p>
            <div className="rounded-xl px-5 py-4 text-sm" style={{ backgroundColor: '#f0f5ec', borderLeft: '4px solid var(--eco-green-dark)' }}>
              <strong>Совет от GreenExpo:</strong> заранее продумайте систему учёта контактов и сделок с тегом выставки, например, «источник: GreenExpo» в вашей CRM. Без этого через три месяца будет невозможно понять, какие именно клиенты пришли с выставки.
            </div>
          </div>

          <div className="mt-12 mb-6">
            <h2 className="font-montserrat font-bold text-xl md:text-2xl mb-6" style={{ color: 'var(--eco-green-dark)' }}>
              Как проходила выставка GreenExpo'2025
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {GALLERY_PLACEHOLDERS.map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#d0d8c8' }}
                >
                  <Icon name="Image" size={32} style={{ color: '#a0b09a' }} />
                </div>
              ))}
            </div>
          </div>

          <div className="font-opensans text-base leading-relaxed space-y-5 mt-10" style={{ color: 'var(--eco-text)' }}>
            <h2 className="font-montserrat font-bold text-xl md:text-2xl" style={{ color: 'var(--eco-green-dark)' }}>
              Подведём итог
            </h2>
            <p>
              Участие в профильной эко-выставке — это рабочий инструмент продаж для производителей любого масштаба. При правильной подготовке к выставке даже небольшой бренд может за три дня получить столько целевых B2B-контактов, сколько отдел продаж собирает холодными звонками за несколько месяцев.
            </p>
            <p>
              Главное — подойти к первой выставке системно: определить цели, грамотно оформить выставочный стенд, подготовить команду и выстроить коммуникацию до и после мероприятия.
            </p>
            <p>
              GreenExpo'2026 — международная выставка-форум — пройдёт с 7 по 9 сентября в Москве в МВЦ "Крокус Экспо". Это профильная площадка для производителей, дистрибьюторов, потребителей ECO продукции и технологий, а также для ландшафтных архитекторов, исполнителей работ, поставщиков оборудования и материалов для ландшафтного дизайна в фокусе ландшафтной экологии. Если вы рассматриваете участие — оставьте заявку на сайте или напишите нам на почту{' '}
              <a href="mailto:managergreenexpo@yandex.ru" className="underline" style={{ color: 'var(--eco-green)' }}>managergreenexpo@yandex.ru</a>. Мы расскажем о форматах участия, поможем с документами на субсидию и ответим на все вопросы.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-montserrat font-bold text-xl md:text-2xl mb-6" style={{ color: 'var(--eco-green-dark)' }}>
              Часто задаваемые вопросы о подготовке к выставке
            </h2>
            <div className="border-t" style={{ borderColor: '#d0d8c8' }}>
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

          <div className="my-10 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setModalOpen(true)}>
            <img src={BANNER_5} alt="Участие в выставке GreenExpo" className="w-full h-auto hover:opacity-95 transition-opacity" />
          </div>

          <div className="mt-8 pt-6 border-t font-opensans text-sm text-center" style={{ borderColor: '#d0d8c8', color: '#9ca39c' }}>
            Статья подготовлена командой GreenExpo — международной выставки-форума.<br />
            Москва, МВЦ "Крокус Экспо", 7–9 сентября 2026 года.{' '}
            <a href="https://greenexpo.pro" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--eco-green)' }}>Подробнее на greenexpo.pro</a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
