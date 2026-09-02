import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSeo } from '@/hooks/useSeo';

const PDF_URL = 'https://cdn.poehali.dev/projects/13b38f1b-0e5e-49c6-8d52-8061839426e8/bucket/dd4c3261-83d4-4b2a-8cab-c9de42a73e7d.pdf';

export default function PressRelease() {
  useSeo({
    title: 'Пресс-релиз GreenExpo 2026 — международная выставка-форум экологии и ландшафтной индустрии',
    description: 'Пресс-релиз выставки-форума GreenExpo\'2026: 7–9 сентября, МВЦ «Крокус Экспо». Программа мероприятий, участники, деловая программа по дням.',
  });

  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-16 max-w-3xl mx-auto px-4">
        <h1
          className="font-montserrat font-800 text-3xl md:text-4xl mb-2"
          style={{ color: 'var(--eco-green-dark)' }}
        >
          Международная выставка-форум GreenExpo'2026
        </h1>

        <p className="font-opensans text-sm mb-1" style={{ color: 'var(--eco-text)' }}>
          7, 8 сентября с 10:00 до 18:00, 9 сентября с 10:00 до 16:00
        </p>
        <p className="font-opensans text-sm mb-1" style={{ color: 'var(--eco-text)' }}>
          Москва, МВЦ «Крокус Экспо», Павильон 1, Зал 1
        </p>
        <a
          href="https://greenexpo.pro/"
          className="font-opensans text-sm mb-8 inline-block"
          style={{ color: 'var(--eco-green)' }}
        >
          https://greenexpo.pro/
        </a>

        <div className="flex justify-center mb-10">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat font-700 text-sm tracking-widest px-12 py-4 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
          >
            СКАЧАТЬ ПРЕСС-РЕЛИЗ (PDF)
          </a>
        </div>

        <div className="space-y-5 font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
          <p>
            С 7 по 9 сентября в МВЦ «Крокус Экспо», Павильон 1, Зал 1 состоится Международная
            выставка-форум экологии и ландшафтной индустрии GreenExpo'2026. Это новый выставочный
            проект, эффективная площадка для производителей, дистрибьюторов, потребителей eco
            продукции/технологий и индустрии ландшафта.
          </p>

          <p>
            Ключевая цель GreenExpo'2026 — объединить бизнес, конечных потребителей и специалистов
            отрасли, а основная миссия — поддержка экологических бизнесов и популяризация жизни в
            стиле ECO.
          </p>

          <p>
            Выставку почтят своим вниманием <strong>ГАРАНТИРОВАНО 10 000+ посетителей</strong>, среди них:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>закупщики и руководители торговых сетей, ресторанов, садовых центров, цветочных/эко-магазинов;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>дистрибьюторы эко-товаров;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>ландшафтные архитекторы, садовники, исполнители работ;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>все те, кто заботятся о себе и окружающей среде.</span>
            </li>
          </ul>

          <p className="font-montserrat font-700" style={{ color: 'var(--eco-green-dark)' }}>
            Экспонентам GreenExpo'2026 даст возможность:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>получить гарантированные качественные B2B контакты с дистрибьюторами, закупщиками торговых сетей, эко-магазинов, садовых центров и др.;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>привлечь внимание 100% целевой аудитории — B2B и B2C;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>продемонстрировать свои продукты/услуги заинтересованной целевой аудитории;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>расширить рынок сбыта и географию продаж;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>повысить узнаваемость бренда;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>получить обратную связь от посетителей выставки.</span>
            </li>
          </ul>

          <p className="font-montserrat font-700" style={{ color: 'var(--eco-green-dark)' }}>
            А посетителей GreenExpo'2026 ожидают:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>две выставки по одному билету — GreenExpo'2026 проходит на одной площадке с FlowersExpo'2026;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>330 отраслевых компаний в трёх залах МВЦ «Крокус Экспо»;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>насыщенная программа мероприятий: мастер-классы, лекции, лотерея, розыгрыши и подарки от экспонентов;</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>живые встречи с блогерами и экспертами.</span>
            </li>
          </ul>

          <p className="font-montserrat font-700 text-base pt-4" style={{ color: 'var(--eco-green-dark)' }}>
            Важные события выставки в этом году
          </p>

          <div>
            <p className="font-montserrat font-700 mb-2" style={{ color: 'var(--eco-text)' }}>
              7 сентября
            </p>
            <p>
              Дегустация ягодных культур и мастер-класс по обрезке малины от компании
              «Питомкино»; лекция «Философия японского сада» от Съезда Садовников России, где
              гости выставки узнают о глубоких смыслах и идеях, заложенных в японских садах, и
              погрузятся в их уникальную атмосферу; мастер-класс по заселению энтомофагов от
              Центра Биологической Защиты; лекция «С чего начинается сад» от компании «Никома».
              В этот же день состоится дебют компании «Агрослава» и презентация нового бренда
              удобрений, а также пройдут конференция ГИПЛИ: «О стратегии формирования и развития
              ландшафтной индустрии: аспекты создания водно-зелёных общественных пространств» и
              «Зелёный марафон-2026. Что такое сад в русском стиле?».
            </p>
            <p className="mt-2">
              Ярким событием дня станет практическая демонстрация техники, процесса и приёмов
              создания Японского сада на стенде Съезда Садовников России.
            </p>
          </div>

          <div>
            <p className="font-montserrat font-700 mb-2" style={{ color: 'var(--eco-text)' }}>
              8 сентября
            </p>
            <p>
              День мастер-классов, где эксперты поделятся опытом, наработками и лайфхаками: МК
              по искусству японской флористики икебана, организатором которого выступит
              Московское отделение Ikebana International; МК по пересадке ягодных культур и
              дегустация продуктов переработки ягодных культур от компании «Питомкино»; МК по
              созданию идеальной почвы для растений от «Планта Плюс»; «Формула красивого
              хвойного сада» от компании «Никома», и завершит этот день МК по посадке винограда
              от «Виноград Ульяновска».
            </p>
            <p className="mt-2">
              Также в этот день состоятся: «Зелёный форум GREEN EXPO. Комфортная городская среда:
              актуальные проблемы и реальные решения», организатором которого является оргкомитет
              выставки, и конференция профессиональных садовников «Вопросы бизнеса и творчества,
              реальные примеры, открытый диалог» от Съезда Садовников России.
            </p>
            <p className="mt-2">
              Особый интерес с экологической точки зрения представит презентация НПВ «Башинком»,
              рассказывающая о результатах исследований и внедрения в практику производства
              прорывных технологий в землепользовании, позволяющих дать Абсолютное Здоровье и
              вернуть Еде +800% пользы.
            </p>
          </div>

          <div>
            <p className="font-montserrat font-700 mb-2" style={{ color: 'var(--eco-text)' }}>
              9 сентября
            </p>
            <p>
              Деловая программа третьего заключительного дня выставки начнётся с важной темы —
              «Влияние химических пестицидов на жизнь и здоровье. Принцип интегрированной защиты
              и биоразнообразие в саду». Компания «Питомкино» проведёт ликбез по справочнику
              пестицидов, а также продолжит тему сохранения биоразнообразия, которую активно
              обсуждали на выставке GreenExpo в прошлом году. Также в этот день пройдут
              мастер-классы: по искусству японской флористики икебана; по обрезке гортензий и по
              прививке хвойных.
            </p>
          </div>

          <p>
            Кроме этого, все дни выставки гостей ждут: беспроигрышная лотерея от оргкомитета
            выставки GreenExpo'2026 и увлекательные образовательные мероприятия от экспонентов,
            ориентированные на качество жизни, безопасность и экологичность, сопровождаемые
            семинарами, мастер-классами, лекциями от ведущих экспертов отрасли и стимулирующими
            акциями.
          </p>
        </div>

        <div className="mt-10 pt-6" style={{ borderTop: '1px solid #d8dfc9' }}>
          <p className="font-opensans text-sm mb-1" style={{ color: 'var(--eco-text)' }}>
            Задать вопросы по участию в выставке и получить дополнительную информацию можно по e-mail:
          </p>
          <a
            href="mailto:mail@greenexpo.pro"
            className="font-opensans text-sm"
            style={{ color: 'var(--eco-green)' }}
          >
            mail@greenexpo.pro
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
