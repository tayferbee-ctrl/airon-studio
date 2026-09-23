import React from 'react';
import { Sparkles } from 'lucide-react';

export const ManifestoBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24 text-white text-center border-y border-[#1F1F1F]">
      {/* Decorative architectural grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#2D211C] bg-[#16100E] px-4 py-1 text-xs text-[#E07A5F] font-mono mb-6">
          <Sparkles className="h-3 w-3" />
          <span>TRANSPARÊNCIA TOTAL</span>
        </div>

        {/* Central Manifesto statement */}
        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
          &ldquo;O site é o mesmo.<br />
          <span className="text-metallic-terracotta italic font-medium">
            O lote da contratação é que muda.&rdquo;
          </span>
        </blockquote>

        {/* Secondary phrase */}
        <p className="mt-6 text-base sm:text-lg text-neutral-400 font-medium tracking-wide">
          Sua autoridade merece um site profissional.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C86D51] to-transparent" />
        </div>
      </div>
    </section>
  );
};
