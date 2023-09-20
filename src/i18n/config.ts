/**
 * Add locales here.
 */
export const LOCALES = ["en", "fr"] as const;

/**
 * Default Locale.
 */
export const DEFAULT_LOCALE: Locale = "fr";

/**
 * Locale Definition.
 */
export type LocaleDefinition = {
  // Id
  id: Locale;

  // File
  file: File;
};

/**
 * Mapping from locales to their respective infos.
 */
export const Locales = {
  en: {
    id: "en",
    file: () => import("./locales/en.json"),
  },
  fr: {
    id: "fr",
    file: () => import("./locales/fr.json"),
  },
} as const satisfies LocaleMap<LocaleDefinition>;

/**
 * Mapping from locales to their respective i18n files.
 */
export const LocalesI18nConfig = Object.values(LOCALES).reduce(
  (acc, locale) => ({ ...acc, [locale]: Locales[locale].file }),
  {} as LocaleMap<LocaleSchema>,
);

/**
 * Utils type.
 */
export type Locale = (typeof LOCALES)[number];
export type LocaleMap<T = string> = { [key in Locale]: T };
export type File = () => Promise<unknown>;
export type LocaleSchema = (typeof Locales)[typeof DEFAULT_LOCALE]["file"];
