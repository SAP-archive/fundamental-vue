export const Breakpoints = {
  XSmall: "(max-width: 599.99px)",
  Small: "(min-width: 600px) and (max-width: 959.99px)",
  Medium: "(min-width: 960px) and (max-width: 1279.99px)",
  Large: "(min-width: 1280px) and (max-width: 1919.99px)",
  XLarge: "(min-width: 1920px)",

  Handset:
    "(max-width: 599.99px) and (orientation: portrait), " +
    "(max-width: 959.99px) and (orientation: landscape)",
  Tablet:
    "(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), " +
    "(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",
  Web:
    "(min-width: 840px) and (orientation: portrait), " +
    "(min-width: 1280px) and (orientation: landscape)",

  HandsetPortrait: "(max-width: 599.99px) and (orientation: portrait)",
  TabletPortrait: "(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",

  HandsetLandscape: "(max-width: 959.99px) and (orientation: landscape)",
  TabletLandscape: "(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
};
