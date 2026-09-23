import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#080808] py-20 md:py-28 border-t border-[#1C1C1C]">
      <div className="mx-auto max-w-4xl px-6">
        {/* Main Headline - Clean without category tag above */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Perguntas{' '}
            <span className="text-metallic-terracotta italic font-normal">
              frequentes
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Tudo o que você precisa saber sobre a entrega, os lotes e a pré-venda.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-[#C86D51]/50 bg-[#120E0C] shadow-lg'
                    : 'border-[#222] bg-[#0E0E0E] hover:border-[#333]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors cursor-pointer"
                >
                  <span className="font-sans text-base font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 ${
                      isOpen
                        ? 'border-[#C86D51] bg-[#1E1410] text-[#E07A5F] rotate-180'
                        : 'border-[#262626] bg-[#141414] text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-[#1C1C1C] pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
