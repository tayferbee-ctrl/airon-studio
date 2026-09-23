import React from 'react';
import { ArrowRight, Check, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { LOTES, WHATSAPP_URL, PRE_SALE_PRICE } from '../data/content';

interface PriceStructureProps {
  onOpenBooking: () => void;
}

export const PriceStructure: React.FC<PriceStructureProps> = ({ onOpenBooking }) => {
  return (
    <section id="lotes-de-preco" className="bg-[#080808] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main Headline - Clean without category tag above */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            O site não muda.{' '}
            <span className="text-metallic-terracotta italic font-normal">
              O que muda é o lote.
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            Não existe &ldquo;plano básico&rdquo;, &ldquo;plano intermediário&rdquo; ou &ldquo;plano premium&rdquo;.
            Existe uma única entrega. Quem entra na Pré-venda aproveita o Lote 01. Conforme a fila de produção é preenchida, o lote vira automaticamente.
          </p>
        </div>

        {/* 3 Lotes Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOTES.map((lote) => {
            const isActive = lote.status === 'active';
            const isUpcoming = lote.status === 'upcoming';
            const isFinal = lote.status === 'final';

            return (
              <div
                key={lote.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all ${
                  isActive
                    ? 'border-2 border-[#C86D51] bg-[#120E0C] shadow-2xl glow-terracotta ring-1 ring-[#E07A5F]/40'
                    : 'border border-[#222] bg-[#0E0E0E] opacity-75 hover:opacity-95'
                }`}
              >
                {/* Active Indicator Top Tag */}
                {isActive && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-metallic-terracotta px-4 py-0.5 text-[11px] font-bold text-white tracking-wide uppercase font-mono shadow-md">
                    {lote.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {lote.name}
                    </span>
                    {isActive ? (
                      <span className="rounded-full bg-[#261713] border border-[#C86D51]/50 px-2.5 py-0.5 text-[11px] font-semibold text-[#E07A5F] font-mono">
                        Disponível agora
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-neutral-500">
                        {isUpcoming ? 'Próximo lote' : 'Lote de Lançamento'}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 mb-3">
                    <div className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
                      {lote.price}
                    </div>
                    <div className="mt-1 text-xs font-medium text-[#E07A5F] font-mono">
                      ou {lote.installment}
                    </div>
                    <p className="mt-2 text-xs font-medium text-neutral-400">
                      {lote.period}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed border-t border-[#1E1E1E] pt-4">
                    {lote.description}
                  </p>

                  <div className="mt-6 space-y-2.5 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#E07A5F] shrink-0" />
                      <span>Mesmo site profissional responsivo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#E07A5F] shrink-0" />
                      <span>Mesma entrega sem cortes ou omissões</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#E07A5F] shrink-0" />
                      <span>Publicação e suporte completo</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1C1C1C]">
                  {isActive ? (
                    <a
                      id="lote-active-button"
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-metallic-terracotta px-5 py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:scale-102 active:scale-98 cursor-pointer"
                    >
                      <span>Garantir Pré-Venda ({PRE_SALE_PRICE})</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <div className="w-full rounded-xl bg-[#141414] border border-[#222] px-5 py-3 text-center text-xs font-medium text-neutral-500">
                      {isUpcoming ? 'Aguardando encerramento do Lote 01' : 'Valor oficial de lançamento'}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear transparent notice without "preço progressivo" */}
        <div className="mt-10 rounded-xl border border-[#262626] bg-[#0E0E0E] p-4 text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-neutral-400">
          <AlertCircle className="h-4 w-4 text-[#E07A5F] shrink-0" />
          <span>
            Não é desconto artificial. É condição de Pré-venda por ordem de entrada na fila de produção.
          </span>
        </div>
      </div>
    </section>
  );
};
