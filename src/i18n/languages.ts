export interface LanguageOption {
  code: string;
  label: string;
  name: string;
  flag: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'ja', label: 'JA', name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
  { code: 'fr', label: 'FR', name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'de', label: 'DE', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'zh-CN', label: 'ZH-CN', name: 'Simplified Chinese', flag: '🇨🇳', nativeName: '简体中文' },
  { code: 'zh-TW', label: 'ZH-TW', name: 'Traditional Chinese', flag: '🇹🇼', nativeName: '繁體中文' },
  { code: 'pt-PT', label: 'PT-PT', name: 'Portuguese', flag: '🇵🇹', nativeName: 'Português' },
  { code: 'no', label: 'NO', name: 'Norwegian', flag: '🇳🇴', nativeName: 'Norsk' },
  { code: 'th', label: 'TH', name: 'Thai', flag: '🇹🇭', nativeName: 'ไทย' },
  { code: 'es', label: 'ES', name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
];

export const DEFAULT_LANGUAGE = 'en';
