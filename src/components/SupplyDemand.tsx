import React from 'react';
import { Users, Clock, ShieldCheck, CalendarCheck } from 'lucide-react';
import { PRE_SALE_PRICE } from '../data/content';

export const SupplyDemand: React.FC = () => {
  return (
    <section id="lotes-cronograma" className="bg-[#0A0A0A] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative explanation - Clean without top category tag */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Por que o valor muda nos{' '}
              <span className="text-metallic-terracotta italic font-normal">
                próximos lotes?
              </span>
            </h2>

            <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Nossa produção possui capacidade limitada.</strong> Cada site profissional é construído sob medida, adaptado com rigor estético e técnico para a sua especialidade.
              </p>
              <p>
                Quanto maior a procura, maior a ocupação da nossa equipe de desenvolvimento. Por isso trabalhamos com divisão estrita por lotes de lançamento:
              </p>
              
              {/* Lotes flow */}
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm font-semibold py-2 bg-[#120E0C] border border-[#2B1B15] rounded-xl px-4 w-fit">
                <span className="text-[#E07A5F]">Lote 01: {PRE_SALE_PRICE}</span>
                <span className="text-neutral-500 font-normal">→</span>
                <span className="text-neutral-300">Lote 02: R$ 397</span>
                <span className="text-neutral-500 font-normal">→</span>
                <span className="text-white">Lote 03: R$ 497</span>
              </div>

              <p className="text-neutral-300 font-medium">
                O produto continua sendo exatamente o mesmo. O que muda é o lote e a fase em que você decide entrar.
              </p>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-[#222] bg-[#101010] p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-4 w-4 text-[#E07A5F]" />
                  <span className="text-xs font-bold text-white">Capacidade Real</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Sem automações genéricas. Cada projeto é executado com foco artesanal.
                </p>
              </div>

              <div className="rounded-xl border border-[#222] bg-[#101010] p-4">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="h-4 w-4 text-[#E07A5F]" />
                  <span className="text-xs font-bold text-white">Transparência</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Lotes transparentes baseados no preenchimento efetivo da agenda.
                </p>
              </div>
            </div>
          </div>

          {/* Ascending Line Graphic */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-8 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-[#1E1E1E]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  PROGRESSÃO POR LOTES
                </span>
                <span className="text-xs font-medium text-[#E07A5F] font-mono">
                  Pré-Venda Ativa
                </span>
              </div>

              {/* Graphic Diagram */}
              <div className="mt-8 relative">
                {/* SVG Curve */}
                <div className="w-full h-36 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 360 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradientCurveDark" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E07A5F" stopOpacity="1" />
                        <stop offset="50%" stopColor="#C86D51" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#F9B4A0" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="areaGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#C86D51" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#C86D51" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area under curve */}
                    <path
                      d="M 20 95 Q 180 80, 340 25 L 340 120 L 20 120 Z"
                      fill="url(#areaGradientDark)"
                    />

                    {/* The curve line */}
                    <path
                      d="M 20 95 Q 180 80, 340 25"
                      fill="none"
                      stroke="url(#gradientCurveDark)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Point 1: Lote 01 Pré-venda */}
                    <circle cx="20" cy="95" r="6" fill="#E07A5F" stroke="#080808" strokeWidth="2.5" />
                    
                    {/* Point 2: Lote 02 */}
                    <circle cx="180" cy="65" r="5" fill="#71717A" stroke="#080808" strokeWidth="2" />
                    
                    {/* Point 3: Lote 03 Lançamento */}
                    <circle cx="340" cy="25" r="5" fill="#FFFFFF" stroke="#080808" strokeWidth="2" />
                  </svg>
                </div>

                {/* 3 Step Cards Below Curve */}
                <div className="grid grid-cols-3 gap-2.5 pt-6 border-t border-[#1C1C1C] mt-4 text-center">
                  {/* Step 1: Lote 01 Pré-Venda */}
                  <div className="rounded-xl border-2 border-[#C86D51] bg-[#1C1410] p-3 shadow-md">
                    <span className="inline-block rounded-full bg-metallic-terracotta px-2 py-0.5 text-[9px] font-bold text-white font-mono uppercase mb-1">
                      LOTE 01
                    </span>
                    <p className="font-mono text-base font-bold text-[#E07A5F]">
                      R$ 297
                    </p>
                    <p className="text-[10px] text-neutral-300 font-medium mt-0.5">
                      Pré-Venda Ativa
                    </p>
                  </div>

                  {/* Step 2: Lote 02 */}
                  <div className="rounded-xl border border-[#222] bg-[#121212] p-3">
                    <span className="inline-block text-[9px] font-bold text-neutral-400 font-mono uppercase mb-1">
                      LOTE 02
                    </span>
                    <p className="font-mono text-base font-bold text-neutral-300">
                      R$ 397
                    </p>
                    <p className="text-[10px] text-neutral-500 mt-0.5">
                      Próxima Faixa
                    </p>
                  </div>

                  {/* Step 3: Lote 03 Lançamento */}
                  <div className="rounded-xl border border-[#222] bg-[#121212] p-3">
                    <span className="inline-block text-[9px] font-bold text-neutral-400 font-mono uppercase mb-1">
                      LOTE 03
                    </span>
                    <p className="font-mono text-base font-bold text-white">
                      R$ 497
                    </p>
                    <p className="text-[10px] text-neutral-500 mt-0.5">
                      Lançamento Final
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom explanatory note */}
              <div className="mt-6 flex items-start gap-2.5 rounded-lg bg-[#14100D] border border-[#2B1B15] p-3 text-xs text-neutral-300">
                <Clock className="h-4 w-4 text-[#E07A5F] shrink-0 mt-0.5" />
                <span>
                  O cliente que compra antes paga menos porque está entrando antes na fila. Não é desconto. É preço de oportunidade da Pré-venda.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
