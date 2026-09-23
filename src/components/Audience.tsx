import React from 'react';
import { CheckCircle2, UserCheck } from 'lucide-react';
import { AUDIENCE_PROFILES } from '../data/content';

export const Audience: React.FC = () => {
  return (
    <section className="bg-[#080808] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main Headline - Clean without category tag above */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Para quem é este{' '}
            <span className="text-metallic-terracotta italic font-normal">
              produto?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Desenvolvido especificamente para profissionais e especialistas que vendem conhecimento, serviços especializados ou autoridade pessoal.
          </p>
        </div>

        {/* Audience Profiles List */}
        <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {AUDIENCE_PROFILES.map((profile, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-[#1E1E1E] bg-[#121212] p-4 transition-all hover:border-[#C86D51]/50 hover:bg-[#161210]"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E1410] text-[#E07A5F] border border-[#C86D51]/30">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium text-neutral-200">
                  {profile}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1C1C1C] text-center text-xs text-neutral-400 font-mono">
            Se o seu cliente pesquisa sobre sua reputação antes de fechar com você, seu negócio precisa desta presença online.
          </div>
        </div>
      </div>
    </section>
  );
};
