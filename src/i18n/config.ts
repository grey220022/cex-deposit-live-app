/**
 * @dev Add locales here.
 */
export const LOCALES = ["en", "fr"] as const;

export type Locale = (typeof LOCALES)[number];
export type LocaleInfo = { file: File };
export type LocaleMap<T = string> = { [key in Locale]: T };

export const Locales = {
  en: { file: () => import("./locales/en.json") },
  fr: { file: () => import("./locales/fr.json") },
} as const satisfies LocaleMap<LocaleInfo>;

export const DEFAULT_LOCALE: Locale = "en";

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
export type File = () => Promise<unknown>;
export type LocaleSchema = (typeof Locales)[typeof DEFAULT_LOCALE]["file"];
