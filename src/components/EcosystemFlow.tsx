import React from 'react';
import { Instagram, Globe, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export const EcosystemFlow: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main Headline - Clean without category tag above */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            O ecossistema definitivo para quem vende{' '}
            <span className="text-metallic-terracotta italic font-normal">
              serviços e conhecimento.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Você não precisa abandonar nenhuma ferramenta. Você só precisa colocar cada peça no lugar certo do seu funil.
          </p>
        </div>

        {/* 3 Steps in Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1: Instagram */}
          <div className="rounded-2xl border border-[#222] bg-[#0E0E0E] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818] border border-[#2A2A2A] text-neutral-300">
                  <Instagram className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-bold text-neutral-500">
                  ETAPA 01
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                O Instagram
              </h3>
              <p className="text-xs font-mono text-[#E07A5F] uppercase tracking-wider mb-4">
                Atrai a Atenção
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Excelente para criar conexão rápida, mostrar bastidores e despertar curiosidade. Mas frágil para sustentar uma decisão de alto valor.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center text-xs text-neutral-500 font-mono">
              <span>Papel: Topo do Funil</span>
            </div>
          </div>

          {/* Step 2: Site - Highlight with Metallic Terracotta Glow */}
          <div className="relative rounded-2xl border-2 border-[#C86D51] bg-[#140F0D] p-8 flex flex-col justify-between shadow-2xl glow-terracotta ring-1 ring-[#E07A5F]/40">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-metallic-terracotta px-4 py-0.5 text-[10px] font-bold text-white uppercase font-mono shadow-md">
              A PEÇA QUE FALTA HOJE
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-metallic-terracotta text-white shadow-md">
                  <Globe className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-bold text-[#E07A5F]">
                  ETAPA 02
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                O Site
              </h3>
              <p className="text-xs font-mono text-[#E07A5F] uppercase tracking-wider mb-4">
                Constrói a Autoridade
              </p>

              <p className="text-sm text-neutral-200 leading-relaxed">
                A estrutura profissional onde sua trajetória, especialidades e credenciais são apresentadas com máxima elegância e sem distrações externas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#261A14] flex items-center text-xs text-[#E07A5F] font-mono font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              <span>O filtro de alto padrão</span>
            </div>
          </div>

          {/* Step 3: WhatsApp */}
          <div className="rounded-2xl border border-[#222] bg-[#0E0E0E] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#181818] border border-[#2A2A2A] text-neutral-300">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-bold text-neutral-500">
                  ETAPA 03
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                O WhatsApp
              </h3>
              <p className="text-xs font-mono text-[#E07A5F] uppercase tracking-wider mb-4">
                Fecha o Contrato
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                O lead chega preparado, consciente do seu valor e pronto para agendar ou contratar. A conversa é direta para fechamento, sem perda de tempo.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center text-xs text-neutral-500 font-mono">
              <span>Papel: Fechamento de Vendas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
