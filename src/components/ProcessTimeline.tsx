import React from 'react';
import { PRODUCTION_STEPS, PRE_SALE_PRICE, WHATSAPP_URL } from '../data/content';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenBooking: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 px-6 bg-[#080808] border-t border-[#1A1A1A] text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#181818] border border-[#333] px-3.5 py-1 text-xs font-mono text-[#E07A5F] uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Fluxo de Produção airon studio®</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Como funciona a criação do{' '}
            <span className="text-metallic-terracotta italic font-normal">
              seu site profissional?
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            Zero complicação técnica. Sem reuniões infinitas ou termos difíceis. Nós cuidamos de toda a engenharia e design.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PRODUCTION_STEPS.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-[#222] bg-[#0E0E0E] p-6 flex flex-col justify-between hover:border-[#C86D51]/50 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-[#E07A5F]/40 group-hover:text-[#E07A5F] transition-colors">
                    {item.step}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-[#E07A5F]" />
                </div>

                <h3 className="font-sans text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-[#E07A5F] block mb-3 font-semibold">
                  {item.subtitle}
                </span>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#E07A5F]" />
                <span>Etapa assistida</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 rounded-2xl border border-[#2E201B] bg-gradient-to-r from-[#140F0D] via-[#100D0C] to-[#140F0D] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Pronto para garantir seu lugar na fila de produção?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              O Lote 01 está aberto por apenas {PRE_SALE_PRICE}. As vagas são limitadas pela capacidade artesanal da equipe.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-metallic-terracotta px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg glow-terracotta-subtle transition-all hover:scale-102 active:scale-98 cursor-pointer"
          >
            <span>GARANTIR VAGA NO LOTE 01</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
