const breakpoints = {
  small: 640,
  large: 1024,
};

type BP = keyof typeof breakpoints;

export const SCREEN_BREAKPOINT = (name: BP) =>
  `@media (min-width: ${breakpoints[name]}px)`;
