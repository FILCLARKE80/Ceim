// One signature colour per career category, used on cards, filters and hero.
// `hue` drives inline accents (flow chart / dots); the class strings style chips.
export interface CategoryStyle {
  /** solid accent colour (hex) for dots, bars, inline styles */
  accent: string
  /** soft tinted chip: bg + text, with dark variants */
  chip: string
  /** icon tile background + text */
  tile: string
  /** left accent bar colour class */
  bar: string
}

export const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  'Health & Medicine': {
    accent: '#e5484d',
    chip: 'bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300',
    tile: 'bg-red-50 dark:bg-red-500/15',
    bar: 'bg-red-400',
  },
  Technology: {
    accent: '#0071e3',
    chip: 'bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300',
    tile: 'bg-blue-50 dark:bg-blue-500/15',
    bar: 'bg-blue-400',
  },
  Engineering: {
    accent: '#f5a623',
    chip: 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    tile: 'bg-amber-50 dark:bg-amber-500/15',
    bar: 'bg-amber-400',
  },
  'Science & Environment': {
    accent: '#12a150',
    chip: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
    tile: 'bg-emerald-50 dark:bg-emerald-500/15',
    bar: 'bg-emerald-400',
  },
  'Business & Finance': {
    accent: '#7c5cff',
    chip: 'bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
    tile: 'bg-violet-50 dark:bg-violet-500/15',
    bar: 'bg-violet-400',
  },
  'Law & Society': {
    accent: '#0d9aa8',
    chip: 'bg-teal-50 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300',
    tile: 'bg-teal-50 dark:bg-teal-500/15',
    bar: 'bg-teal-400',
  },
  Education: {
    accent: '#e0349b',
    chip: 'bg-pink-50 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300',
    tile: 'bg-pink-50 dark:bg-pink-500/15',
    bar: 'bg-pink-400',
  },
  'Arts & Design': {
    accent: '#d9730d',
    chip: 'bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300',
    tile: 'bg-orange-50 dark:bg-orange-500/15',
    bar: 'bg-orange-400',
  },
}

const FALLBACK: CategoryStyle = {
  accent: '#6e6e73',
  chip: 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300',
  tile: 'bg-slate-100 dark:bg-white/10',
  bar: 'bg-slate-400',
}

export function categoryStyle(category: string): CategoryStyle {
  return CATEGORY_STYLES[category] ?? FALLBACK
}
