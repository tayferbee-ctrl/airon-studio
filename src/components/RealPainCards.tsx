import React from 'react';
import { MessageSquare, Search, ShieldAlert, Users, TrendingDown, ArrowRight } from 'lucide-react';
import { PAIN_CARDS, WHATSAPP_URL } from '../data/content';

export const RealPainCards: React.FC = () => {
  const icons = [
    <Users className="h-5 w-5 text-[#E07A5F]" />,
    <TrendingDown className="h-5 w-5 text-[#E07A5F]" />,
    <ShieldAlert className="h-5 w-5 text-[#E07A5F]" />,
    <Search className="h-5 w-5 text-[#E07A5F]" />,
  ];

  return (
    <section className="bg-[#080808] py-20 md:py-28 border-t border-[#1C1C1C] relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main Headline - Clean without category tag above */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Você pode estar sendo percebido abaixo do seu verdadeiro valor.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A cada dia que você atende sem um site profissional, é você quem está deixando pacientes e contratos de alto tíquete na mesa.
          </p>
        </div>

        {/* 4 Cards Grid with Diversified Non-Repetitive Impacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAIN_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-[#222] bg-[#0E0E0E] p-7 sm:p-8 shadow-lg transition-all hover:border-[#C86D51]/50 hover:bg-[#12100E] group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#181818] border border-[#2A2A2A] group-hover:border-[#C86D51]/50 transition-colors">
                    {icons[index]}
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-500">
                    0{index + 1}
                  </span>
                </div>

                <div className="mb-2 font-serif text-2xl font-bold text-white">
                  {card.quote}
                </div>

                <h3 className="text-sm font-semibold text-[#E07A5F] mb-3 font-sans">
                  {card.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1A1A1A] flex items-center justify-between text-xs">
                <span className="font-mono text-neutral-500 uppercase tracking-wider text-[10px]">
                  Custo Oculto:
                </span>
                <span className="font-semibold text-[#E07A5F] bg-[#1E1410] border border-[#C86D51]/30 px-2.5 py-0.5 rounded-full">
                  {card.impactTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Wake-up Realization Box */}
        <div className="mt-12 rounded-2xl border border-[#33221C] bg-[#120D0A] p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Quem está perdendo em não ter um site profissional é você.
            </h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Enquanto você manda o cliente para uma rede social cheia de distrações, o profissional ao lado que possui um site estruturado fecha consultas e contratos sem desconto.
            </p>
            <div className="mt-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[#E07A5F] hover:text-[#F39C82] transition-colors"
              >
                <span>Mudar essa percepção agora no WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
