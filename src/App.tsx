import React, { useState } from 'react';
import { Masthead } from './components/Masthead';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { DisciplinesIndex } from './components/DisciplinesIndex';
import { StudioAtelier } from './components/StudioAtelier';
import { ScheduleProgram } from './components/ScheduleProgram';
import { ContactFooter } from './components/ContactFooter';
import { TrialBookingModal } from './components/TrialBookingModal';
import { DisciplineId } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineId>('ballet');

  const handleOpenBooking = (discipline: DisciplineId = 'ballet') => {
    setSelectedDiscipline(discipline);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F1E1] text-[#1A1817] font-sans selection:bg-[#630D16] selection:text-[#F4F1E1]">
      {/* Editorial Masthead */}
      <Masthead onOpenBooking={() => handleOpenBooking('ballet')} />

      {/* Main Editorial Flow */}
      <main>
        {/* 1. Hero: Signature "Relevé" Rise Reveal */}
        <Hero onOpenBooking={() => handleOpenBooking('ballet')} />

        {/* 2. Manifesto: Asymmetric Pull-Quote & Brand Stance (Warm Paper Stock) */}
        <Manifesto />

        {/* 3. Disciplines: Magazine Index / Table of Contents (Dark Ink Stock) */}
        <DisciplinesIndex onSelectDisciplineForTrial={handleOpenBooking} />

        {/* 4. The Studio & Atelier: 5B Gwari Avenue, Sprung Floor, Capped Ateliers (Warm Paper Stock) */}
        <StudioAtelier onOpenBooking={() => handleOpenBooking('ballet')} />

        {/* 5. Schedule & Timetable: Weekly Atelier Rehearsal Call (Dark Ink Stock) */}
        <ScheduleProgram onOpenBooking={() => handleOpenBooking('ballet')} />

        {/* 6. CTA & Contact: The Floor is Waiting (Dark Ink Stock with Oxblood Action) */}
        <ContactFooter onOpenBooking={() => handleOpenBooking('ballet')} />
      </main>

      {/* Interactive Saturday Placement Audition Booking Drawer/Modal */}
      <TrialBookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultDiscipline={selectedDiscipline}
      />
    </div>
  );
}
