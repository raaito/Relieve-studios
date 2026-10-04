import { Discipline, StudioSpec, ScheduleEntry } from '../types';

export const DISCIPLINES: Discipline[] = [
  {
    id: 'ballet',
    title: 'Classical Ballet',
    frenchSubtitle: 'Danse Classique & Pointe',
    ageRange: 'Ages 4 – 18 & Conservatoire Atelier',
    oneLiner: 'Vaganova-grounded French technique focusing on turnout, spinal alignment, épaulement, and disciplined pointe work.',
    imageSrc: '/images/ballet_study.jpg',
    syllabus: {
      focus: 'Barre precision, port de bras, allegro elevation, grand pas, pointe preparation',
      weeklyHours: '4 to 12 hours / week depending on grade',
      classCap: 12,
      attire: 'Black camisole leotard, pink/skin-tone convertible tights, canvas split-sole shoes, Freed/Bloch pointe shoes upon faculty clearance.',
      examination: 'Royal Academy of Dance (RAD) & Imperial Society syllabi assessment pathways.',
      curriculumSummary: 'Dancers progress through systematic grades where anatomy, musical phrasing, and rigorous turnout are cultivated without compromise. From first pliés to advanced variation work, every student is trained for stage performance.'
    }
  },
  {
    id: 'contemporary',
    title: 'Contemporary & Release Technique',
    frenchSubtitle: 'Mouvement Contemporain',
    ageRange: 'Ages 10+ & Pre-Professional Ensemble',
    oneLiner: 'Floorwork fluency, kinetic weight transfer, release mechanics, and improvisational courage for the modern stage.',
    imageSrc: '/images/contemporary_study.jpg',
    syllabus: {
      focus: 'Cunningham spinal articulation, Graham contraction/release, contact improvisation, inverted partnering',
      weeklyHours: '4 to 8 hours / week',
      classCap: 12,
      attire: 'Form-fitting dark rehearsal unitard or leggings, bare feet or socks with grip zone.',
      examination: 'Annual choreographic showcase & audition portfolio curation.',
      curriculumSummary: 'Deconstructs classical lines to explore momentum, gravity, and raw emotional resonance. Students develop rapid kinetic reflexes and choreographic autonomy.'
    }
  },
  {
    id: 'afro',
    title: 'Afro & Traditional Movement',
    frenchSubtitle: 'Patrimoine & Polyrythmie',
    ageRange: 'All Ages · Youth to Advanced Ensemble',
    oneLiner: 'West African ancestral movement traditions, polyrhythmic footwork, and contemporary Afro-fusion driven by live percussion.',
    imageSrc: '/images/afro_study.jpg',
    syllabus: {
      focus: 'Grounding, thoracic isolation, Bata and Dundun rhythm dialogue, high-velocity footwork, ceremonial repertoire',
      weeklyHours: '3 to 6 hours / week',
      classCap: 14,
      attire: 'Comfortable studio athletic wear, traditional wrap/lappa for ceremonial studies, bare feet.',
      examination: 'Repertoire certification & seasonal masterclass performance.',
      curriculumSummary: 'Rooted in the complex polyrhythms of Northern and Western Nigeria while embracing Pan-African contemporary dance lineages. Dancers master the dialogue between heartbeat, live drum call, and body.'
    }
  },
  {
    id: 'hiphop',
    title: 'Hip-Hop & Street Foundations',
    frenchSubtitle: 'Cultures Urbaines & House',
    ageRange: 'Ages 8+ & Battle Crew',
    oneLiner: 'Authentic breaking, popping, locking, and house groove disciplines taught with cultural lineage and explosive precision.',
    imageSrc: '/images/hiphop_study.jpg',
    syllabus: {
      focus: 'Groove dynamics, isolations, floor footwork, cypher etiquette, musical pocket timing',
      weeklyHours: '3 to 6 hours / week',
      classCap: 12,
      attire: 'Unrestricted street training apparel, dedicated non-marking indoor court sneakers.',
      examination: 'Live cypher jury evaluations & competition showcase.',
      curriculumSummary: 'Moves past commercial video choreography into the fundamental techniques and history of street styles. Heavy emphasis on freestyling, musicality, and stage command.'
    }
  },
  {
    id: 'music',
    title: 'Musicianship & Classical Piano',
    frenchSubtitle: 'Solfège, Percussion & Clavier',
    ageRange: 'Ages 6+ & Accompanist Track',
    oneLiner: 'Formal music theory, classical piano repertoire, ear training, and polyrhythmic percussion tailored for performing artists.',
    imageSrc: '/images/music_study.jpg',
    syllabus: {
      focus: 'Sight reading, ABRSM graded piano, solfège, polyrhythmic time-signature analysis for dance accompaniment',
      weeklyHours: '2 to 4 hours / week (private + studio lab)',
      classCap: 6,
      attire: 'Studio formal rehearsal attire.',
      examination: 'ABRSM (Associated Board of the Royal Schools of Music) examinations.',
      curriculumSummary: 'Great dancers are musicians first. Our music wing provides rigorous acoustic training on Yamaha uprights and grand pianos, bridging the gap between sound and physical movement.'
    }
  }
];

export const STUDIO_SPECS: StudioSpec[] = [
  {
    category: 'The Floor',
    spec: '240 m² Sprung European Birch',
    detail: 'Triple-layer sprung subfloor engineered with elastomeric pads, finished with Harlequin Studio reversible performance vinyl. Eliminates joint shock during grand allegro and protects dancers on pointe.'
  },
  {
    category: 'Atmosphere & Volume',
    spec: '4.5m Ceiling Clearance',
    detail: 'Double-height volume with acoustic acoustic ceiling baffles, custom-fabricated continuous wall-mounted brass barres at two standard heights, and low-distortion optic mirrors with blackout drapery.'
  },
  {
    category: 'Cohort Architecture',
    spec: '12 Dancers Strictly Capped',
    detail: 'No cavernous classes. Instructors deliver individual anatomical corrections on turnout, spinal torque, and musicality every single session.'
  },
  {
    category: 'Live Accompaniment',
    spec: 'Yamaha U3 Acoustic Piano',
    detail: 'All advanced ballet and contemporary masterclasses operate with resident acoustic pianists and master djembe/talking drum percussionists.'
  }
];

export const SCHEDULE_PREVIEW: ScheduleEntry[] = [
  { day: 'Tuesday', time: '15:30 — 16:45', discipline: 'Ballet — Primary & Grade 1', level: 'Junior Atelier', instructor: 'Mme. Amina Bello', studio: 'Studio 1 (Harlequin)' },
  { day: 'Tuesday', time: '17:00 — 18:45', discipline: 'Ballet — Vocational Pointe', level: 'Pre-Professional', instructor: 'Mme. Amina Bello', studio: 'Studio 1 (Harlequin)' },
  { day: 'Wednesday', time: '16:00 — 17:30', discipline: 'Afro & Traditional West African', level: 'Youth & Senior', instructor: 'M. Danladi Yakubu', studio: 'Studio 2 (Timber)' },
  { day: 'Thursday', time: '16:30 — 18:00', discipline: 'Contemporary & Release Technique', level: 'Intermediate', instructor: 'Mlle. Kemi Adeleke', studio: 'Studio 1 (Harlequin)' },
  { day: 'Friday', time: '17:00 — 18:30', discipline: 'Hip-Hop & House Foundations', level: 'Open Cypher', instructor: 'M. Emeka Okon', studio: 'Studio 2 (Timber)' },
  { day: 'Saturday', time: '09:00 — 10:30', discipline: 'Placement Auditions & Trials', level: 'Prospective Dancers', instructor: 'Master Faculty', studio: 'Studio 1 (Harlequin)' },
  { day: 'Saturday', time: '11:00 — 13:00', discipline: 'Conservatoire Intensive Ensemble', level: 'Advanced Company', instructor: 'Guest Artists / Faculty', studio: 'Full Atelier' },
];
