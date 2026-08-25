import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { programDays } from './programData';
import ProgramEventCard from './ProgramEventCard';

export default function ProgramSchedule() {
  const [activeDay, setActiveDay] = useState(programDays[0].id);
  const current = programDays.find((d) => d.id === activeDay) ?? programDays[0];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {programDays.map((day) => {
            const isActive = day.id === activeDay;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className="font-montserrat font-700 text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2"
                style={
                  isActive
                    ? { backgroundColor: 'var(--eco-green)', color: 'white' }
                    : { backgroundColor: 'white', color: 'var(--eco-text)', border: '1px solid var(--eco-beige-dark)' }
                }
              >
                <Icon name="Calendar" size={16} />
                {day.label} · {day.date}
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          {current.events.map((event, idx) => (
            <ProgramEventCard key={`${current.id}-${idx}`} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
