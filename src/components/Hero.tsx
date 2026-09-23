import React, { useState } from 'react';
import { ArrowRight, Globe, Smartphone, Laptop, Sparkles, CheckCircle2, Star, ShieldCheck, MapPin } from 'lucide-react';
import { PRE_SALE_PRICE, DENTIST_EXAMPLE, NICHE_EXAMPLES, WHATSAPP_URL } from '../data/content';
import draGiuliaPhoto from '../assets/images/dra_giulia_portrait_1790107659695.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedNicheId, setSelectedNicheId] = useState<string>('odonto');

  const currentExample = NICHE_EXAMPLES.find((n) => n.id === selectedNicheId) || NICHE_EXAMPLES[0];

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-[#080808]">
      {/* Background subtle glowing radial gradients in terracotta tone */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 -z-10 h-[520px] w-[900px] rounded-full bg-[#C86D51]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 -z-10 h-[300px] w-[400px] rounded-full bg-[#E07A5F]/5 blur-[100px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Exact Headline - Clean without category tag above */}
        <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.12] break-words">
          Sua autoridade merece um{' '}
          <span className="text-metallic-terracotta italic font-normal">
            site profissional.
          </span>
        </h1>

        {/* Exact Subheadline */}
        <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
          Você pode ter Instagram, WhatsApp e seguidores. Mas quando alguém procura seu nome, seu trabalho merece mais do que um perfil em uma rede social. Tenha um site profissional, responsivo e criado para apresentar sua autoridade na internet.
        </p>

        {/* CTA Area */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3">
          <a
            id="hero-cta-button"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-metallic-terracotta w-full max-w-xs sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-xl glow-terracotta transition-all hover:scale-102 hover:opacity-95 active:scale-98 cursor-pointer"
          >
            <span>QUERO MEU SITE</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono tracking-wide">
            <span>Oferta de Pré-venda:</span>
            <strong className="text-[#E07A5F] font-bold text-sm">{PRE_SALE_PRICE}</strong>
            <span className="text-neutral-500">• Lote 01</span>
          </div>
        </div>

        {/* Interactive Niche Tabs */}
        <div className="mt-12 sm:mt-14 mb-4 sm:mb-5 flex flex-col items-center">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-3">
            ✦ Visualize a estrutura em diferentes áreas de atuação:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {NICHE_EXAMPLES.map((niche) => {
              const isSelected = selectedNicheId === niche.id;
              return (
                <button
                  key={niche.id}
                  type="button"
                  onClick={() => setSelectedNicheId(niche.id)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-metallic-terracotta text-white font-semibold shadow-md glow-terracotta-subtle ring-1 ring-white/20'
                      : 'bg-[#121212] text-neutral-400 border border-[#242424] hover:border-[#3A3A3A] hover:text-white'
                  }`}
                >
                  {niche.nicheLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Preview of Interactive Site Mockup */}
        <div id="exemplo-site-profissional" className="mt-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-[#262626] bg-[#0E0E0E] p-2.5 sm:p-5 shadow-2xl glow-terracotta-subtle">
            {/* Browser top bar */}
            <div className="flex items-center justify-between border-b border-[#1E1E1E] pb-3 mb-3 sm:mb-4 gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#262626]" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#262626]" />
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#262626]" />
              </div>

              {/* Simulated Domain Bar */}
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-[#141414] px-2.5 sm:px-4 py-1 text-[11px] sm:text-xs text-neutral-300 font-mono border border-[#2A2A2A] max-w-[200px] xs:max-w-xs sm:max-w-md w-full justify-center min-w-0">
                <Globe className="h-3 w-3 text-[#E07A5F] shrink-0" />
                <span className="text-white font-medium truncate">{currentExample.domain}</span>
                <span className="hidden sm:inline text-[#E07A5F] text-[10px] font-sans font-semibold bg-[#221612] px-2 py-0.5 rounded border border-[#C86D51]/30 shrink-0">
                  SSL Seguro
                </span>
              </div>

              {/* Device Toggle */}
              <div className="flex items-center gap-1 rounded-lg bg-[#181818] p-0.5 border border-[#262626] shrink-0">
                <button
                  type="button"
                  onClick={() => setPreviewDevice('desktop')}
                  className={`p-1.5 rounded-md transition-colors ${previewDevice === 'desktop' ? 'bg-[#262626] text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                  title="Visão Computador"
                >
                  <Laptop className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDevice('mobile')}
                  className={`p-1.5 rounded-md transition-colors ${previewDevice === 'mobile' ? 'bg-[#262626] text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                  title="Visão Celular"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Simulated Live Site Content */}
            <div className="overflow-hidden rounded-xl border border-[#222] bg-[#0A0A0A] text-left transition-all">
              <div className={`mx-auto transition-all duration-300 ${previewDevice === 'mobile' ? 'max-w-sm py-4' : 'w-full'}`}>
                {/* Mock Header Inside Browser */}
                <div className="flex items-center justify-between border-b border-[#1A1A1A] px-3 sm:px-6 py-2.5 sm:py-3 bg-[#0D0D0D]">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-metallic-terracotta text-white flex items-center justify-center font-serif font-bold text-[10px] sm:text-xs shadow-xs shrink-0">
                      {currentExample.name.split(' ').map(w => w[0]).filter(c => c && c === c.toUpperCase()).slice(0, 2).join('')}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] sm:text-xs font-bold tracking-tight text-white block truncate">
                        {currentExample.name}
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-neutral-400 font-mono block">
                        {currentExample.credential}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 text-[11px] text-neutral-300 font-medium">
                    <span className="text-[#E07A5F]">Especialidades</span>
                    <span>Sobre</span>
                    <span>Resultados</span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-metallic-terracotta px-3 py-1 text-white text-[10px] font-semibold"
                    >
                      Agendar Contato
                    </a>
                  </div>
                </div>

                {/* Mock Hero Content */}
                <div className="p-4 sm:p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className={previewDevice === 'mobile' ? 'col-span-12' : 'md:col-span-7'}>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F1512] border border-[#C86D51]/40 px-3 py-0.5 text-[10px] font-mono text-[#E07A5F] mb-3 uppercase">
                        <Sparkles className="h-2.5 w-2.5" />
                        {currentExample.specialty}
                      </span>

                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-snug">
                        {currentExample.name} •{' '}
                        <span className="text-metallic-terracotta italic">autoridade e excelência comprovada.</span>
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {currentExample.tagline} Atendimento exclusivo e personalizado para quem busca o mais alto padrão.
                      </p>

                      {/* Mock Services Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {currentExample.services.map((svc, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-[#161616] border border-[#282828] px-2.5 py-1 text-[11px] text-neutral-200"
                          >
                            {svc.name}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-metallic-terracotta px-4 py-2.5 text-xs font-semibold text-white shadow-md glow-terracotta-subtle"
                        >
                          <span>Falar Diretamente no WhatsApp</span>
                          <ArrowRight className="h-3 w-3" />
                        </a>
                        <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#E07A5F]" />
                          <span>{currentExample.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Authority Card inside Mockup */}
                    <div className={previewDevice === 'mobile' ? 'col-span-12' : 'md:col-span-5'}>
                      <div className="rounded-2xl border border-[#2A2A2A] bg-[#121212] p-4 sm:p-5 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 h-32 w-32 bg-[#C86D51]/15 rounded-full blur-3xl pointer-events-none" />

                        {/* Portrait / Monogram Photo Container */}
                        {selectedNicheId === 'odonto' ? (
                          <div className="relative mb-4 overflow-hidden rounded-xl border border-[#333] bg-[#161616] aspect-[3/4] max-h-72 w-full shadow-lg">
                            <img
                              src={draGiuliaPhoto}
                              alt="Dra. Giulia Alburquec - Cirurgiã-Dentista"
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Gradient Overlays for Cinematic Feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                            {/* Top Badge */}
                            <div className="absolute top-3 right-3 flex items-center">
                              <span className="rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
                                ● Online
                              </span>
                            </div>

                            {/* Bottom info on photo */}
                            <div className="absolute bottom-3 left-3 right-3 text-left">
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-sm font-bold text-white tracking-tight drop-shadow-md">
                                  {currentExample.name}
                                </h4>
                                <ShieldCheck className="h-3.5 w-3.5 text-[#E07A5F]" />
                              </div>
                              <p className="text-[11px] text-[#F9B4A0] font-medium drop-shadow-sm">
                                {currentExample.specialty}
                              </p>
                              <div className="flex items-center gap-1 mt-1 text-amber-400 text-xs">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-current" />
                                ))}
                                <span className="text-[10px] text-neutral-300 ml-1 font-mono">(5.0 • 120 avaliações)</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative mb-4 overflow-hidden rounded-xl border border-[#2E201A] bg-gradient-to-br from-[#1A120E] via-[#140E0B] to-[#1F140F] p-6 text-left shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                              <div className="h-12 w-12 rounded-xl bg-metallic-terracotta text-white flex items-center justify-center font-serif font-bold text-base shadow-md">
                                {currentExample.name.split(' ').map(w => w[0]).filter(c => c && c === c.toUpperCase()).slice(0, 2).join('')}
                              </div>
                              <span className="rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
                                ● Disponível
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <h4 className="text-base font-bold text-white tracking-tight">
                                {currentExample.name}
                              </h4>
                              <ShieldCheck className="h-4 w-4 text-[#E07A5F]" />
                            </div>

                            <p className="text-xs text-[#E07A5F] font-mono mt-0.5">
                              {currentExample.credential}
                            </p>

                            <p className="text-xs text-neutral-300 mt-2 line-clamp-2">
                              {currentExample.tagline}
                            </p>

                            <div className="flex items-center gap-1 mt-3 text-amber-400 text-xs">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-current" />
                              ))}
                              <span className="text-[10px] text-neutral-300 ml-1 font-mono">(5.0 • Google Avaliações)</span>
                            </div>
                          </div>
                        )}

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 border-y border-[#202020] py-2.5 text-center">
                          {currentExample.stats.map((st, i) => (
                            <div key={i}>
                              <div className="font-mono text-xs sm:text-sm font-bold text-white">{st.value}</div>
                              <div className="text-[9px] text-neutral-400">{st.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 pt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-[#E07A5F]" />
                            Presença Oficial
                          </span>
                          <span className="font-mono text-neutral-300 text-[10px]">Estrutura Validada</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub banner */}
                <div className="border-t border-[#1C1C1C] bg-[#101010] px-6 py-2.5 text-center text-xs text-neutral-400 font-mono">
                  ✦ Exemplo real de posicionamento: seus pacientes e clientes encontram uma presença digital exclusiva à altura do seu valor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
