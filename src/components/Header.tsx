import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { PRE_SALE_PRICE, WHATSAPP_URL, INSTAGRAM_URL } from '../data/content';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E1E1E] bg-[#080808]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="font-sans text-base font-extrabold tracking-tight text-white flex items-center gap-1.5 uppercase">
              airon studio®
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E07A5F]" />
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
              Estrutura Digital para Experts
            </span>
          </div>
        </a>

        {/* Navigation links - desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-neutral-400">
          <a
            href="#exemplo-site-profissional"
            className="transition-colors hover:text-white"
          >
            Exemplo Prático
          </a>
          <a
            href="#a-virada"
            className="transition-colors hover:text-white"
          >
            A Estrutura
          </a>
          <a
            href="#lotes-de-preco"
            className="transition-colors hover:text-white"
          >
            Lotes & Pré-Venda
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-white"
          >
            Dúvidas
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#E07A5F] transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            <span>@aironstudio.br</span>
          </a>
        </nav>

        {/* Live Lote pill & CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#2B231F] bg-[#16110F] px-3 py-1 text-xs text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E07A5F] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E07A5F]"></span>
            </span>
            <span className="font-medium text-neutral-400">Lote 01:</span>
            <span className="font-bold text-[#E07A5F] font-mono">{PRE_SALE_PRICE}</span>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-metallic-terracotta px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:opacity-95 hover:scale-102 active:scale-98 glow-terracotta-subtle cursor-pointer"
          >
            <span>Garantir Pré-Venda</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
