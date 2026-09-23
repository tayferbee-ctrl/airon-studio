import React, { useState } from 'react';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { Hero } from './components/Hero';
import { RealPainCards } from './components/RealPainCards';
import { RoiCalculator } from './components/RoiCalculator';
import { ManifestoBanner } from './components/ManifestoBanner';
import { ViradaSection } from './components/ViradaSection';
import { ProductDeliverables } from './components/ProductDeliverables';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PriceStructure } from './components/PriceStructure';
import { SupplyDemand } from './components/SupplyDemand';
import { ValueAnchoring } from './components/ValueAnchoring';
import { EcosystemFlow } from './components/EcosystemFlow';
import { Audience } from './components/Audience';
import { OfferCtaBlock } from './components/OfferCtaBlock';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { StickyBottomCta } from './components/StickyBottomCta';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 flex flex-col font-sans selection:bg-[#C86D51] selection:text-white overflow-x-hidden w-full relative">
      {/* 1. Header with Logo & Brand */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* 2. 21-Day Countdown Banner with Hours, Minutes, Seconds & Launch Status */}
      <CountdownTimer />

      <main className="flex-1">
        {/* 3. Hero Section with Dra. Giulia Alburquec Live Site Preview & Niche Switcher */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4. Real Pain Cards (Diversified loss perception, no repetitive phrasing) */}
        <RealPainCards />

        {/* 5. Interactive ROI & Lost Revenue Calculator */}
        <RoiCalculator onOpenBooking={handleOpenBooking} />

        {/* 6. Manifesto Banner (O site é o mesmo. O lote da contratação é que muda.) */}
        <ManifestoBanner />

        {/* 7. A Virada: Estrutura Própria (10 Pilares) */}
        <ViradaSection onOpenBooking={handleOpenBooking} />

        {/* 8. O Produto: 12 Entregáveis */}
        <ProductDeliverables />

        {/* 9. Fluxo de Criação em 4 Passos Descomplicados */}
        <ProcessTimeline onOpenBooking={handleOpenBooking} />

        {/* 10. Lotes & Pré-Venda: Lote 01 (R$ 297), Lote 02 (R$ 397), Lote 03 (R$ 497) */}
        <PriceStructure onOpenBooking={handleOpenBooking} />

        {/* 11. Dinâmica de Lotes & Ocupação de Agenda */}
        <SupplyDemand />

        {/* 12. Ancoragem de Valor: Agência (R$ 2.500+) vs. Pré-Venda (R$ 297) */}
        <ValueAnchoring />

        {/* 13. O Ecossistema: Instagram -> Site -> WhatsApp */}
        <EcosystemFlow />

        {/* 14. Para quem é este produto */}
        <Audience />

        {/* 15. Bloco de Oferta com Destaque de Pré-Venda */}
        <OfferCtaBlock onOpenBooking={handleOpenBooking} />

        {/* 16. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 17. CTA Final com Foco na Perda por Adiar */}
        <FinalCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* 18. Footer */}
      <Footer />

      {/* 19. Booking & Direct WhatsApp Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* 20. Floating Quick Action Bar on Scroll */}
      <StickyBottomCta onOpenBooking={handleOpenBooking} />
    </div>
  );
}

export default App;
