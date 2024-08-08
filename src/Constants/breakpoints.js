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

export const REM_SIZES = {
  MOBILE_SMALL: "0.8rem",
  MOBILE_MEDIUM: "0.9rem",
  MOBILE_LARGE: "1rem",
  SMALL_TABLET: "1.1rem",
  TABLET: "1.2rem",
  WEB: "1.3rem",
  DESKTOP: "1.4rem",
  LARGE_DESKTOP: "1.5rem",
  XL_DESKTOP: "1.6rem",
  XXL_DESKTOP: "1.7rem",
};
