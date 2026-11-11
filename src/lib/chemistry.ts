// Attack of the Radioactive Thing: what each chemical is called, which board shows its diamond,
// and what each reaction takes. From Zenato's own guide (credited in the chemistry guide).
import type { Locale } from '../i18n/config';

type Text = Record<Locale, string>;

const SPAWN: Text = { fr: 'Départ', en: 'Spawn' };
const POWER: Text = { fr: 'Power Station', en: 'Power Station' };
const RV: Text = { fr: 'RV Park', en: 'RV Park' };
const BEACH: Text = { fr: 'Plage', en: 'Beach' };
const GAS: Text = { fr: 'Station-service', en: 'Gas Station' };
const TV: Text = { fr: 'Studio de télé', en: 'TV Studio' };

export const BOARDS = [SPAWN, POWER, RV, BEACH, GAS, TV];

export const PRODUCTS = {
  racingFuel: { name: { fr: 'Carburant (Racing Fuel)', en: 'Racing Fuel' }, board: SPAWN },
  vodka: { name: { fr: 'Vodka', en: 'Vodka' }, board: SPAWN },
  bakingSoda: { name: { fr: 'Bicarbonate (Baking Soda)', en: 'Baking Soda' }, board: SPAWN },
  detergent: { name: { fr: 'Lessive (Detergent)', en: 'Detergent' }, board: SPAWN },
  insectRepellent: { name: { fr: 'Anti-insectes (Insect Repellent)', en: 'Insect Repellent' }, board: SPAWN },
  quarters: { name: { fr: 'Pièces de 25 cents (Quarters)', en: 'Quarters' }, board: POWER },
  glassCleaner: { name: { fr: 'Nettoyant vitres (Glass Cleaner)', en: 'Glass Cleaner' }, board: POWER },
  pennies: { name: { fr: 'Pennies', en: 'Pennies' }, board: POWER },
  nailPolishRemover: { name: { fr: 'Dissolvant (Nail Polish Remover)', en: 'Nail Polish Remover' }, board: POWER },
  drainOpener: { name: { fr: 'Déboucheur (Drain Opener)', en: 'Drain Opener' }, board: POWER },
  ice: { name: { fr: 'Glace (Ice)', en: 'Ice' }, board: RV },
  vinegar: { name: { fr: 'Vinaigre (Vinegar)', en: 'Vinegar' }, board: RV },
  plantFood: { name: { fr: 'Engrais (Plant Food)', en: 'Plant Food' }, board: RV },
  paint: { name: { fr: 'Peinture (Paint)', en: 'Paint' }, board: RV },
  motorOil: { name: { fr: 'Huile moteur (Motor Oil)', en: 'Motor Oil' }, board: BEACH },
  wheelCleaner: { name: { fr: 'Nettoyant jantes (Wheel Cleaner)', en: 'Wheel Cleaner' }, board: BEACH },
  fat: { name: { fr: 'Graisse (Fat)', en: 'Fat' }, board: BEACH },
  formaldehyde: { name: { fr: 'Formaldéhyde', en: 'Formaldehyde' }, board: GAS },
  hexamine: { name: { fr: 'Hexamine', en: 'Hexamine' }, board: GAS },
  phenol: { name: { fr: 'Phénol', en: 'Phenol' }, board: GAS },
  phenolsulfonic: { name: { fr: 'Acide phénolsulfonique', en: 'Phenolsulfonic Acid' }, board: GAS },
  aldehydeSludge: { name: { fr: 'Boue d’aldéhyde (Aldehyde Sludge)', en: 'Aldehyde Sludge' }, board: GAS },
  dinitro: { name: { fr: 'Dinitro', en: 'Dinitro' }, board: GAS },
  acetaldehyde: { name: { fr: 'Acétaldéhyde', en: 'Acetaldehyde' }, board: TV },
  methylbenzene: { name: { fr: 'Méthylbenzène', en: 'Methylbenzene' }, board: TV },
  // Final chemicals go on the bomb, never on the table: their board does not matter.
  tnp: { name: { fr: '1,3,5 tera-nitro-phenol', en: '1,3,5 tera-nitro-phenol' }, board: GAS },
  tnt: { name: { fr: '3-methyl-2,4-di-nitrobenzene', en: '3-methyl-2,4-di-nitrobenzene' }, board: GAS },
  hmx: { name: { fr: 'Octa-hydro-2,5-nitro-3,4,7-para-zokine', en: 'Octa-hydro-2,5-nitro-3,4,7-para-zokine' }, board: GAS },
  petn: { name: { fr: '3,4-di-nitroxy-methyl-propane', en: '3,4-di-nitroxy-methyl-propane' }, board: GAS },
} satisfies Record<string, { name: Text; board: Text }>;

export type ProductKey = keyof typeof PRODUCTS;

/** Where to pick up each base ingredient. Products made at the table come out on the right of the garage. */
export const WHERE: Partial<Record<ProductKey, Text>> = {
  racingFuel: { fr: 'Devant la station-service', en: 'In front of the Gas Station' },
  motorOil: { fr: 'Au sol du garage', en: 'On the garage floor' },
  quarters: { fr: 'Pied-de-biche sur la cabine téléphonique, à droite de la station-service', en: 'Crowbar on the phone booth, right of the Gas Station' },
  vodka: { fr: 'Market, rayon alcool', en: 'Market, liquor aisle' },
  bakingSoda: { fr: 'Market, à droite du rayon du milieu', en: 'Market, right of the middle aisle' },
  detergent: { fr: 'Market, à gauche du rayon de gauche', en: 'Market, left of the left aisle' },
  ice: { fr: 'Market, pied-de-biche sur la machine à glaçons', en: 'Market, crowbar on the ice machine' },
  vinegar: { fr: 'Market, table de l’arrière-salle', en: 'Market, back room table' },
  glassCleaner: { fr: 'Market, devant du rayon de droite', en: 'Market, front of the right aisle' },
  wheelCleaner: { fr: 'Market, à gauche du rayon du milieu', en: 'Market, left of the middle aisle' },
  fat: { fr: 'Congélateur du Market : frappe la viande suspendue la plus à gauche (le hachoir marche)', en: 'Market freezer: hit the leftmost hanging meat (the Cleaver works)' },
  pennies: { fr: 'Market, pied-de-biche sur la caisse enregistreuse', en: 'Market, crowbar on the cash register' },
  insectRepellent: { fr: 'Départ, table du couloir à droite d’Up ’N Atoms', en: 'Spawn, hallway table right of Up ’N Atoms' },
  plantFood: { fr: 'Snack Shack, à gauche du bâtiment', en: 'Snack Shack, left of the building' },
  paint: { fr: 'Chemin de la TV Station, derrière la cabane près de Racin’ Stripes', en: 'Path to the TV Station, behind the shack near Racin’ Stripes' },
  nailPolishRemover: { fr: 'Bureau du motel, sur le bureau', en: 'Motel office, on the desk' },
  drainOpener: { fr: 'Toilettes du RV Park, sur une cuvette', en: 'RV Park restrooms, on a toilet' },
};

// Anchor of the calculator, linked from the top of the guide and from the main Easter Egg.
export const CALC_ID = { fr: 'calculatrice', en: 'calculator' } as const;

/** Shared by the recipe picker and the calculator, so choosing a recipe in one selects it in the other. */
export const CHEM_STORE = 'highround:chemistry';
export const CHEM_EVENT = 'highround:chemistry-final';

/** What each reaction takes, by the chemical it makes. */
export const REACTIONS: Partial<Record<ProductKey, ProductKey[]>> = {
  formaldehyde: ['racingFuel', 'quarters'],
  acetaldehyde: ['vodka', 'pennies'],
  aldehydeSludge: ['formaldehyde', 'acetaldehyde', 'detergent'],
  petn: ['aldehydeSludge', 'nailPolishRemover'],
  phenol: ['insectRepellent', 'motorOil', 'wheelCleaner'],
  phenolsulfonic: ['phenol', 'drainOpener'],
  tnp: ['phenolsulfonic', 'detergent'],
  hexamine: ['formaldehyde', 'glassCleaner'],
  hmx: ['hexamine', 'vinegar', 'detergent', 'plantFood'],
  methylbenzene: ['paint', 'detergent', 'drainOpener'],
  dinitro: ['detergent', 'bakingSoda', 'vinegar', 'methylbenzene'],
  tnt: ['dinitro', 'racingFuel'],
};

/** The four chemicals the bomb can ask for. */
export const FINALS: ProductKey[] = ['tnp', 'tnt', 'hmx', 'petn'];

/** The possible values of O. */
export const O_VALUES = [2, 4, 8, 9, 11, 15];

/** The reactions that make a chemical, in the order they must be run. */
export function chainOf(product: ProductKey): ProductKey[] {
  const order: ProductKey[] = [];
  const visit = (key: ProductKey) => {
    const inputs = REACTIONS[key];
    if (!inputs || order.includes(key)) return;
    inputs.forEach(visit);
    order.push(key);
  };
  visit(product);
  return order;
}

/** Every chemical put on the table to make a final one: each needs its diamond read once. */
export function ingredientsOf(product: ProductKey): ProductKey[] {
  const all = new Set<ProductKey>();
  for (const step of chainOf(product)) for (const input of REACTIONS[step] ?? []) all.add(input);
  return [...all];
}

/** The keypad number of one reaction: both numbers of every diamond on the table, added up, minus O. */
export function reactionNumber(diamonds: [number, number][], o: number): number {
  return diamonds.reduce((sum, [left, top]) => sum + left + top, 0) - o;
}
