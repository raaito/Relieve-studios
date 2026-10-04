import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 px-6 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden bg-[#F4F1E1] text-[#1A1817]"
    >
      {/* Editorial top metadata line */}
      <div className="max-w-7xl mx-auto w-full pt-4 pb-6 flex flex-wrap items-center justify-between border-b border-[#1A1817]/20 text-xs text-[#1A1817]/70 tracking-wide font-sans">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#630D16]" />
          <span className="uppercase text-[11px] font-medium tracking-wider">Atelier No. 01 · Barnawa, Kaduna South</span>
        </div>
        <div className="hidden sm:block text-[#1A1817]/60 italic font-serif text-sm">
          Syllabus 2026/2027 · Auditions Open
        </div>
        <div className="uppercase text-[11px] font-medium tracking-wider text-[#1A1817]/70">
          <span>Classical · Contemporary · Afro · Music</span>
        </div>
      </div>

      {/* Main Asymmetric Hero Body */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        
        {/* Left / Center: The Monumental Rising Wordmark & Definition */}
        <div className="lg:col-span-8 flex flex-col justify-end">
          
          {/* Phonetic & Category Note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 flex items-center space-x-3 text-xs sm:text-sm text-[#1A1817]/60 font-sans tracking-wide"
          >
            <span className="font-mono text-[#1A1817]/80">/ʁə.lə.ve/</span>
            <span className="text-[#1A1817]/30">·</span>
            <span className="italic font-serif">ballet [noun & verb]</span>
          </motion.div>

          {/* THE SIGNATURE HERO REVEAL: Wordmark Rises Physically */}
          <div className="overflow-hidden pb-2 -mb-2">
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.3,
                ease: [0.16, 1, 0.3, 1], // Custom editorial spring-like rise
                delay: 0.1
              }}
              className="display-serif text-[18vw] sm:text-[15vw] lg:text-[11.5vw] leading-[0.88] font-light tracking-[-0.04em] text-[#1A1817] select-none"
            >
              Relevé
            </motion.h1>
          </div>

          {/* Definition line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-6 sm:mt-8 max-w-2xl"
          >
            <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#1A1817]/90 leading-snug">
              “the rise onto the ball of the foot — the moment before flight.”
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#1A1817]/75 font-sans leading-relaxed max-w-xl">
              Kaduna's premier conservatory for classical ballet, contemporary release, traditional West African polyphony, and acoustic musicianship.
            </p>
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6"
          >
            <button
              id="btn-hero-trial"
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#630D16] hover:bg-[#7A121D] text-[#F4F1E1] text-xs uppercase tracking-widest font-medium transition-all cursor-pointer shadow-none"
            >
              Request Saturday Placement Class
            </button>
            <a
              href="#disciplines"
              className="text-xs uppercase tracking-widest text-[#1A1817]/80 hover:text-[#630D16] transition-colors underline underline-offset-8 decoration-[#1A1817]/30 hover:decoration-[#630D16]"
            >
              Read the Disciplines
            </a>
          </motion.div>
        </div>

        {/* Right Column: Editorial Dancer Study Frame */}
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4 }}
            className="relative border border-[#1A1817]/20 p-2.5 bg-[#FAF8EE]"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#E8E4D0]">
              <img
                src="/images/hero_dancer.jpg"
                alt="Relevé dancer rising en pointe, studio study"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-3 px-1 flex justify-between items-baseline text-[11px] text-[#1A1817]/70 font-sans">
              <span className="font-medium">Plate 01 · Pointe Study</span>
              <span className="italic font-serif">Barnawa Studio</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Editorial bottom bar & Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex flex-wrap items-center justify-between border-t border-[#1A1817]/20 text-xs text-[#1A1817]/70 font-sans">
        <div className="hidden sm:flex items-center space-x-6">
          <span className="uppercase text-[11px] tracking-wider">5B Gwari Avenue</span>
          <span>·</span>
          <span className="uppercase text-[11px] tracking-wider">Barnawa, Kaduna South</span>
        </div>

        <a
          href="#manifesto"
          className="flex items-center space-x-3 text-xs tracking-wider text-[#1A1817]/80 hover:text-[#630D16] transition-colors uppercase font-medium"
        >
          <span>Scroll to read the program</span>
          <span className="inline-block w-4 h-px bg-[#1A1817]/40" />
        </a>
      </div>
    </section>
  );
};
