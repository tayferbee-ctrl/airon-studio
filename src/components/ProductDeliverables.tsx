import React from 'react';
import { Check, Sparkles, MonitorCheck } from 'lucide-react';
import { DELIVERABLES } from '../data/content';

export const ProductDeliverables: React.FC = () => {
  return (
    <section id="o-produto" className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main Headline - Clean without category tag above */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Um site profissional.{' '}
            <span className="text-metallic-terracotta italic font-normal">
              Sem complicação.
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Criamos uma estrutura profissional para você apresentar sua marca, seu trabalho e sua autoridade na internet.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1E1E1E] gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                O QUE VOCÊ RECEBE
              </span>
              <p className="text-xs text-neutral-400 mt-0.5">
                Checklist de entrega completa inclusa no seu projeto
              </p>
            </div>
            
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#181310] border border-[#C86D51]/30 px-3.5 py-1 text-xs font-mono text-[#E07A5F] self-start sm:self-auto">
              <MonitorCheck className="h-3.5 w-3.5 text-[#E07A5F]" />
              <span>12 itens verificados</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 pt-6">
            {DELIVERABLES.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-[#141414]"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#201511] text-[#E07A5F] border border-[#C86D51]/40 mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-neutral-200">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Golden highlight rule */}
          <div className="mt-10 rounded-xl border border-[#2D211C] bg-[#140F0D] p-5 text-center">
            <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base">
              <Sparkles className="h-4 w-4 text-[#E07A5F]" />
              <span>A entrega é a mesma independentemente do lote adquirido.</span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Não existem cortes, omissões ou limitações para quem garante seu site no Lote 01 de Pré-Venda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
