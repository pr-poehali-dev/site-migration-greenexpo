import { useMemo } from 'react';

export interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

export function useUtm(): UtmParams {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const stored = (() => {
      try {
        return JSON.parse(sessionStorage.getItem('utm_params') || '{}');
      } catch (_e) {
        return {};
      }
    })();

    const fresh: Partial<UtmParams> = {};
    const keys: (keyof UtmParams)[] = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    keys.forEach((key) => {
      if (params.get(key)) fresh[key] = params.get(key)!;
    });

    if (Object.keys(fresh).length > 0) {
      try {
        sessionStorage.setItem('utm_params', JSON.stringify({ ...stored, ...fresh }));
      } catch (_e) {
        // ignore
      }
    }

    const merged = { ...stored, ...fresh };

    return {
      utm_source: merged.utm_source || '',
      utm_medium: merged.utm_medium || '',
      utm_campaign: merged.utm_campaign || '',
      utm_term: merged.utm_term || '',
      utm_content: merged.utm_content || '',
    };
  }, []);
}