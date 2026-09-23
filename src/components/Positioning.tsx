import React from 'react';
import { Award, Shield } from 'lucide-react';

export const Positioning: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-neutral-200/80">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono text-neutral-700 mb-6">
          <Shield className="h-3.5 w-3.5 text-neutral-900" />
          <span>POSICIONAMENTO E HONESTIDADE</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-950 leading-tight">
          Seu site não existe para substituir sua autoridade.<br />
          <span className="text-neutral-600 font-normal">Ele existe para apresentá-la.</span>
        </h2>

        <div className="mt-10 rounded-2xl border border-neutral-200/90 bg-neutral-50/70 p-8 sm:p-12 text-left max-w-3xl mx-auto">
          <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p className="text-neutral-800 font-medium">
              O site não cria experiência que você não possui.
            </p>
            <p className="text-neutral-800 font-medium">
              Não inventa resultados.
            </p>
            <p className="text-neutral-800 font-medium">
              Não transforma alguém em expert.
            </p>
            <div className="pt-4 border-t border-neutral-200 text-neutral-950 font-semibold text-lg sm:text-xl font-serif">
              Ele simplesmente cria uma estrutura profissional para mostrar aquilo que você já construiu.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
