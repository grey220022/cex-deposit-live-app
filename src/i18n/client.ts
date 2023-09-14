import Config from "./config";
import { createI18nClient } from "next-international/client";

export const { useI18n, useChangeLocale, useCurrentLocale } = createI18nClient(Config);
