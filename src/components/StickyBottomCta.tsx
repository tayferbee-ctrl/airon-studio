import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { PRE_SALE_PRICE } from '../data/content';

interface StickyBottomCtaProps {
  onOpenBooking: () => void;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-6 sm:right-6 md:left-auto md:right-8 md:bottom-6 z-40 max-w-xl transition-all duration-300 animate-in slide-in-from-bottom-4">
      <div className="flex items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-[#3A261F] bg-[#120E0C]/95 backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl glow-terracotta text-white ring-1 ring-[#C86D51]/30">
        {/* Left Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-metallic-terracotta text-white shadow-xs">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#E07A5F] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E07A5F] truncate">
                airon studio® • Lote 01
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white truncate">
              Pré-Venda Ativa por <span className="text-[#E07A5F]">{PRE_SALE_PRICE}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 rounded-xl bg-metallic-terracotta px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-bold text-white shadow-md glow-terracotta-subtle transition-all hover:scale-102 active:scale-98 cursor-pointer"
          >
            <span>Garantir Vaga</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Fechar aviso"
            className="text-neutral-500 hover:text-white p-1 transition-colors cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
