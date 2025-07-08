import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'tk'],
  defaultLocale: 'en',
  localePrefix: 'always', 
});

export const config = {
  matcher: ['/', '/(en|ru|tk)/:path*'], 
};
