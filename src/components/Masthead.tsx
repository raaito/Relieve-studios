import React, { useState, useEffect } from 'react';

interface MastheadProps {
  onOpenBooking: () => void;
}

export const Masthead: React.FC<MastheadProps> = ({ onOpenBooking }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Update local Kaduna time (West Africa Time, UTC+1)
    const updateTime = () => {
      const now = new Date();
      // Format as WAT / Kaduna local time
      const timeStr = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="masthead"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4F1E1]/95 backdrop-blur-md py-3 hairline-b'
          : 'bg-[#F4F1E1]/80 backdrop-blur-sm py-4 hairline-b'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Wordmark & Location */}
        <div className="flex items-baseline space-x-4">
          <a
            href="#"
            id="masthead-logo"
            className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1817] hover:text-[#630D16] transition-colors"
          >
            RELEVÉ
          </a>
          <span className="hidden sm:inline-block text-[11px] font-sans text-[#1A1817]/60 uppercase tracking-widest">
            Barnawa · Kaduna
          </span>
        </div>

        {/* Center: Program edition & Kaduna Time */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-sans text-[#1A1817]/70">
          <span className="italic font-serif text-[#1A1817]/60">
            Académie de Danse & Musique
          </span>
          <span className="text-[#1A1817]/30">/</span>
          <span>
            Kaduna <span className="font-mono text-[#1A1817] font-medium">{currentTime || '12:00:00'}</span> WAT
          </span>
        </div>

        {/* Right: Navigation & CTA */}
        <div className="flex items-center space-x-6">
          <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-widest text-[#1A1817]/80 font-medium">
            <a href="#manifesto" className="hover:text-[#630D16] transition-colors">Manifesto</a>
            <a href="#disciplines" className="hover:text-[#630D16] transition-colors">Disciplines</a>
            <a href="#studio" className="hover:text-[#630D16] transition-colors">The Atelier</a>
            <a href="#program" className="hover:text-[#630D16] transition-colors">Schedule</a>
          </nav>

          <button
            id="btn-masthead-trial"
            onClick={onOpenBooking}
            className="px-4 py-2 bg-[#630D16] text-[#F4F1E1] text-xs font-sans tracking-wider uppercase font-medium hover:bg-[#7A121D] transition-colors cursor-pointer"
          >
            Book Trial
          </button>
        </div>
      </div>
    </header>
  );
};
