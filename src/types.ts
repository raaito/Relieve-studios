export type DisciplineId = 'ballet' | 'contemporary' | 'afro' | 'hiphop' | 'music';

export interface Discipline {
  id: DisciplineId;
  title: string;
  frenchSubtitle: string;
  ageRange: string;
  oneLiner: string;
  imageSrc: string;
  syllabus: {
    focus: string;
    weeklyHours: string;
    classCap: number;
    attire: string;
    examination: string;
    curriculumSummary: string;
  };
}

export interface StudioSpec {
  category: string;
  spec: string;
  detail: string;
}

export interface ScheduleEntry {
  day: string;
  time: string;
  discipline: string;
  level: string;
  instructor: string;
  studio: string;
}

export interface TrialBookingState {
  dancerName: string;
  age: string;
  discipline: DisciplineId;
  experienceLevel: string;
  contactName: string;
  phone: string;
  email: string;
  preferredDate: string;
  notes: string;
}
