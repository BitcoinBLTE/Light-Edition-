import React from 'react';
import { ExternalLink, ShieldAlert, MessageSquare, CheckCircle2 } from 'lucide-react';
import { TOKEN_CONFIG } from '../config/tokenConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { InstagramIcon, XTwitterIcon, GithubIcon } from './PlatformIcons';

export const CommunitySection: React.FC = () => {
  const { t } = useLanguage();
  // Strict filter: only display platforms that have real verified links
  const activeSocials = TOKEN_CONFIG.socials.filter((s) => s.url !== null);

  const getDesc = (id: string) => {
    if (id === 'twitter') return t.community.twitter_desc;
    if (id === 'github') return t.community.github_desc;
    if (id === 'instagram') return t.community.instagram_desc;
    return t.community.generic_desc;
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-[3.5px] uppercase text-[#B8661B] mb-3.5 flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8661B] shrink-0" aria-hidden="true" />
            <span>{t.community.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-[900] text-[#080808] font-display tracking-tight text-balance leading-[1.15]">
            {t.community.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-[450] leading-[1.8] text-balance">
            {t.community.subtitle}
          </p>
        </div>

        {/* Active Real Channels - 50% Reduced Height Compact Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeSocials.map((social) => {
            const isTwitter = social.id === 'twitter';
            const isGithub = social.id === 'github';
            const isInstagram = social.id === 'instagram';

            return (
              <a
                key={social.id}
                href={social.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FCFCFC] rounded-[22px] sm:rounded-[26px] p-4.5 sm:p-5 border border-[#E5E5E5] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#D0D0D0] hover:shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between group min-h-[142px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-[11px] bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center text-[#080808] group-hover:bg-[#FAF5EF] group-hover:text-[#B8661B] group-hover:border-[#E9C9A5] group-hover:scale-105 transition-all shadow-2xs shrink-0">
                        {isTwitter && <XTwitterIcon size={18} />}
                        {isGithub && <GithubIcon size={18} />}
                        {isInstagram && <InstagramIcon size={18} className="text-[#080808] group-hover:text-[#B8661B]" />}
                        {!isTwitter && !isGithub && !isInstagram && <MessageSquare className="w-4 h-4" />}
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-[800] text-[#080808] font-display truncate leading-tight">
                          {social.label}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#166534]">
                          <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                          <span>{t.community.verified_badge}</span>
                        </span>
                      </div>
                    </div>

                    <ExternalLink className="w-4 h-4 text-[#888888] group-hover:text-[#B8661B] transition-colors stroke-[2] shrink-0" />
                  </div>

                  <p className="text-xs text-[#4A4A4A] font-[450] leading-snug line-clamp-2">
                    {getDesc(social.id)}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                  <span>{t.community.official_channel}</span>
                  <span className="text-[#B8661B] font-bold group-hover:underline">Open Link →</span>
                </div>
              </a>
            );
          })}

          {/* Verification Protocol Card - Matching Compact 50% Height */}
          <div className="bg-[#FCFCFC] rounded-[22px] sm:rounded-[26px] p-4.5 sm:p-5 border border-[#E5E5E5] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[142px]">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-[11px] bg-[#FAF5EF] border border-[#E9C9A5] flex items-center justify-center text-[#B8661B] shrink-0 shadow-2xs">
                  <ShieldAlert className="w-4.5 h-4.5 stroke-[2]" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-[800] text-[#080808] font-display leading-tight">
                    {t.community.policy_title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#B8661B] uppercase tracking-wider">
                    Security Advisory
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#4A4A4A] font-[450] leading-snug line-clamp-2">
                {t.community.policy_desc}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#E5E5E5] text-[11px] font-mono text-[#888888] truncate">
              {t.community.policy_footer}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
