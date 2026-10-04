import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_SPECS } from '../data/curriculum';

interface StudioAtelierProps {
  onOpenBooking: () => void;
}

export const StudioAtelier: React.FC<StudioAtelierProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="studio"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF8EE] text-[#1A1817] border-t border-[#1A1817]/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Folio */}
        <div className="pb-8 border-b border-[#1A1817]/20 flex flex-wrap items-baseline justify-between text-xs text-[#1A1817]/60 font-sans">
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Section IV · The Atelier & Infrastructure</span>
          </div>
          <div className="hidden sm:block italic font-serif text-[#1A1817]/70">
            5B Gwari Avenue · Barnawa, Kaduna South
          </div>
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Engineered for Pointe & High Impact</span>
          </div>
        </div>

        {/* Headline & Location Lead */}
        <div className="pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1A1817]"
            >
              The Floor & Atelier
            </motion.h2>
            <p className="mt-4 text-base sm:text-lg text-[#1A1817]/80 font-serif italic max-w-2xl">
              Dance cannot happen on tile or unforgiving concrete. Our space is custom-engineered to eliminate joint fatigue and allow dancers to take flight safely.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-block text-left p-4 bg-[#F4F1E1] border border-[#1A1817]/15">
              <span className="block text-[10px] uppercase tracking-widest text-[#630D16] font-semibold">
                Physical Location
              </span>
              <p className="font-serif text-sm font-semibold text-[#1A1817] mt-1">
                5B Gwari Avenue
              </p>
              <p className="text-xs text-[#1A1817]/70 font-sans">
                Barnawa, Kaduna South, Kaduna State
              </p>
            </div>
          </div>
        </div>

        {/* Architectural Image & Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left / Top: Studio Interior Photography */}
          <div className="lg:col-span-7">
            <div className="relative border border-[#1A1817]/20 p-2 sm:p-3 bg-[#F4F1E1]">
              <div className="aspect-[16/10] overflow-hidden bg-[#E8E4D0]">
                <img
                  src="/images/studio_space.jpg"
                  alt="Relevé dance atelier at 5B Gwari Avenue, Barnawa, Kaduna"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-110 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-3 px-1 flex justify-between items-baseline text-[11px] text-[#1A1817]/70 font-sans">
                <span className="font-medium">Figure 02 · Main Rehearsal Atelier & Brass Barres</span>
                <span className="italic font-serif">Natural Northern Light Exposure</span>
              </div>
            </div>

            {/* Trial Class Notice Box */}
            <div className="mt-8 p-6 sm:p-8 bg-[#1A1817] text-[#F4F1E1] border border-[#1A1817]">
              <span className="block text-xs uppercase tracking-widest text-[#F4F1E1]/60 font-sans mb-2">
                Open Saturday Trial Classes
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#F4F1E1]">
                Experience the Floor in Person
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#F4F1E1]/75 font-sans leading-relaxed">
                We invite serious students and parents to attend an introductory assessment every Saturday morning at 09:00. The session includes an anatomical placement check, barre observation, and curriculum advisement.
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <button
                  id="btn-atelier-trial"
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 bg-[#630D16] hover:bg-[#7A121D] text-[#F4F1E1] text-xs font-sans uppercase tracking-widest font-medium transition-colors cursor-pointer"
                >
                  Reserve Saturday Audition
                </button>
              </div>
            </div>
          </div>

          {/* Right: Technical Specifications */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-t border-[#1A1817]/20 pt-2">
              <h3 className="font-serif text-xl text-[#1A1817] mb-6">
                Technical Facility Specifications
              </h3>
              
              <div className="space-y-6">
                {STUDIO_SPECS.map((spec, index) => (
                  <div key={index} className="pb-6 border-b border-[#1A1817]/15">
                    <div className="flex justify-between items-baseline text-xs text-[#630D16] font-semibold uppercase tracking-wider mb-1">
                      <span>{spec.category}</span>
                    </div>
                    <h4 className="font-serif text-lg text-[#1A1817] font-medium">
                      {spec.spec}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#1A1817]/70 font-sans leading-relaxed">
                      {spec.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions & Access */}
            <div className="p-6 bg-[#F4F1E1] border border-[#1A1817]/15 text-xs text-[#1A1817]/80 font-sans space-y-2">
              <h4 className="font-serif text-base text-[#1A1817] font-medium">
                Visiting Relevé
              </h4>
              <p className="leading-relaxed text-[#1A1817]/75">
                Located along Gwari Avenue in Barnawa Residential District, easily accessible from Stadium Roundabout, Queen Amina Way, and Kaduna South central corridors.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-[11px] font-mono text-[#1A1817]/70">
                <span>Secure On-Site Parking</span>
                <span>·</span>
                <span>Dressing Rooms & Lockers</span>
                <span>·</span>
                <span>Parent Viewing Gallery</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
