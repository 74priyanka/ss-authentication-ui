export const LAYOUT_MEDIA_QUERY_BREAKPOINTS = {
  MOBILE_SMALL: "(max-width: 319px)",
  MOBILE_MEDIUM: "(min-width: 320px) and (max-width: 479px)",
  MOBILE_LARGE: "(min-width: 480px) and (max-width: 599px)",
  SMALL_TABLET: "(min-width: 600px) and (max-width: 767px)",
  TABLET: "(min-width: 768px) and (max-width: 1023px)",
  WEB: "(min-width: 1024px) and (max-width: 1279px)",
  DESKTOP: "(min-width: 1280px) and (max-width: 1439px)",
  LARGE_DESKTOP: "(min-width: 1440px) and (max-width: 1511px)",
  XL_DESKTOP: "(min-width: 1512px) and (max-width: 1727px)",
  XXL_DESKTOP: "(min-width: 1728px)",
};

export const mediaQuery = (breakpoint) =>
  `@media only screen and ${breakpoint}`;
