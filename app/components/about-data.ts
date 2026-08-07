export interface TimelineEntry {
  year: string;
  annotation: string;
  details: readonly string[];
}

export const aboutTimeline: readonly TimelineEntry[] = [
  {
    year: '2012',
    annotation: 'Foundations in Design and Architecture, Conceptual design and design research',
    details: ['Bachelors in Architecture (B.Arch.), CEPT University, Ahmedabad'],
  },
  {
    year: '2015',
    annotation: 'Architectural design details, Design Documentation',
    details: ['Architecture internship, Abin Design Studio, Kolkata'],
  },
  {
    year: '2016',
    annotation: 'Board game design, Urban design, Interdisciplinary collaboration',
    details: ['Exchange program, ETH, Zurich'],
  },
  {
    year: '2017',
    annotation: 'Design fundamentals, Exercise formulation, Presentation and Communication skills',
    details: ['Teaching Assistant, B.Arch. Foundation Studio, CEPT University, Ahmedabad'],
  },
  {
    year: '2018',
    annotation: 'Horizontal integration of fundamental skills required in design education',
    details: ['Teaching Associate, B.Arch. Foundation Studio, CEPT University, Ahmedabad'],
  },
  {
    year: '2018',
    annotation: 'User centred design and design research, Moodboard and design presentation',
    details: ['Junior Architect, Benny Kuriakose and Associates, Chennai'],
  },
  {
    year: '2019',
    annotation: 'Project timeline management, Estimation and Costing, 3D visualization, Vendor and Consultant coordination',
    details: ['Junior Architect, Sandarbh Design Studio (design and build firm), Sairam Rai, Bengaluru'],
  },
  {
    year: '2020',
    annotation: 'Patience, teamwork and coordination',
    details: ['Wife to a Front-end Engineer', 'Assistant Professor, School of Architecture, CMR University, Bengaluru'],
  },
  {
    year: '2023',
    annotation: 'Team work, mentoring students, workshop course coordinator, online teaching',
    details: ['Mother to a baby girl'],
  },
  {
    year: '2025',
    annotation: 'True understanding of patience and empathy',
    details: ['Google UX Design Professional Certificate'],
  },
  {
    year: '',
    annotation: '“User comes first and rest all follows”',
    details: [],
  },
];

export const contactLinks = [
  { label: 'M', value: 'd.chandrabhanu@gmail.com', href: 'mailto:d.chandrabhanu@gmail.com' },
  { label: 'in', value: 'www.linkedin.com/in/chandrabhanu-dosapati', href: 'https://www.linkedin.com/in/chandrabhanu-dosapati' },
  { label: '◎', value: 'www.instagram.com/moonspace_photography', href: 'https://www.instagram.com/moonspace_photography' },
  { label: 'Bē', value: 'www.behance.net/chandrabhanu3', href: 'https://www.behance.net/chandrabhanu3' },
  { label: '☎', value: '+91 - 7016110971', href: 'tel:+917016110971' },
] as const;
