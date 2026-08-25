import Icon from '@/components/ui/icon';
import { ProgramEvent, typeMeta } from './programData';

interface ProgramEventCardProps {
  event: ProgramEvent;
}

export default function ProgramEventCard({ event }: ProgramEventCardProps) {
  const meta = typeMeta[event.type];

  return (
    <div className="card-eco p-5 md:p-6 flex flex-col sm:flex-row gap-4 sm:items-start">
      <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 sm:w-40 flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: meta.bg }}
        >
          <Icon name={meta.icon} size={20} style={{ color: meta.color }} />
        </div>
        <div>
          <p className="font-montserrat font-700 text-sm" style={{ color: 'var(--eco-text)' }}>
            {event.time}
          </p>
          <p className="font-opensans text-xs" style={{ color: meta.color }}>
            {meta.label}
          </p>
        </div>
      </div>

      <div className="flex-1">
        <p className="font-opensans text-sm leading-relaxed" style={{ color: 'var(--eco-text)' }}>
          {event.title}
        </p>
        {event.detail && (
          <p className="font-opensans text-xs leading-relaxed mt-2" style={{ color: '#5a7a5a' }}>
            {event.detail}
          </p>
        )}
        {event.bullets && (
          <ul className="mt-2 space-y-1">
            {event.bullets.map((b) => (
              <li key={b} className="font-opensans text-xs leading-relaxed flex gap-2" style={{ color: '#5a7a5a' }}>
                <span style={{ color: 'var(--eco-green)' }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}