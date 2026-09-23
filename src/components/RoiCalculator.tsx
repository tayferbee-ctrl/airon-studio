import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import { PRE_SALE_PRICE, WHATSAPP_URL } from '../data/content';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  const [ticketPrice, setTicketPrice] = useState<number>(650);
  const [monthlyLeads, setMonthlyLeads] = useState<number>(25);

  // Conservative estimate: 12% of high-intent searchers give up or pick a competitor due to lack of a professional site
  const lostClientsPerMonth = Math.max(1, Math.round(monthlyLeads * 0.12));
  const monthlyLoss = lostClientsPerMonth * ticketPrice;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 bg-[#0B0A09] border-t border-[#1C1816] text-white overflow-hidden">
      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[700px] rounded-full bg-[#C86D51]/10 blur-[130px]" />

      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1C1411] border border-[#C86D51]/40 px-3.5 py-1 text-xs font-mono text-[#E07A5F] uppercase mb-4">
            <Calculator className="h-3.5 w-3.5" />
            <span>Simulador de Percepção & Conversão</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Quanto custa para você{' '}
            <span className="text-metallic-terracotta italic font-normal">
              não ter um site profissional?
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed">
            Faça uma estimativa conservadora de quantos clientes decidem não fechar por falta de uma presença oficial e sólida.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center rounded-2xl sm:rounded-3xl border border-[#2E201B] bg-[#120E0C] p-4 sm:p-8 lg:p-10 shadow-2xl glow-terracotta-subtle">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-medium text-neutral-200">
                  Valor médio da sua consulta, serviço ou honorário:
                </label>
                <span className="font-mono text-sm sm:text-base font-bold text-[#E07A5F] bg-[#1E1511] px-2.5 sm:px-3 py-1 rounded-lg border border-[#C86D51]/30 shrink-0 ml-2">
                  R$ {ticketPrice.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="5000"
                step="50"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#221B17] rounded-lg appearance-none cursor-pointer accent-[#C86D51]"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>R$ 200</span>
                <span>R$ 2.500</span>
                <span>R$ 5.000+</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-medium text-neutral-200">
                  Pessoas que chegam ao seu perfil ou pesquisam seu nome/mês:
                </label>
                <span className="font-mono text-sm sm:text-base font-bold text-[#E07A5F] bg-[#1E1511] px-2.5 sm:px-3 py-1 rounded-lg border border-[#C86D51]/30 shrink-0 ml-2">
                  {monthlyLeads} contatos
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-2 bg-[#221B17] rounded-lg appearance-none cursor-pointer accent-[#C86D51]"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>5 contatos</span>
                <span>50 contatos</span>
                <span>100+ contatos</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#241A15] bg-[#16110E] p-3.5 sm:p-4 text-xs text-neutral-400 space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-2 text-neutral-300 font-semibold">
                <AlertTriangle className="h-4 w-4 text-[#E07A5F] shrink-0" />
                <span>O Efeito da Insegurança Silenciosa</span>
              </div>
              <p>
                Clientes de alto tíquete não reclamam quando desistem: eles apenas fecham com o concorrente que passou mais solidez online e tinha um site no Google.
              </p>
            </div>
          </div>

          {/* Results Summary */}
          <div className="lg:col-span-6 rounded-2xl border-2 border-[#C86D51]/40 bg-[#1A120E] p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-xl ring-1 ring-[#E07A5F]/20">
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#E07A5F] font-bold">
                Estimativa Conservadora de Perda
              </span>

              <div className="mt-3 sm:mt-4 pb-3 sm:pb-4 border-b border-[#2C1D16]">
                <div className="text-xs text-neutral-400 mb-1">
                  Clientes perdidos para a concorrência por mês:
                </div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
                  <span>~{lostClientsPerMonth} clientes / mês</span>
                  <span className="text-[11px] sm:text-xs text-neutral-400 font-sans font-normal">
                    (apenas ~12% dos contatos)
                  </span>
                </div>
              </div>

              <div className="py-3 sm:py-4 border-b border-[#2C1D16] space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-300">Faturamento que deixa de entrar / mês:</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-rose-400">
                    - R$ {monthlyLoss.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-300">Impacto anual estimado:</span>
                  <span className="font-mono text-base sm:text-lg font-bold text-rose-400">
                    - R$ {yearlyLoss.toLocaleString('pt-BR')} / ano
                  </span>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 pt-2 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-neutral-400 block">Investimento no Lote 01:</span>
                  <span className="font-mono text-lg sm:text-xl font-bold text-[#E07A5F]">{PRE_SALE_PRICE}</span>
                  <span className="text-[10px] text-neutral-400 ml-1 block xs:inline">(taxa única, sem mensalidades)</span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-emerald-400">
                    <TrendingUp className="h-3 w-3" />
                    Paga-se no 1º cliente
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#2C1D16] space-y-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-metallic-terracotta px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl glow-terracotta-subtle transition-all hover:scale-101 active:scale-99 cursor-pointer leading-snug text-center"
              >
                <span>ESTANCAR ESSA PERDA NO LOTE 01 ({PRE_SALE_PRICE})</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-neutral-400 text-center">
                <ShieldCheck className="h-3.5 w-3.5 text-[#E07A5F] shrink-0" />
                <span>O site é o mesmo. O valor no Lote 01 é a melhor condição do ano.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
