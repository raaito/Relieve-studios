import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SCHEDULE_PREVIEW } from '../data/curriculum';

interface ScheduleProgramProps {
  onOpenBooking: () => void;
}

export const ScheduleProgram: React.FC<ScheduleProgramProps> = ({ onOpenBooking }) => {
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const days = ['All', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const filteredSchedule = selectedDay === 'All'
    ? SCHEDULE_PREVIEW
    : SCHEDULE_PREVIEW.filter(item => item.day === selectedDay);

  return (
    <section
      id="program"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#F4F1E1] text-[#1A1817] border-t border-[#1A1817]/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Folio */}
        <div className="pb-8 border-b border-[#1A1817]/20 flex flex-wrap items-baseline justify-between text-xs text-[#1A1817]/60 font-sans">
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Section V · Atelier Timetable & Routine</span>
          </div>
          <div className="hidden sm:block italic font-serif text-[#1A1817]/70">
            Weekly Repertoire & Training Blocks
          </div>
          <div>
            <span className="uppercase text-[11px] font-medium tracking-wider">Barnawa Studios 1 & 2</span>
          </div>
        </div>

        {/* Header & Filter */}
        <div className="pt-12 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#1A1817]"
            >
              The Weekly Program
            </motion.h2>
            <p className="mt-3 text-sm text-[#1A1817]/75 font-sans max-w-xl leading-relaxed">
              Classes run in disciplined 75- to 120-minute blocks with strict punctuality. Dancers are expected at the barre 15 minutes prior to call.
            </p>
          </div>

          {/* Day Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-sans">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 transition-colors cursor-pointer text-xs font-medium tracking-wide ${
                  selectedDay === day
                    ? 'bg-[#1A1817] text-[#F4F1E1]'
                    : 'bg-[#FAF8EE] text-[#1A1817]/70 hover:text-[#1A1817] border border-[#1A1817]/15'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Timetable Hairline List */}
        <div className="border-t border-[#1A1817]/20">
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 text-xs font-sans uppercase tracking-widest text-[#1A1817]/50 border-b border-[#1A1817]/15">
            <span className="col-span-2">Day & Call Time</span>
            <span className="col-span-4">Discipline & Repertoire</span>
            <span className="col-span-3">Cohort Level</span>
            <span className="col-span-3 text-right">Faculty & Hall</span>
          </div>

          <div className="divide-y divide-[#1A1817]/15">
            {filteredSchedule.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-baseline hover:bg-[#FAF8EE] px-2 -mx-2 transition-colors"
              >
                {/* Day & Time */}
                <div className="md:col-span-2 flex md:flex-col justify-between items-baseline md:items-start text-xs font-sans">
                  <span className="font-semibold text-[#1A1817]">{entry.day}</span>
                  <span className="font-mono text-[#1A1817]/60 text-[11px]">{entry.time}</span>
                </div>

                {/* Discipline */}
                <div className="md:col-span-4">
                  <h4 className="font-serif text-lg sm:text-xl text-[#1A1817] font-normal">
                    {entry.discipline}
                  </h4>
                </div>

                {/* Level */}
                <div className="md:col-span-3 text-xs font-sans text-[#1A1817]/80">
                  <span className="inline-block px-2 py-0.5 bg-[#FAF8EE] border border-[#1A1817]/15 text-[11px] font-mono">
                    {entry.level}
                  </span>
                </div>

                {/* Instructor & Studio */}
                <div className="md:col-span-3 flex md:flex-col md:items-end justify-between text-xs font-sans text-[#1A1817]/70">
                  <span className="text-[#1A1817]/90 font-medium">{entry.instructor}</span>
                  <span className="text-[11px] text-[#1A1817]/50 italic font-serif">{entry.studio}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audition Notice */}
        <div className="mt-12 pt-8 border-t border-[#1A1817]/20 flex flex-wrap items-center justify-between gap-6 text-xs font-sans text-[#1A1817]/75">
          <p>
            Looking to join midway through the term? Placement assessments are arranged individually.
          </p>
          <button
            onClick={onOpenBooking}
            className="text-xs uppercase tracking-widest text-[#1A1817] underline underline-offset-8 decoration-[#630D16] hover:text-[#630D16] transition-colors cursor-pointer font-medium"
          >
            Inquire About Audition Availability
          </button>
        </div>

      </div>
    </section>
  );
};
