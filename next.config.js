module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'nl-NL'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'fr',
    localeDetection: true,
  },
};
