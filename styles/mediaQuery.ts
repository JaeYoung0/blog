const breakpoints = {
  XSmall: 320,
  small: 600,
  large: 900,
  XLarge: 1200,
};

type BP = keyof typeof breakpoints;

export const SCREEN_BREAKPOINT = (name: BP) =>
  `@media (min-width: ${breakpoints[name]}px)`;
