import type { Category, TipType } from '../i18n/config';

// Lucide icons used by the site (see src/components/Icon.astro).
export const ICONS = [
  'arrow-left',
  'badge-check',
  'box',
  'calculator',
  'check',
  'chevron-right',
  'clock',
  'crosshair',
  'cup-soda',
  'external-link',
  'flag',
  'gamepad-2',
  'gauge',
  'key-round',
  'lightbulb',
  'list-checks',
  'map',
  'menu',
  'music',
  'play',
  'rotate-ccw',
  'search',
  'settings',
  'sparkles',
  'swords',
  'target',
  'trophy',
  'user',
  'users',
  'wrench',
  'x',
  'zap',
  'triangle-alert',
  'bug',
  'languages',
] as const;
export type IconName = (typeof ICONS)[number];

export const categoryIcon: Record<Category, IconName> = {
  'main-quest': 'trophy',
  'side-quests': 'key-round',
  power: 'zap',
  perks: 'cup-soda',
  'wonder-weapons': 'crosshair',
  'pack-a-punch': 'sparkles',
  buildables: 'wrench',
  'mystery-box': 'box',
  music: 'music',
  strategies: 'target',
  tips: 'lightbulb',
  other: 'map',
};

export const tipIcon: Record<TipType, IconName> = {
  faster: 'zap',
  tech: 'swords',
  mistake: 'triangle-alert',
  glitch: 'bug',
};
