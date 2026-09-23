import React from 'react';
import { ArrowRight, Check, Compass, Layers } from 'lucide-react';
import { VIRADA_ITEMS, WHATSAPP_URL } from '../data/content';

interface ViradaSectionProps {
  onOpenBooking: () => void;
}

export const ViradaSection: React.FC<ViradaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="a-virada" className="bg-[#080808] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & CTA - Clean without top category tag */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Você não precisa de mais uma rede social.<br />
              <span className="text-metallic-terracotta italic font-normal">
                Você precisa de uma estrutura própria.
              </span>
            </h2>

            <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
              <p>
                Seu site funciona como uma <strong className="text-white font-semibold">estrutura sólida para sua autoridade</strong>.
              </p>
              <p>
                Um lugar onde você controla a apresentação do seu trabalho, sem algoritmos decidindo quem vê suas conquistas ou se o cliente vai se distrair com outras postagens.
              </p>
              <p className="font-medium text-white">
                Onde você pode reunir tudo em um único ponto de referência:
              </p>
            </div>

            <div className="pt-2">
              <a
                id="virada-cta-button"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-metallic-terracotta px-8 py-4 text-sm font-semibold text-white shadow-xl glow-terracotta-subtle transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>QUERO MEU SITE PROFISSIONAL</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: 10 Core Structure Elements */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#222] bg-[#0E0E0E] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-5 border-b border-[#1E1E1E]">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[#E07A5F]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                    Estrutura Completa do seu Site
                  </span>
                </div>
                <span className="text-xs text-[#E07A5F] font-mono">10 pilares inclusos</span>
              </div>

              <div className="divide-y divide-[#1A1A1A] mt-2">
                {VIRADA_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F1511] text-[#E07A5F] border border-[#C86D51]/40">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-neutral-200">
                        {item}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-[#262626] bg-[#141414] p-3 text-center text-xs text-neutral-400 font-medium">
                Tudo centralizado no seu próprio domínio na internet, sem depender das mudanças do algoritmo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
