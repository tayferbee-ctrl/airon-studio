import React from 'react';
import { WHATSAPP_URL, INSTAGRAM_URL, GOOGLE_REVIEW_URL, PRE_SALE_PRICE } from '../data/content';
import { ArrowUpRight, Instagram, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#1A1A1A] py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#141414]">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div>
              <span className="font-sans text-base font-extrabold tracking-tight text-white flex items-center gap-1.5 uppercase">
                airon studio®
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E07A5F]" />
              </span>
              <span className="text-[11px] text-neutral-400 font-mono">
                Estrutura digital para experts e profissionais liberais
              </span>
            </div>
          </div>

          {/* Social and Official Channels */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#111] border border-[#262626] px-3.5 py-2 text-neutral-300 hover:text-white hover:border-[#E07A5F]/50 transition-all font-medium"
            >
              <Instagram className="h-4 w-4 text-[#E07A5F]" />
              <span>@aironstudio.br</span>
              <ArrowUpRight className="h-3 w-3 text-neutral-500" />
            </a>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#111] border border-[#262626] px-3.5 py-2 text-neutral-300 hover:text-white hover:border-amber-400/50 transition-all font-medium"
            >
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              <span>Avaliações no Google</span>
              <ArrowUpRight className="h-3 w-3 text-neutral-500" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-metallic-terracotta px-3.5 py-2 text-white font-semibold shadow-xs hover:opacity-95 transition-all text-xs"
            >
              <span>WhatsApp Oficial</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Quick Links Navigation */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium border-b border-[#141414]">
          <a href="#exemplo-site-profissional" className="hover:text-white transition-colors">
            Exemplo Prático
          </a>
          <a href="#a-virada" className="hover:text-white transition-colors">
            A Estrutura
          </a>
          <a href="#lotes-de-preco" className="hover:text-white transition-colors">
            Lotes & Pré-Venda
          </a>
          <a href="#comparativo-valor" className="hover:text-white transition-colors">
            Ancoragem de Valor
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} airon studio®. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-400">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07A5F] transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E07A5F] transition-colors"
            >
              Google Perfil
            </a>
            <span>•</span>
            <span>Pré-venda ativa ({PRE_SALE_PRICE})</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
