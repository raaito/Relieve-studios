import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DisciplineId, TrialBookingState } from '../types';
import { DISCIPLINES } from '../data/curriculum';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDiscipline?: DisciplineId;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  isOpen,
  onClose,
  defaultDiscipline = 'ballet'
}) => {
  const [formData, setFormData] = useState<TrialBookingState>({
    dancerName: '',
    age: '',
    discipline: defaultDiscipline,
    experienceLevel: 'Beginner / First Steps',
    contactName: '',
    phone: '',
    email: '',
    preferredDate: 'Upcoming Saturday (09:00 WAT)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (defaultDiscipline) {
      setFormData(prev => ({ ...prev, discipline: defaultDiscipline }));
    }
  }, [defaultDiscipline]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNumber = `RLV-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refNumber);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#F4F1E1] text-[#1A1817] border border-[#1A1817]/25 shadow-2xl p-6 sm:p-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 text-xs uppercase tracking-widest text-[#1A1817]/60 hover:text-[#630D16] font-mono cursor-pointer"
            >
              [Close ✕]
            </button>

            {!submitted ? (
              <div>
                {/* Header */}
                <div className="border-b border-[#1A1817]/20 pb-6 mb-8">
                  <span className="text-xs uppercase tracking-widest text-[#630D16] font-semibold">
                    Studio Admission Protocol
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1817] font-normal mt-1">
                    Request Saturday Placement Class
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#1A1817]/75 font-sans">
                    Every new dancer undergoes a 45-minute placement session at our Barnawa atelier to determine faculty assignment, grade level, and physical alignment.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm font-sans">
                  {/* Dancer Name & Age */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="dancerName" className="block text-xs uppercase tracking-wider text-[#1A1817]/70 mb-1">
                        Dancer's Full Name *
                      </label>
                      <input
                        id="dancerName"
                        name="dancerName"
                        type="text"
                        required
                        value={formData.dancerName}
                        onChange={handleChange}
                        placeholder="e.g. Maryam Danjuma"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8EE] border border-[#1A1817]/20 text-[#1A1817] placeholder-[#1A1817]/40 focus:outline-none focus:border-[#630D16]"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-xs uppercase tracking-wider text-[#1A1817]/70 mb-1">
                        Age *
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="text"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 11 years"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8EE] border border-[#1A1817]/20 text-[#1A1817] placeholder-[#1A1817]/40 focus:outline-none focus:border-[#630D16]"
                      />
                    </div>
                  </div>

                  {/* Discipline & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="discipline" className="block text-xs uppercase tracking-wider text-[#1A1817]/70 mb-1">
                        Discipline of Interest *
                      </label>
                      <select
                        id="discipline"
                        name="discipline"
                        value={formData.discipline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8EE] border border-[#1A1817]/20 text-[#1A1817] focus:outline-none focus:border-[#630D16]"
                      >
                        {DISCIPLINES.map(d => (
                          <option key={d.id} value={d.id}>
                            {d.title} ({d.ageRange.split('·')[0]})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experienceLevel" className="block text-xs uppercase tracking-wider text-[#1A1817]/70 mb-1">
                        Prior Dance Experience
                      </label>
                      <select
                        id="experienceLevel"
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8EE] border border-[#1A1817]/20 text-[#1A1817] focus:outline-none focus:border-[#630D16]"
                      >
                        <option value="Beginner / First Steps">No formal training (Beginner)</option>
                        <option value="1-3 Years Recreational">1–3 Years studio foundation</option>
                        <option value="4+ Years Graded Syllabus">4+ Years graded syllabus (RAD/ISTD)</option>
                        <option value="Vocational / Pre-Professional">Vocational / Pre-Professional Track</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#1A1817]/70 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 803 000 0000"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8EE] border border-[#1A1817]/20 text-[#1A1817] placeholder-[#1A1817]/40 focus:outline-none focus:border-[#630D16]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#1A1817]/70 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8EE] border border-[#1A1817]/20 text-[#1A1817] placeholder-[#1A1817]/40 focus:outline-none focus:border-[#630D16]"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-xs uppercase tracking-wider text-[#1A1817]/70 mb-1">
                      Specific Notes, Inquiries or Prior Injuries (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Interested in pointe readiness assessment or piano theory combination."
                      className="w-full px-3.5 py-2 bg-[#FAF8EE] border border-[#1A1817]/20 text-[#1A1817] placeholder-[#1A1817]/40 focus:outline-none focus:border-[#630D16]"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-4 border-t border-[#1A1817]/20 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-[#1A1817]/60">
                      Studio location: 5B Gwari Avenue, Barnawa, Kaduna South.
                    </p>
                    <button
                      type="submit"
                      id="btn-submit-booking"
                      className="px-6 py-3 bg-[#630D16] hover:bg-[#7A121D] text-[#F4F1E1] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                    >
                      Confirm Audition Request
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Placement Pass / Confirmation Card */
              <div className="text-center py-6">
                <div className="inline-block p-2 px-4 bg-[#630D16] text-[#F4F1E1] text-xs font-mono uppercase tracking-widest mb-4">
                  Pass Ref: {bookingRef}
                </div>
                
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1817] font-normal">
                  Placement Class Confirmed
                </h3>
                
                <p className="mt-3 text-sm text-[#1A1817]/80 max-w-md mx-auto">
                  We have reserved a placement spot for <strong className="font-serif text-base text-[#1A1817]">{formData.dancerName || 'the dancer'}</strong>. Our admissions team will send a WhatsApp confirmation with wardrobe guidelines.
                </p>

                {/* Editorial Program Slip */}
                <div className="my-6 p-6 bg-[#FAF8EE] border border-[#1A1817]/20 text-left font-sans text-xs space-y-3 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-[#1A1817]/10 pb-2">
                    <span className="text-[#1A1817]/60">Studio Hall:</span>
                    <span className="font-medium text-[#1A1817]">Studio 1 (Harlequin Sprung Floor)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1A1817]/10 pb-2">
                    <span className="text-[#1A1817]/60">Schedule:</span>
                    <span className="font-medium text-[#1A1817]">This Saturday · 08:45 Call for 09:00 Barre</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1A1817]/10 pb-2">
                    <span className="text-[#1A1817]/60">Address:</span>
                    <span className="font-medium text-[#1A1817]">5B Gwari Avenue, Barnawa, Kaduna South</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1A1817]/60">Attire:</span>
                    <span className="font-medium text-[#1A1817]">Fitted dancewear / athletic apparel, clean socks</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#1A1817] hover:bg-[#2A2725] text-[#F4F1E1] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Return to Program
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
