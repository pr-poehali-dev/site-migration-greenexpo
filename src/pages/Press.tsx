import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Press() {
  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      <section className="py-16 max-w-3xl mx-auto px-4">
        <h1
          className="font-montserrat font-800 text-3xl md:text-4xl mb-6"
          style={{ color: 'var(--eco-green-dark)' }}
        >
          Уважаемые журналисты!
        </h1>

        <p className="font-opensans text-sm leading-relaxed mb-6" style={{ color: 'var(--eco-text)' }}>
          Приглашаем к информационному сотрудничеству отраслевые, экологические и лайфстайл СМИ, интернет-издания, порталы, ТВ каналы, радиостанции.
        </p>

        <div className="mb-6">
          <p className="font-montserrat font-700 text-sm mb-3" style={{ color: 'var(--eco-text)' }}>
            Преимущества информационного сотрудничества с выставкой GreenExpo:
          </p>
          <ul className="space-y-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>получение экспертного мнения от ведущих производителей и поставщиков отрасли</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>повышение узнаваемости СМИ среди целевой аудитории</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>формирование лояльности к СМИ среди целевой аудитории</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>возможность получить комментарий или провести интервью с ключевыми участниками выставки и руководством</span>
            </li>
          </ul>
          <p className="font-opensans text-sm mt-3 italic" style={{ color: 'var(--eco-green)' }}>
            Аккредитованные журналисты получают возможность посещения выставки во все дни её работы
          </p>
        </div>

        <div className="mb-6">
          <p className="font-montserrat font-700 text-sm mb-3" style={{ color: 'var(--eco-text)' }}>
            Информационное сотрудничество в рамках выставки предполагает:
          </p>
          <ul className="space-y-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>обмен постами в социальных сетях (соц. сети выставки/соц. сети СМИ)</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>обмен баннерами/логотипами/новостями на сайтах (сайт выставки/сайт СМИ)</span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <p className="font-montserrat font-700 text-sm mb-3" style={{ color: 'var(--eco-text)' }}>
            Дополнительные возможности обсуждаются в индивидуальном порядке:
          </p>
          <ul className="space-y-2 font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>очное участие СМИ в выставке со стендом</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>indoor реклама на территории выставки</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>специальные проекты</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: 'var(--eco-green)' }}>•</span>
              <span>проведение стимулирующий акций, розыгрышей</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="https://disk.yandex.ru/i/ixnM52Y3B15eMA?utm_source=greenexpo_pro&utm_medium=lnk&utm_campaign=button_3_block"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat font-700 text-sm tracking-widest px-12 py-4 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
          >
            СКАЧАТЬ ЛОГОТИП
          </a>
        </div>

        <div>
          <p className="font-montserrat font-700 text-sm mb-2" style={{ color: 'var(--eco-text)' }}>
            КОНТАКТЫ:
          </p>
          <p className="font-opensans text-sm mb-1" style={{ color: 'var(--eco-text)' }}>
            Руководитель выставки-форума GreenExpo. Жизнь в стиле ЕСО
          </p>
          <p className="font-montserrat font-700 text-sm mb-2" style={{ color: 'var(--eco-text)' }}>
            Егорова Анастасия Владимировна
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