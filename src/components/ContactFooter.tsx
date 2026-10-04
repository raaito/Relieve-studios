import React from 'react';
import { motion } from 'motion/react';

interface ContactFooterProps {
  onOpenBooking: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenBooking }) => {
  return (
    <footer
      id="contact"
      className="bg-[#1A1817] text-[#F4F1E1] pt-24 sm:pt-32 pb-16 px-6 sm:px-8 lg:px-12 border-t border-[#1A1817]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Folio */}
        <div className="pb-8 border-b border-[#F4F1E1]/15 flex flex-wrap items-baseline justify-between text-xs text-[#F4F1E1]/60 font-sans">
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Section VI · Admissions & Inquiries</span>
          </div>
          <div className="hidden sm:block italic font-serif text-[#F4F1E1]/70">
            Admissions Office · Barnawa Atelier
          </div>
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Direct Inquiries & Auditions</span>
          </div>
        </div>

        {/* The Bold Closing Line (CTA Hero) with Asymmetric Atmospheric Studio Image */}
        <div className="py-16 sm:py-24 border-b border-[#F4F1E1]/15 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-[#F4F1E1]"
            >
              The floor is waiting.
            </motion.h2>
            
            <p className="mt-6 text-lg sm:text-xl text-[#F4F1E1]/80 font-serif italic max-w-2xl">
              Auditions, trial assessments, and private studio tours take place weekly at our Barnawa atelier.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                id="btn-footer-trial"
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#630D16] hover:bg-[#7A121D] text-[#F4F1E1] text-xs font-sans uppercase tracking-widest font-medium transition-colors cursor-pointer"
              >
                Book a Saturday Placement Class
              </button>

              <a
                href="https://wa.me/2348034928810?text=Hello%20Relev%C3%A9%20Kaduna%2C%20I%20would%20like%20to%20inquire%20about%20classes%20and%20auditions."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[#F4F1E1]/80 hover:text-[#F4F1E1] transition-colors underline underline-offset-8 decoration-[#F4F1E1]/30 hover:decoration-[#F4F1E1]"
              >
                Inquire on WhatsApp (+234 803 492 8810)
              </a>
            </div>
          </div>

          {/* Atmospheric Closing Studio Photograph */}
          <div className="lg:col-span-5">
            <div className="border border-[#F4F1E1]/20 p-2.5 bg-[#201D1C]">
              <div className="aspect-[16/10] overflow-hidden bg-[#1A1817]">
                <img
                  src="/src/assets/images/releve_closing_studio_1788337260710.jpg"
                  alt="Empty Relevé dance studio at dusk with brass barre and sprung floor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-115 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-3 px-1 flex justify-between items-baseline text-[11px] text-[#F4F1E1]/60 font-sans">
                <span>Atelier Dusk · End of Rehearsal</span>
                <span className="italic font-serif">5B Gwari Avenue</span>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Fields & Editorial Index Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs font-sans">
          
          {/* Location */}
          <div>
            <span className="block text-[#F4F1E1]/50 uppercase tracking-widest text-[10px] mb-3 font-semibold">
              The Studio Address
            </span>
            <p className="font-serif text-base text-[#F4F1E1] font-normal">
              5B Gwari Avenue
            </p>
            <p className="mt-1 text-[#F4F1E1]/70 leading-relaxed">
              Barnawa Residential District<br />
              Kaduna South, Kaduna State<br />
              Nigeria
            </p>
          </div>

          {/* Telephony & Messaging */}
          <div>
            <span className="block text-[#F4F1E1]/50 uppercase tracking-widest text-[10px] mb-3 font-semibold">
              Direct Communication
            </span>
            <div className="space-y-2">
              <p>
                <span className="text-[#F4F1E1]/50">Phone: </span>
                <a href="tel:+2348034928810" className="hover:text-[#F4F1E1] font-mono text-[#F4F1E1]/90 transition-colors">
                  +234 (0) 803 492 8810
                </a>
              </p>
              <p>
                <span className="text-[#F4F1E1]/50">WhatsApp: </span>
                <a href="https://wa.me/2348034928810" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F1E1] font-mono text-[#F4F1E1]/90 transition-colors">
                  +234 (0) 803 492 8810
                </a>
              </p>
              <p>
                <span className="text-[#F4F1E1]/50">Email: </span>
                <a href="mailto:admissions@relevekaduna.com" className="hover:text-[#F4F1E1] text-[#F4F1E1]/90 transition-colors">
                  admissions@relevekaduna.com
                </a>
              </p>
            </div>
          </div>

          {/* Studio Hours */}
          <div>
            <span className="block text-[#F4F1E1]/50 uppercase tracking-widest text-[10px] mb-3 font-semibold">
              Hours of Instruction
            </span>
            <div className="space-y-1 text-[#F4F1E1]/80">
              <div className="flex justify-between">
                <span>Tuesday – Friday</span>
                <span className="font-mono text-[#F4F1E1]/60">14:00 – 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-mono text-[#F4F1E1]/60">08:30 – 18:00</span>
              </div>
              <div className="flex justify-between text-[#F4F1E1]/40">
                <span>Sunday & Monday</span>
                <span>Atelier Closed</span>
              </div>
            </div>
          </div>

          {/* Social & Dispatch */}
          <div>
            <span className="block text-[#F4F1E1]/50 uppercase tracking-widest text-[10px] mb-3 font-semibold">
              Editorial & Journal
            </span>
            <div className="space-y-2">
              <p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-serif text-[#F4F1E1] hover:text-[#630D16] transition-colors"
                >
                  @releve.kaduna
                </a>
              </p>
              <p className="text-[11px] text-[#F4F1E1]/60 leading-normal">
                Follow our rehearsals, masterclass guest announcements, and annual performance records.
              </p>
            </div>
          </div>

        </div>

        {/* Colophon & Bottom Masthead */}
        <div className="pt-12 border-t border-[#F4F1E1]/10 flex flex-wrap items-center justify-between gap-6 text-[11px] text-[#F4F1E1]/50 font-sans">
          <div className="flex items-center space-x-4">
            <span className="font-serif font-bold text-sm text-[#F4F1E1]/90 tracking-tight">RELEVÉ</span>
            <span>·</span>
            <span>Atelier de Danse & Musique, Kaduna</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Relevé. All Rights Reserved. Rigorous Training for West African Artists.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
