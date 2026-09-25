import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageOption } from '../i18n/languages';

interface LanguageDropdownProps {
  className?: string;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ className = '' }) => {
  const { currentLanguage, setLanguage, currentLanguageMeta, languages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (lang: LanguageOption) => {
    setLanguage(lang.code);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button: 🇬🇧 EN ▼ (Styled to exact reference) */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language. Current: ${currentLanguageMeta.name}`}
        className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#080808] hover:text-black bg-white hover:bg-[#F9F9F9] active:bg-[#F0F0F0] border border-[#DCDCDC] rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B8661B] focus-visible:outline-none select-none"
      >
        <span className="text-sm leading-none" role="img" aria-label={currentLanguageMeta.name}>
          {currentLanguageMeta.flag}
        </span>
        <span className="font-mono tracking-tight font-bold text-xs text-[#080808]">
          {currentLanguageMeta.label}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#4A4A4A] stroke-[2] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#B8661B]' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu: Premium White Card per Reference */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 mt-2 w-64 max-h-[85vh] overflow-y-auto rounded-[16px] bg-white text-[#080808] border border-[#E5E5E5] shadow-[0_12px_36px_rgba(0,0,0,0.08)] py-2 z-50 focus:outline-none animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {/* Header */}
          <div className="px-3.5 py-2 border-b border-[#E5E5E5] mb-1 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[2px] text-[#B8661B]">
              {t.nav.language_selector}
            </span>
            <span className="text-[10px] font-mono text-[#888888]">
              {languages.length} Languages
            </span>
          </div>

          <div className="py-1 px-1 space-y-0.5">
            {languages.map((lang) => {
              const isSelected = lang.code === currentLanguage;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(lang)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs rounded-[10px] transition-colors cursor-pointer group ${
                    isSelected
                      ? 'bg-[#FAF5EF] text-[#B8661B] font-bold'
                      : 'text-[#4A4A4A] hover:bg-[#F7F7F7] hover:text-[#080808]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-base leading-none" role="img" aria-hidden="true">
                      {lang.flag}
                    </span>
                    <span className="font-mono font-bold tracking-tight text-[11px] text-[#080808]">
                      {lang.label}
                    </span>
                    <span className="text-[#666666] text-[11px] truncate">
                      — {lang.name}
                    </span>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#B8661B] stroke-[2.5] shrink-0 ml-2" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
