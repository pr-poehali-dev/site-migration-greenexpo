export type ProgramEventType = 'tasting' | 'workshop' | 'lecture' | 'talk';

export interface ProgramEvent {
  time: string;
  title: string;
  type: ProgramEventType;
  detail?: string;
}

export interface ProgramDay {
  id: string;
  date: string;
  label: string;
  events: ProgramEvent[];
}

export const programDays: ProgramDay[] = [
  {
    id: 'day1',
    date: '7 сентября',
    label: 'День 1',
    events: [
      { time: '11:00–12:00', title: 'Дегустация ягод «Питомкино» + рассказ о сортах', type: 'tasting' },
      { time: '12:00–13:00', title: 'Светлана Чижова', type: 'talk' },
      { time: '13:00–14:00', title: 'Лекция «Биологическая защита растений» — Дмитрий, ЦЗР', type: 'lecture' },
      { time: '14:00–15:00', title: 'МК: заселение энтомофагов, ошибки заселения, проверка энтомофагов — Дмитрий, ЦЗР + Розыгрыш', type: 'workshop' },
      { time: '15:00–16:00', title: 'МК: обрезка малины — «Питомкино»', type: 'workshop' },
      { time: '16:00–17:00', title: 'Хвойные для средней полосы — Nikoma', type: 'lecture' },
    ],
  },
  {
    id: 'day2',
    date: '8 сентября',
    label: 'День 2',
    events: [
      { time: '11:00–12:00', title: 'Дегустация ягод «Питомкино» + рассказ о сортах', type: 'tasting' },
      { time: '12:00–13:30', title: 'Лекция «Как вырастить эко-ягоды» + МК по пересадке ягодных культур — «Питомкино»', type: 'workshop' },
      {
        time: '13:30–15:00',
        title: '«Планта Плюс»: живая почва — основа здорового растения + МК «Создаём идеальную почву для растений»',
        type: 'workshop',
        detail: 'Рассказываем про живую составляющую почвы, какие проблемы и решения для разной почвы на конкретных примерах. На мастер-классе создаём идеальную почву для растений и пересаживаем растение из покупного горшка в новый улучшенный субстрат. Дарим растение участникам.',
      },
      { time: '15:00–16:00', title: 'Как создать свой сад — Nikoma', type: 'lecture' },
      { time: '16:00–16:30', title: 'Дегустация винограда с рассказом о сортах — «Виноград Ульяновск»', type: 'tasting' },
      { time: '16:30–18:00', title: 'МК: посадка винограда — «Виноград Ульяновск»', type: 'workshop' },
    ],
  },
  {
    id: 'day3',
    date: '9 сентября',
    label: 'День 3',
    events: [
      { time: '11:00–12:00', title: 'Дегустация ягод «Питомкино» + рассказ о сортах', type: 'tasting' },
      { time: '12:00–13:00', title: 'МК: обрезка гортензий — «Питомкино»', type: 'workshop' },
      { time: '13:00–14:30', title: 'МК по прививке хвойных — Nikoma', type: 'workshop' },
    ],
  },
];

export const typeMeta: Record<ProgramEventType, { label: string; bg: string; color: string; icon: string }> = {
  tasting: { label: 'Дегустация', bg: 'rgba(255,165,0,0.12)', color: '#c07a00', icon: 'UtensilsCrossed' },
  workshop: { label: 'Мастер-класс', bg: 'rgba(74,158,74,0.12)', color: 'var(--eco-green)', icon: 'Hammer' },
  lecture: { label: 'Лекция', bg: 'rgba(45,106,45,0.12)', color: 'var(--eco-green-dark)', icon: 'BookOpen' },
  talk: { label: 'Выступление', bg: 'rgba(100,149,237,0.12)', color: '#4a6fa5', icon: 'Mic' },
};
