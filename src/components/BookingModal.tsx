import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Sparkles, MessageSquare, Instagram, Star } from 'lucide-react';
import { WHATSAPP_URL, PRE_SALE_PRICE, INSTAGRAM_URL, GOOGLE_REVIEW_URL } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textMessage = `Olá! Quero garantir meu site na Pré-venda por ${PRE_SALE_PRICE} (Lote 01).%0A%0A*Nome:* ${encodeURIComponent(name || 'Não informado')}%0A*Profissão/Especialidade:* ${encodeURIComponent(profession || 'Não informada')}%0A*WhatsApp:* ${encodeURIComponent(phone || 'Não informado')}`;
    window.location.href = `${WHATSAPP_URL}?text=${textMessage}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#33221C] bg-[#100D0B] p-6 sm:p-8 shadow-2xl glow-terracotta text-white">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1613] text-neutral-400 hover:text-white hover:bg-[#281F1A] transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#201511] border border-[#C86D51]/40 px-3 py-0.5 text-[10px] font-mono font-bold text-[#E07A5F] uppercase mb-2">
            <Sparkles className="h-3 w-3" />
            <span>VAGA NO LOTE 01 DE PRÉ-VENDA</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Garanta sua condição exclusiva de {PRE_SALE_PRICE}
          </h3>
          <p className="mt-1 text-xs text-neutral-400">
            Você será direcionado diretamente para o nosso WhatsApp oficial.
          </p>
        </div>

        {/* Fast Action WhatsApp Button */}
        <div className="mb-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-metallic-terracotta px-5 py-3.5 text-xs font-semibold text-white shadow-md glow-terracotta-subtle transition-all hover:scale-101 active:scale-99 cursor-pointer"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Falar Agora no WhatsApp ({PRE_SALE_PRICE})</span>
          </a>
        </div>

        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#222]" />
          </div>
          <span className="relative bg-[#100D0B] px-3 text-[10px] uppercase font-mono text-neutral-500">
            Ou envie seus dados abaixo
          </span>
        </div>

        {/* Optional Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Dra. Giulia Albuquerque"
              className="w-full rounded-xl border border-[#262626] bg-[#161616] px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-[#C86D51] focus:outline-none focus:ring-1 focus:ring-[#C86D51]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Sua Especialidade / Área
            </label>
            <input
              type="text"
              required
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="Ex: Odontologia Estética, Medicina, Consultoria..."
              className="w-full rounded-xl border border-[#262626] bg-[#161616] px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-[#C86D51] focus:outline-none focus:ring-1 focus:ring-[#C86D51]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Seu WhatsApp (com DDD)
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex: (11) 99999-9999"
              className="w-full rounded-xl border border-[#262626] bg-[#161616] px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-[#C86D51] focus:outline-none focus:ring-1 focus:ring-[#C86D51]"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#221713] border border-[#C86D51]/60 px-5 py-3 text-xs font-bold text-[#E07A5F] hover:bg-[#2A1D18] hover:text-white transition-all cursor-pointer"
          >
            <span>Prosseguir para WhatsApp</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

        <div className="mt-4 flex flex-col items-center gap-2 pt-2 border-t border-[#221713] text-[11px] text-neutral-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[#E07A5F]" />
            <span>Atendimento oficial airon studio® • Sem intermediários</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
            >
              <Instagram className="h-3 w-3 text-[#E07A5F]" />
              <span>@aironstudio.br</span>
            </a>
            <span>•</span>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
            >
              <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
              <span>Avaliações no Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
