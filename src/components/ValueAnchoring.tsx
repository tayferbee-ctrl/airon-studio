import React from 'react';
import { Check, X, ArrowRight, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { VALUE_ANCHORING, WHATSAPP_URL, PRE_SALE_PRICE } from '../data/content';

export const ValueAnchoring: React.FC = () => {
  return (
    <section id="comparativo-valor" className="bg-[#080808] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main Headline - Clean without category tag above */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Ancoragem de valor:{' '}
            <span className="text-metallic-terracotta italic font-normal">
              A conta fecha no primeiro cliente.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Se você já cotou um site com agências tradicionais, sabe o custo real do mercado. Veja a comparação direta:
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Agência Tradicional */}
          <div className="rounded-2xl border border-[#222] bg-[#0E0E0E] p-8 flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#1E1E1E]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                  MÉTODO TRADICIONAL
                </span>
                <span className="text-xs text-neutral-500">Agências & Freelancers</span>
              </div>

              <div className="my-6">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-neutral-300">
                  {VALUE_ANCHORING.agencyPrice}
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  + mensalidades ocultas de manutenção
                </div>
              </div>

              <div className="space-y-4 text-sm text-neutral-400">
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F1414] text-red-400 border border-red-950 mt-0.5">
                    <X className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>{VALUE_ANCHORING.agencyTime} e reuniões sem fim</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F1414] text-red-400 border border-red-950 mt-0.5">
                    <X className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>Termos técnicos confusos e plataformas pesadas</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F1414] text-red-400 border border-red-950 mt-0.5">
                    <X className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>Meses perdendo pacientes para concorrentes no Google</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C1C1C] text-xs text-neutral-500 text-center font-mono">
              Custo elevado e alto atrito para profissionais liberais
            </div>
          </div>

          {/* Card 2: Pré-Venda Site Profissional */}
          <div className="relative rounded-2xl border-2 border-[#C86D51] bg-[#120E0C] p-8 flex flex-col justify-between shadow-2xl glow-terracotta ring-1 ring-[#E07A5F]/40">
            <div className="absolute -top-3.5 right-6 rounded-full bg-metallic-terracotta px-3.5 py-0.5 text-[10px] font-bold text-white uppercase font-mono shadow-md">
              OPORTUNIDADE DE PRÉ-VENDA
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A1E18]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E07A5F]">
                  SITE PROFISSIONAL
                </span>
                <span className="text-xs font-mono font-bold text-[#E07A5F]">Lote 01</span>
              </div>

              <div className="my-6">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-white font-mono">
                  {VALUE_ANCHORING.preSalePrice}
                </div>
                <div className="text-xs font-medium text-[#E07A5F] font-mono mt-1">
                  ou {VALUE_ANCHORING.preSaleInstallment}
                </div>
              </div>

              <div className="space-y-4 text-sm text-neutral-200">
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#201511] text-[#E07A5F] border border-[#C86D51]/40 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>{VALUE_ANCHORING.preSaleTime} e sem burocracia</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#201511] text-[#E07A5F] border border-[#C86D51]/40 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>Site 100% responsivo para smartphone e computador</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#201511] text-[#E07A5F] border border-[#C86D51]/40 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>Botão direto para o seu WhatsApp e otimizado para o Google</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#261A14]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-metallic-terracotta px-5 py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>Aproveitar Condição de Pré-Venda</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ROI math callout */}
        <div className="mt-12 rounded-xl border border-[#222] bg-[#0E0E0E] p-6 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base">
            <TrendingUp className="h-5 w-5 text-[#E07A5F]" />
            <span>Pense rápido: quanto vale 1 único paciente ou cliente na sua clínica?</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Se o seu site trouxer apenas um atendimento no mês — seja um clareamento, uma harmonização, uma consultoria ou uma contratação —, ele já se pagou por anos. Deixar de ter um site é o maior custo invisível do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};
