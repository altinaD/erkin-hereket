export const i18n = {
  defaultLocale: "en",
  locales: ["ru", "tk", "en"],
  localePrefix: 'as-needed',
} as const;

export type Locale = (typeof i18n)["locales"][number];