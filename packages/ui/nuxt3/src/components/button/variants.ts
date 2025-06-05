export const defaultVariant = 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90';
export const destructiveVariant =
  'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60';
export const outlineVariant =
  'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50';
export const secondaryVariant =
  'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80';
export const ghostVariant = 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50';
export const linkVariant = 'text-primary underline-offset-4 hover:underline';

export const defaultSize = 'h-9 px-4 py-2 has-[>svg]:px-3';
export const smSize = 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5';
export const lgSize = 'h-10 rounded-md px-6 has-[>svg]:px-4';
export const iconSize = 'size-9';

export const __tailwind_safelist__ = [
  defaultVariant,
  destructiveVariant,
  outlineVariant,
  secondaryVariant,
  ghostVariant,
  linkVariant,
  defaultSize,
  smSize,
  lgSize,
  iconSize,
];
