import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { COUNTDOWN_DAYS, PRE_SALE_PRICE } from '../data/content';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: COUNTDOWN_DAYS,
    hours: 14,
    minutes: 38,
    seconds: 45,
  });

  useEffect(() => {
    // 21 days countdown target stored in localStorage for continuity
    const STORAGE_KEY = 'ep_launch_countdown_v2';
    let targetEpoch: number;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      targetEpoch = parseInt(stored, 10);
    } else {
      // 21 days from now
      targetEpoch = Date.now() + COUNTDOWN_DAYS * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, targetEpoch.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, targetEpoch - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format launch date target (21 days from reference)
  const launchDateString = new Date(Date.now() + COUNTDOWN_DAYS * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
  });

  return (
    <div className="w-full border-y border-[#262626] bg-[#0E0E0E]/90 backdrop-blur-md py-4 px-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Milestone & Lote Status */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#181818] border border-[#C86D51]/40 text-[#E07A5F]">
            <Clock className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#E07A5F] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E07A5F]">
                PRÉ-VENDA OFICIAL • LOTE 01
              </span>
            </div>
          </div>
        </div>

        {/* Center: Live 21 Days Countdown with Hours, Minutes, Seconds */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono">
          {/* Days */}
          <div className="flex flex-col items-center rounded-lg border border-[#2A2A2A] bg-[#141414] px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[58px] sm:min-w-[64px]">
            <span className="text-lg sm:text-xl font-bold text-metallic-terracotta">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-sans">
              Dias
            </span>
          </div>

          <span className="text-sm font-bold text-[#C86D51]">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center rounded-lg border border-[#2A2A2A] bg-[#141414] px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[58px] sm:min-w-[64px]">
            <span className="text-lg sm:text-xl font-bold text-metallic-terracotta">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-sans">
              Horas
            </span>
          </div>

          <span className="text-sm font-bold text-[#C86D51]">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center rounded-lg border border-[#2A2A2A] bg-[#141414] px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[58px] sm:min-w-[64px]">
            <span className="text-lg sm:text-xl font-bold text-metallic-terracotta">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-sans">
              Min
            </span>
          </div>

          <span className="text-sm font-bold text-[#C86D51]">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center rounded-lg border border-[#2A2A2A] bg-[#141414] px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[58px] sm:min-w-[64px]">
            <span className="text-lg sm:text-xl font-bold text-metallic-terracotta">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-sans">
              Seg
            </span>
          </div>
        </div>

        {/* Right: Price Opportunity Badge */}
        <div className="hidden lg:flex items-center gap-2.5 rounded-full border border-[#C86D51]/40 bg-[#161210] px-4 py-1.5 text-xs">
          <Calendar className="h-3.5 w-3.5 text-[#E07A5F]" />
          <span className="text-neutral-300">Pré-venda ativa:</span>
          <span className="font-mono font-bold text-[#E07A5F]">{PRE_SALE_PRICE}</span>
        </div>
      </div>
    </div>
  );
};
