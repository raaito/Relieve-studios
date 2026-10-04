import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DISCIPLINES } from '../data/curriculum';
import { DisciplineId } from '../types';

interface DisciplinesIndexProps {
  onSelectDisciplineForTrial: (id: DisciplineId) => void;
}

export const DisciplinesIndex: React.FC<DisciplinesIndexProps> = ({ onSelectDisciplineForTrial }) => {
  const [activeDisciplineId, setActiveDisciplineId] = useState<DisciplineId>('ballet');
  const [expandedId, setExpandedId] = useState<DisciplineId | null>('ballet');

  const activeDiscipline = DISCIPLINES.find(d => d.id === activeDisciplineId) || DISCIPLINES[0];

  const handleRowClick = (id: DisciplineId) => {
    setActiveDisciplineId(id);
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id="disciplines"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#1A1817] text-[#F4F1E1] border-t border-[#1A1817]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Folio */}
        <div className="pb-8 border-b border-[#F4F1E1]/15 flex flex-wrap items-baseline justify-between text-xs text-[#F4F1E1]/60 font-sans">
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Section III · Index of Disciplines</span>
          </div>
          <div className="hidden sm:block italic font-serif text-[#F4F1E1]/70">
            Atelier Syllabus · 2026/2027 Academic Year
          </div>
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Classical, Contemporary, African & Musical Studies</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="pt-12 pb-16 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F4F1E1]"
          >
            The Disciplines
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-[#F4F1E1]/75 font-sans leading-relaxed">
            Every department operates under a formal syllabus designed to bridge foundational anatomy with expressive command. Select any discipline to inspect requirements, plate photography, and curriculum pathways.
          </p>
        </div>

        {/* Asymmetric Magazine Spread: Table of Contents alongside Active Photographic Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left / Main: The Magazine Table of Contents / Index */}
          <div className="lg:col-span-8 border-t border-[#F4F1E1]/15">
            {DISCIPLINES.map((discipline, index) => {
              const isExpanded = expandedId === discipline.id;
              const isSelected = activeDisciplineId === discipline.id;
              const indexNumber = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={discipline.id}
                  id={`discipline-${discipline.id}`}
                  className={`border-b border-[#F4F1E1]/15 transition-colors ${
                    isSelected ? 'bg-[#242120]' : 'hover:bg-[#201D1C]'
                  }`}
                >
                  {/* Main Index Row */}
                  <div
                    onClick={() => handleRowClick(discipline.id)}
                    className="py-7 sm:py-8 cursor-pointer px-3 sm:px-5 group"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-baseline">
                      
                      {/* Title & French subtitle */}
                      <div className="sm:col-span-6 flex flex-col">
                        <div className="flex items-baseline space-x-3">
                          <span className="font-mono text-xs text-[#630D16] font-semibold">{indexNumber}.</span>
                          <span className="font-serif text-2xl sm:text-3xl text-[#F4F1E1] group-hover:text-[#F4F1E1] transition-colors">
                            {discipline.title}
                          </span>
                        </div>
                        <span className="mt-1 text-xs text-[#F4F1E1]/50 font-serif italic pl-7">
                          {discipline.frenchSubtitle}
                        </span>
                      </div>

                      {/* Age Range Badge */}
                      <div className="sm:col-span-3 text-xs text-[#F4F1E1]/80 font-sans">
                        <span className="inline-block px-2.5 py-1 bg-[#1A1817] border border-[#F4F1E1]/20 text-[#F4F1E1]/90 text-xs font-mono">
                          {discipline.ageRange}
                        </span>
                      </div>

                      {/* Toggle Indicator */}
                      <div className="sm:col-span-3 flex sm:justify-end items-center space-x-2 text-xs uppercase tracking-widest text-[#F4F1E1]/60 group-hover:text-[#F4F1E1] transition-colors font-medium">
                        <span>{isExpanded ? 'Close Folio' : 'Examine Syllabus'}</span>
                        <span className="font-mono text-sm">{isExpanded ? '−' : '+'}</span>
                      </div>
                    </div>

                    {/* One-Liner Description */}
                    <div className="mt-3 pl-7 max-w-2xl">
                      <p className="text-sm text-[#F4F1E1]/70 font-sans leading-relaxed">
                        {discipline.oneLiner}
                      </p>
                    </div>

                    {/* Mobile Inline Discipline Study Thumbnail */}
                    <div className="mt-4 pl-7 lg:hidden">
                      <div className="w-full max-w-sm aspect-[4/3] overflow-hidden border border-[#F4F1E1]/20 bg-[#242120] my-2">
                        <img
                          src={discipline.imageSrc}
                          alt={`${discipline.title} visual study`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale contrast-125"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Editorial Syllabus Folio */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-4 px-4 sm:px-6 bg-[#171514] border-t border-[#F4F1E1]/15">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#F4F1E1]/80 font-sans">
                            
                            <div className="p-4 bg-[#201D1C] border border-[#F4F1E1]/15">
                              <span className="block text-[#F4F1E1]/50 uppercase tracking-wider text-[10px] mb-1 font-semibold">
                                Technical Focus
                              </span>
                              <p className="font-serif text-sm text-[#F4F1E1] font-medium">
                                {discipline.syllabus.focus}
                              </p>
                            </div>

                            <div className="p-4 bg-[#201D1C] border border-[#F4F1E1]/15">
                              <span className="block text-[#F4F1E1]/50 uppercase tracking-wider text-[10px] mb-1 font-semibold">
                                Time Commitment & Cap
                              </span>
                              <p className="font-serif text-sm text-[#F4F1E1] font-medium">
                                {discipline.syllabus.weeklyHours}
                              </p>
                              <p className="mt-1 text-[11px] text-[#F4F1E1]/60">
                                Cohort strictly capped at {discipline.syllabus.classCap} dancers
                              </p>
                            </div>

                            <div className="p-4 bg-[#201D1C] border border-[#F4F1E1]/15">
                              <span className="block text-[#F4F1E1]/50 uppercase tracking-wider text-[10px] mb-1 font-semibold">
                                Dress & Rehearsal Code
                              </span>
                              <p className="text-[11px] leading-relaxed text-[#F4F1E1]/85">
                                {discipline.syllabus.attire}
                              </p>
                            </div>

                            <div className="p-4 bg-[#201D1C] border border-[#F4F1E1]/15">
                              <span className="block text-[#F4F1E1]/50 uppercase tracking-wider text-[10px] mb-1 font-semibold">
                                Examination & Accreditation
                              </span>
                              <p className="text-[11px] leading-relaxed text-[#F4F1E1]/85">
                                {discipline.syllabus.examination}
                              </p>
                            </div>
                          </div>

                          {/* Summary & Placement Action */}
                          <div className="mt-6 pt-6 border-t border-[#F4F1E1]/15 flex flex-wrap items-center justify-between gap-4">
                            <p className="text-xs text-[#F4F1E1]/70 italic max-w-xl font-serif">
                              {discipline.syllabus.curriculumSummary}
                            </p>
                            <button
                              id={`btn-audition-${discipline.id}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectDisciplineForTrial(discipline.id);
                              }}
                              className="px-5 py-2.5 bg-[#630D16] hover:bg-[#7A121D] text-[#F4F1E1] text-xs font-sans uppercase tracking-widest font-medium transition-colors cursor-pointer"
                            >
                              Book Trial in {discipline.title.split(' ')[0]}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Asymmetric Editorial Discipline Plate Showcase (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="border border-[#F4F1E1]/20 p-3 bg-[#242120]">
              <div className="aspect-[3/4] overflow-hidden bg-[#1A1817]">
                <img
                  key={activeDiscipline.imageSrc}
                  src={activeDiscipline.imageSrc}
                  alt={`${activeDiscipline.title} editorial visual study`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 hover:scale-105"
                />
              </div>
              
              <div className="mt-4 px-1 space-y-1">
                <div className="flex justify-between items-baseline text-xs text-[#F4F1E1] font-sans">
                  <span className="font-serif text-lg font-medium">{activeDiscipline.title}</span>
                  <span className="font-mono text-[11px] text-[#F4F1E1]/60">Studio Plate</span>
                </div>
                <p className="text-xs text-[#F4F1E1]/65 font-serif italic">
                  {activeDiscipline.frenchSubtitle}
                </p>
                <div className="pt-2 border-t border-[#F4F1E1]/15 flex justify-between text-[11px] text-[#F4F1E1]/60 font-sans">
                  <span>{activeDiscipline.ageRange}</span>
                  <span>Cap: {activeDiscipline.syllabus.classCap} dancers</span>
                </div>
              </div>
            </div>

            {/* Editorial Plate Caption */}
            <div className="mt-4 px-2 text-[11px] text-[#F4F1E1]/50 font-sans flex justify-between">
              <span>Barnawa Conservatory Studies</span>
              <span>Photographic Plate Archive</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

