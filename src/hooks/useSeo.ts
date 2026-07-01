import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
}

function upsertMeta(selector: string, attr: string, attrVal: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  const prev = el?.getAttribute('content') || '';
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return { el, prev };
}

export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const description_ = upsertMeta('meta[name="description"]', 'name', 'description', description);
    const ogTitle = upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    const ogDesc = upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);

    return () => {
      document.title = prevTitle;
      description_.el?.setAttribute('content', description_.prev);
      ogTitle.el?.setAttribute('content', ogTitle.prev);
      ogDesc.el?.setAttribute('content', ogDesc.prev);
    };
  }, [title, description]);
}
