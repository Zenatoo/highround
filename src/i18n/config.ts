export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

/** The page language, for components that only get `Astro`. */
export const currentLang = (astro: { currentLocale?: string }) => (astro.currentLocale ?? DEFAULT_LOCALE) as Locale;

// Order matters: it is the tab order on a map page.
export const CATEGORIES = [
  'main-quest',
  'side-quests',
  'power',
  'perks',
  'wonder-weapons',
  'pack-a-punch',
  'buildables',
  'mystery-box',
  'music',
  'strategies',
  'tips',
  'other',
] as const;
export type Category = (typeof CATEGORIES)[number];

export const TIP_TYPES = ['faster', 'tech', 'mistake', 'glitch'] as const;
export type TipType = (typeof TIP_TYPES)[number];
