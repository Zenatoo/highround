import { getCollection, type CollectionEntry } from 'astro:content';
import { LOCALES, type Locale } from '../i18n/config';

export type Guide = CollectionEntry<'guides'> & {
  lang: Locale;
  game: string;
  map: string;
  slug: string;
};

function parseGuide(entry: CollectionEntry<'guides'>): Guide {
  const [lang, game, map, slug, ...rest] = entry.id.split('/');
  if (!LOCALES.includes(lang as Locale) || !game || !map || !slug || rest.length) {
    throw new Error(
      `Guide "${entry.id}" must live in content/guides/<lang>/<game>/<map>/<slug>.mdx`,
    );
  }
  return { ...entry, lang: lang as Locale, game, map, slug };
}

// Drafts are visible with `pnpm dev` only, never in a published build.
export async function getGuides(): Promise<Guide[]> {
  const all = (await getCollection('guides')).map(parseGuide);
  return import.meta.env.PROD ? all.filter((g) => !g.data.draft) : all;
}

export async function getGames() {
  return (await getCollection('games')).sort((a, b) => a.data.year - b.data.year);
}

export async function getMaps(game?: string) {
  const maps = await getCollection('maps');
  return maps
    .filter((m) => !game || m.data.game === game)
    .sort((a, b) => a.data.order - b.data.order);
}

// Counted from the MDX source so list pages can show it without rendering every guide.
export const stepCount = (guide: Guide) => (guide.body?.match(/<Step\b/g) ?? []).length;

export const otherLocale = (lang: Locale): Locale => (lang === 'fr' ? 'en' : 'fr');

/** Guides of one map, one per slug: the reader's language when it exists, otherwise the original. */
export async function getMapGuides(lang: Locale, game: string, map: string) {
  const guides = (await getGuides()).filter((g) => g.game === game && g.map === map);
  const bySlug = new Map<string, Guide>();
  for (const g of guides) {
    if (g.lang === lang || !bySlug.has(g.slug)) bySlug.set(g.slug, g);
  }
  return [...bySlug.values()].sort((a, b) => a.data.order - b.data.order);
}
