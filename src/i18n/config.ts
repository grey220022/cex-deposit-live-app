/**
 * This is the only place new locale should be added.
 */
export const LOCALES = ["en", "fr"] as const;

/**
 * This is the Locale type.
 */
export type Locale = (typeof LOCALES)[number];

/**
 * This is the File type.
 */
export type File = () => Promise<unknown>;

/**
 * This is the Locale definition type.
 */
export type LocaleDefinition = {
  id: Locale;

  // Metadata
  label: string;

  // File
  file: File;
};

/**
 * Mapping from locales to their respective infos.
 */
export const Locales = {
  en: {
    id: "en",
    label: "English",
    file: () => import("./locales/en.json"),
  },
  fr: {
    id: "fr",
    label: "Français",
    file: () => import("./locales/fr.json"),
  },
} as const satisfies LocaleMap<LocaleDefinition>;

/**
 * Mapping from locales to their respective i18n files.
 */
export const LocalesI18nConfig = {
  en: () => Locales.en.file(),
  fr: () => Locales.fr.file(),
} as const satisfies LocaleMap<File>;

/**
 * The default locale.
 */
export const DEFAULT_LOCALE = Locales.en;

/**
 * Utils types.
 */
export type LocaleMap<T = string> = { [key in Locale]: T };
