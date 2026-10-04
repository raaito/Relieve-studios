import React from 'react';
import { motion } from 'motion/react';

export const Manifesto: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF8EE] text-[#1A1817] transition-colors border-t border-[#1A1817]/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Folio / Header Line */}
        <div className="pb-8 border-b border-[#1A1817]/20 flex flex-wrap items-baseline justify-between text-xs text-[#1A1817]/60 font-sans">
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Section II · The Manifesto</span>
          </div>
          <div className="hidden sm:block italic font-serif text-[#1A1817]/70">
            The Stance of the Atelier
          </div>
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Barnawa · Kaduna South</span>
          </div>
        </div>

        {/* Asymmetric Two-Column Editorial Spread */}
        <div className="pt-16 sm:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monumental Editorial Pull-Quote */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="block text-xs uppercase tracking-widest text-[#630D16] font-semibold mb-6">
                  Artistic Directive
                </span>
                <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[#1A1817] tracking-tight">
                  “Kaduna's dancers deserve training measured against Lagos, London, and Lyon — not against whatever happens to be locally convenient.”
                </blockquote>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 sm:mt-12 pt-8 border-t border-[#1A1817]/20 max-w-md text-xs font-sans text-[#1A1817]/70"
            >
              <p className="font-serif italic text-base text-[#1A1817] font-semibold">
                Amina Bello
              </p>
              <p className="mt-1 leading-relaxed">
                Founder & Artistic Director, Relevé · Formerly Conservatoire de Danse
              </p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Stance & The Three Pillars */}
          <div className="lg:col-span-5 lg:pl-6 space-y-8 text-sm sm:text-base text-[#1A1817]/85 font-sans leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="font-serif italic text-lg sm:text-xl text-[#1A1817] leading-snug">
                We do not operate as an after-school hobby room. Relevé is an atelier founded on physical rigor, classical anatomy, and uncompromising ambition.
              </p>
              <p className="text-[#1A1817]/80">
                Too often, regional dance education settles for loose enthusiasm. We believe young artists in northern Nigeria possess extraordinary kinetic intelligence that deserves conservatory-grade technique from their very first plié.
              </p>
              <p className="text-[#1A1817]/80">
                Whether a student aspires to audition for the Royal Ballet, join an international contemporary company, or pioneer the global dialogue of West African movement, they leave our floor with impeccable placement, clean lines, and deep musicality.
              </p>
            </motion.div>

            {/* Editorial Standard Hairline List */}
            <div className="pt-8 border-t border-[#1A1817]/20 space-y-6">
              <div>
                <h3 className="font-serif text-lg text-[#1A1817] font-medium">
                  Sprung Flooring & Joint Longevity
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#1A1817]/70 leading-normal">
                  No concrete or tile. Our studio features custom sprung European birch under performance vinyl to ensure young tendons and joints can withstand vocational repetition safely.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-[#1A1817] font-medium">
                  Live Phrasing & Acoustic Discipline
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#1A1817]/70 leading-normal">
                  Dancers train to live piano and master polyrhythmic drumming. We do not drill choreography over distorted Bluetooth speakers.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-[#1A1817] font-medium">
                  Strict Cohort Limits
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#1A1817]/70 leading-normal">
                  Ateliers are capped at 12 students. Every dancer receives individual anatomical adjustments, spinal corrections, and weekly faculty assessments.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
