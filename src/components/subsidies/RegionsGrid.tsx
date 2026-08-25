import { RegionInfo } from './regionsData';

interface RegionsGridProps {
  regions: RegionInfo[];
}

export default function RegionsGrid({ regions }: RegionsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {regions.map((r) => (
        <div key={r.region} className="bg-white rounded-xl p-4 shadow-sm">
          <p className="font-montserrat font-700 text-sm mb-2" style={{ color: 'var(--eco-green-dark)' }}>
            {r.region}
          </p>
          <p className="font-opensans text-xs leading-relaxed mb-1" style={{ color: 'var(--eco-text)' }}>
            {r.org}
          </p>
          {r.phone && (
            <p className="font-opensans text-xs" style={{ color: 'var(--eco-green)' }}>
              {r.phone}
            </p>
          )}
          {r.site && (
            <a
              href={r.site.startsWith('http') ? r.site : `https://${r.site}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-opensans text-xs underline block mt-1"
              style={{ color: 'var(--eco-green)' }}
            >
              {r.site}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
