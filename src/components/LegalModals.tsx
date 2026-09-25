import React from 'react';
import { ShieldCheck, Scale } from 'lucide-react';
import { DraggableModal } from './DraggableModal';
import { useLanguage } from '../i18n/LanguageContext';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { t } = useLanguage();

  if (!type) return null;

  const isTerms = type === 'terms';
  const leg = t.modals.legal;

  return (
    <DraggableModal
      isOpen={type !== null}
      onClose={onClose}
      title={isTerms ? leg.terms_title : leg.privacy_title}
      subtitle={isTerms ? leg.terms_sub : leg.privacy_sub}
      icon={isTerms ? <Scale className="w-5 h-5 text-[#B8661B]" /> : <ShieldCheck className="w-5 h-5 text-[#B8661B]" />}
      maxWidthClass="max-w-2xl"
      maxHeightClass="max-h-[85vh]"
      ariaLabelledBy="legal-modal-title"
      footer={
        <div className="px-6 py-4 bg-[#FCFCFC] border-t border-[#E5E5E5] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#111111] hover:bg-[#B8661B] rounded-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer"
          >
            {t.common.acknowledge}
          </button>
        </div>
      }
    >
      <div className="p-6 space-y-5 text-xs sm:text-sm text-[#4A4A4A] leading-[1.8]">
        {isTerms ? (
          <>
            {leg.terms_sections.map((sec, idx) => (
              <div key={idx} className="space-y-1.5 p-4 rounded-[16px] bg-[#FCFCFC] border border-[#E5E5E5]">
                <p className="font-bold text-[#080808] font-display text-sm">{sec.title}</p>
                <p className="text-[#4A4A4A] font-[450] leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {leg.privacy_sections.map((sec, idx) => (
              <div key={idx} className="space-y-1.5 p-4 rounded-[16px] bg-[#FCFCFC] border border-[#E5E5E5]">
                <p className="font-bold text-[#080808] font-display text-sm">{sec.title}</p>
                <p className="text-[#4A4A4A] font-[450] leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </DraggableModal>
  );
};
