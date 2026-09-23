import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Check, Clock } from 'lucide-react';
import { PRE_SALE_PRICE, PRE_SALE_INSTALLMENT, WHATSAPP_URL } from '../data/content';

interface OfferCtaBlockProps {
  onOpenBooking: () => void;
}

export const OfferCtaBlock: React.FC<OfferCtaBlockProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative rounded-3xl border-2 border-[#C86D51] bg-[#120E0C] p-8 sm:p-12 text-center shadow-2xl glow-terracotta ring-1 ring-[#E07A5F]/40 overflow-hidden">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-80 rounded-full bg-[#E07A5F]/15 blur-3xl" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-metallic-terracotta px-4 py-1 text-xs font-bold text-white font-mono uppercase tracking-wide mb-6 shadow-md">
            <Sparkles className="h-3 w-3" />
            <span>LOTE 01 • PRÉ-VENDA OFICIAL</span>
          </div>

          {/* Headline - Clean without category tag above */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Garanta seu site profissional pelo{' '}
            <span className="text-metallic-terracotta italic font-normal">
              menor valor de entrada.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-300 leading-relaxed">
            A entrega é exatamente a mesma. O cliente que contrata no Lote 01 de Pré-venda garante sua posição prioritária na fila de produção.
          </p>

          {/* Price Box */}
          <div className="my-8 inline-block rounded-2xl border border-[#2D1F18] bg-[#18110D] p-6 sm:p-8 min-w-[280px]">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Investimento de Pré-Venda
            </div>
            <div className="mt-2 font-serif text-5xl sm:text-6xl font-bold text-white font-mono tracking-tight">
              {PRE_SALE_PRICE}
            </div>
            <div className="mt-1 text-sm font-semibold text-[#E07A5F] font-mono">
              ou em até {PRE_SALE_INSTALLMENT}
            </div>
            <div className="mt-3 text-xs text-neutral-400 flex items-center justify-center gap-1.5 font-mono">
              <Clock className="h-3.5 w-3.5 text-[#E07A5F]" />
              <span>Próximo lote: R$ 397</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-3">
            <a
              id="offer-cta-button"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-metallic-terracotta px-9 py-4 text-base font-semibold text-white shadow-xl glow-terracotta transition-all hover:scale-102 hover:opacity-95 active:scale-98 cursor-pointer"
            >
              <span>GARANTIR MINHA VAGA NO LOTE 01</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <Check className="h-3.5 w-3.5 text-[#E07A5F]" />
                Atendimento Direto no WhatsApp
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3.5 w-3.5 text-[#E07A5F]" />
                Sem mensalidades abusivas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
