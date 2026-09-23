import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Check } from 'lucide-react';
import { PRE_SALE_PRICE, WHATSAPP_URL } from '../data/content';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#080808] py-20 md:py-28 border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Background ambient terracotta glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-[#C86D51]/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        {/* Main Headline - Clean without category tag above */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
          Não espere o próximo lote para{' '}
          <span className="text-metallic-terracotta italic font-normal">
            valorizar seu trabalho.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-300 leading-relaxed">
          Cada semana que seu nome é pesquisado sem encontrar um site profissional estruturado representa pacientes e contratos fechando com quem transmitiu mais segurança online.
        </p>

        {/* CTA Area */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <a
            id="final-cta-button"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-metallic-terracotta px-10 py-4 text-base font-semibold text-white shadow-2xl glow-terracotta transition-all hover:scale-102 hover:opacity-95 active:scale-98 cursor-pointer"
          >
            <span>GARANTIR MEU SITE NA PRÉ-VENDA ({PRE_SALE_PRICE})</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
            <Clock className="h-3.5 w-3.5 text-[#E07A5F]" />
            <span>Condição de Lote 01 ativa por tempo limitado antes da virada</span>
          </div>
        </div>
      </div>
    </section>
  );
};
