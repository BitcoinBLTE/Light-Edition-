import { TranslationSchema } from './types';
import { en } from './locales/en';
import { ja } from './locales/ja';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { zhCN } from './locales/zh-CN';
import { zhTW } from './locales/zh-TW';
import { ptPT } from './locales/pt-PT';
import { no } from './locales/no';
import { th } from './locales/th';
import { es } from './locales/es';

export type TranslationKeys = TranslationSchema;

export const translations: Record<string, TranslationSchema> = {
  en,
  ja,
  fr,
  de,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'pt-PT': ptPT,
  no,
  th,
  es,
};
