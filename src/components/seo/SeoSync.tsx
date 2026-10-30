import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  pageSeo,
} from '../../data/seo';

function setMetaContent(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * Keeps document title, description, canonical, and Open Graph / Twitter
 * tags in sync with the current route. Render once inside the Router.
 */
export function SeoSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = pageSeo[pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      path: pathname,
    };
    const url = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;

    document.title = seo.title;
    setMetaContent('name', 'description', seo.description);
    setCanonical(url);

    setMetaContent('property', 'og:title', seo.title);
    setMetaContent('property', 'og:description', seo.description);
    setMetaContent('property', 'og:url', url);
    setMetaContent('name', 'twitter:title', seo.title);
    setMetaContent('name', 'twitter:description', seo.description);
  }, [pathname]);

  return null;
}
