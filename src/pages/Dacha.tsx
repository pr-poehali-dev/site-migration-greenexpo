import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useUtm } from '@/hooks/useUtm';
import { reachGoal, GOALS } from '@/hooks/useAnalytics';

const NOTIFY_URL = 'https://functions.poehali.dev/28e6c844-7b1b-41c6-9811-be3b2957727c';

function reachMetrikaGoal(goal: string) {
  reachGoal(goal);
}

const steps = [
  { num: '1', text: 'Бренды предлагают решения' },
  { num: '2', text: 'Запускается онлайн-голосование' },
  { num: '3', text: 'Посетители выбирают то решение, которое хотят увидеть на выставке' },
  { num: '4', text: 'Решения победителей голосования реализуются в павильоне' },
];

const whatYouSee = [
  'Готовую дачу в мини формате внутри выставки',
  'Навигацию по каждому элементу',
  'Отметки брендов',
  'Историю выбора',
];

const defaultParticipantForm = { name: '', company: '', phone: '', email: '', agree: false };
const defaultPresentationForm = { name: '', company: '', site: '', phone: '', email: '' };

export default function Dacha() {
  const utm = useUtm();

  const [showParticipant, setShowParticipant] = useState(false);
  const [participantForm, setParticipantForm] = useState(defaultParticipantForm);
  const [participantSending, setParticipantSending] = useState(false);
  const [participantSent, setParticipantSent] = useState(false);

  const [showPresentation, setShowPresentation] = useState(false);
  const [presentationForm, setPresentationForm] = useState(defaultPresentationForm);
  const [presentationSending, setPresentationSending] = useState(false);
  const [presentationSent, setPresentationSent] = useState(false);

  async function handleParticipantSubmit(e: React.FormEvent) {
    e.preventDefault();
    setParticipantSending(true);
    try {
      await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: participantForm.name,
          phone: participantForm.phone,
          email: participantForm.email,
          role: participantForm.company,
          source: 'dacha_participant',
          ...utm,
        }),
      });
      reachMetrikaGoal('dacha_participant_form');
    } finally {
      setParticipantSending(false);
      setParticipantSent(true);
    }
  }

  async function handlePresentationSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPresentationSending(true);
    try {
      await fetch(NOTIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: presentationForm.name,
          phone: presentationForm.phone,
          email: presentationForm.email,
          role: `${presentationForm.company}${presentationForm.site ? ' | ' + presentationForm.site : ''}`,
          source: 'dacha_presentation',
          ...utm,
        }),
      });
      reachMetrikaGoal('dacha_presentation_form');
    } finally {
      setPresentationSending(false);
      setPresentationSent(true);
    }
  }

  return (
    <div style={{ backgroundColor: 'var(--eco-beige)' }}>
      <Header />

      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--eco-green-dark) 0%, var(--eco-green) 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <p className="font-montserrat font-700 text-xs tracking-widest mb-3" style={{ color: 'var(--eco-green-light, #a8e063)' }}>
            СПЕЦПРОЕКТ
          </p>
          <h1 className="font-montserrat font-800 text-4xl md:text-6xl text-white mb-6 leading-tight">
            «ДАЧА<br />GreenExpo'2026»
          </h1>
          <p className="font-opensans text-base md:text-xl max-w-2xl" style={{ color: 'rgba(245,240,232,0.9)' }}>
            Живая экспозиция, созданная на основе реального голосования — от архитектуры до растений и деталей
          </p>
        </div>
      </section>

      {/* Описание */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="font-opensans text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--eco-text)' }}>
            Впервые экспозиция формируется не только организаторами и брендами, а реальным выбором будущих посетителей выставки.
            «ДАЧА» — это пространство, которое формируется заранее: посетители голосуют за решения, а на выставке появляется уже реализованный результат.
          </p>

          {/* Как это работает */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
            <h2
              className="font-montserrat font-800 text-2xl md:text-3xl mb-8"
              style={{ color: 'var(--eco-green-dark)' }}
            >
              Как это работает
            </h2>
            <p className="font-opensans text-sm font-600 mb-6" style={{ color: 'var(--eco-text)' }}>4 шага проекта:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-montserrat font-800 text-xl text-white flex-shrink-0"
                    style={{ backgroundColor: 'var(--eco-green)' }}
                  >
                    {step.num}
                  </div>
                  <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Что вы увидите */}
          <div
            className="rounded-2xl p-8 md:p-12 mb-10"
            style={{ backgroundColor: 'var(--eco-green-dark)' }}
          >
            <h2 className="font-montserrat font-800 text-2xl md:text-3xl text-white mb-8">
              Что вы увидите
            </h2>
            <ul className="space-y-4">
              {whatYouSee.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--eco-green-light, #a8e063)', minWidth: '8px' }}
                  />
                  <span className="font-opensans text-base" style={{ color: 'rgba(245,240,232,0.9)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { reachGoal(GOALS.DACHA_PARTICIPANT_OPEN); setShowParticipant(true); setShowPresentation(false); }}
              className="font-montserrat font-700 text-sm tracking-widest px-10 py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--eco-green)', color: 'white' }}
            >
              СТАТЬ УЧАСТНИКОМ
            </button>
            <button
              onClick={() => { reachGoal(GOALS.DACHA_PRESENTATION_OPEN); setShowPresentation(true); setShowParticipant(false); }}
              className="font-montserrat font-700 text-sm tracking-widest px-10 py-4 rounded-full border-2 transition-all hover:opacity-80"
              style={{ borderColor: 'var(--eco-green-dark)', color: 'var(--eco-green-dark)' }}
            >
              ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ
            </button>
          </div>
        </div>
      </section>

      {/* Форма: стать участником */}
      {showParticipant && (
        <section id="participant-form" className="pb-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-montserrat font-800 text-xl mb-6" style={{ color: 'var(--eco-green-dark)' }}>
                Заявка на участие в спецпроекте
              </h2>
              {participantSent ? (
                <div className="text-center py-8">
                  <p className="font-montserrat font-700 text-xl mb-2" style={{ color: 'var(--eco-green)' }}>
                    Заявка отправлена!
                  </p>
                  <p className="font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleParticipantSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Имя и фамилия *"
                    value={participantForm.name}
                    onChange={e => setParticipantForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Компания *"
                    value={participantForm.company}
                    onChange={e => setParticipantForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Телефон *"
                    value={participantForm.phone}
                    onChange={e => setParticipantForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={participantForm.email}
                    onChange={e => setParticipantForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={participantForm.agree}
                      onChange={e => setParticipantForm(f => ({ ...f, agree: e.target.checked }))}
                      className="mt-1 flex-shrink-0"
                    />
                    <span className="font-opensans text-xs" style={{ color: 'var(--eco-text)' }}>
                      Я согласен(а) с{' '}
                      <Link to="/privacy" style={{ color: 'var(--eco-green)' }} className="hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={participantSending}
                    className="w-full font-montserrat font-700 text-sm tracking-widest py-4 rounded-full transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: 'var(--eco-green)', color: 'white' }}
                  >
                    {participantSending ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Форма: получить презентацию */}
      {showPresentation && (
        <section id="presentation-form" className="pb-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-montserrat font-800 text-xl mb-6" style={{ color: 'var(--eco-green-dark)' }}>
                Получить презентацию проекта
              </h2>
              {presentationSent ? (
                <div className="text-center py-8">
                  <p className="font-montserrat font-700 text-xl mb-2" style={{ color: 'var(--eco-green)' }}>
                    Запрос отправлен!
                  </p>
                  <p className="font-opensans text-sm" style={{ color: 'var(--eco-text)' }}>
                    Мы пришлём презентацию на вашу почту.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePresentationSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    placeholder="ФИО *"
                    value={presentationForm.name}
                    onChange={e => setPresentationForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Компания *"
                    value={presentationForm.company}
                    onChange={e => setPresentationForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <input
                    type="text"
                    placeholder="Сайт"
                    value={presentationForm.site}
                    onChange={e => setPresentationForm(f => ({ ...f, site: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Телефон *"
                    value={presentationForm.phone}
                    onChange={e => setPresentationForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={presentationForm.email}
                    onChange={e => setPresentationForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border rounded-xl px-4 py-3 font-opensans text-sm outline-none focus:ring-2"
                    style={{ borderColor: '#d1e8c4', color: 'var(--eco-text)' }}
                  />
                  <button
                    type="submit"
                    disabled={presentationSending}
                    className="w-full font-montserrat font-700 text-sm tracking-widest py-4 rounded-full transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: 'var(--eco-green-dark)', color: 'white' }}
                  >
                    {presentationSending ? 'ОТПРАВЛЯЕМ...' : 'ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}