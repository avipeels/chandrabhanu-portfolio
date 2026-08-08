export interface SankalpImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SankalpAnswerSegment {
  text: string;
  highlight?: boolean;
}

export const sankalpInquiryNotes = [
  'Understanding Autism Spectrum Disorder (ASD) and Specific Learning Disorder (SLD)',
  'What is ideal and what is comfortable for the users, to create an environment that enables learning',
  'How to create a holistic learning environment, in which every user equally can incorporate their head, heart and hands towards learning.',
] as const;

export const sankalpInterviewInsights = [
  {
    question: 'What is it that makes an autistic child behave in an abnormal way?',
    answer: [
      { text: "Nobody knows, it is a wiring problem in the brain. " },
      { text: 'Every child is different', highlight: true },
      { text: ', so a generalized problem cannot be pinned down.' },
    ],
  },
  {
    question: 'Do we stimulate or not stimulate the senses? - Neuro Typical Approach and The Sensory Design Approach',
    answer: [
      { text: 'Yes we will have to stimulate the senses. The objective is to balance both these approaches, by ' },
      { text: 'creating an environment which makes them independent', highlight: true },
      { text: ' to face the world, and also be sensitive enough for their needs and requirements.' },
    ],
  },
  {
    question: 'Do we need "releasing valves" in the classroom?',
    answer: [
      { text: 'Yes. Sometimes we need to just leave the student on their own ' },
      { text: 'to calm him/herself down', highlight: true },
      { text: '. Having releasing valves in the classroom or as a common space between some classrooms will also be helpful.' },
    ],
  },
  {
    question: 'Which are the isolated spaces?',
    answer: [
      { text: 'Mostly the ' },
      { text: 'sensory rooms, cozy caves', highlight: true },
      { text: ' etc where the students can be left alone to calm him/herself.' },
    ],
  },
  {
    question: 'Are these kids different from normal kids?',
    answer: [
      { text: 'Mostly not. ' },
      { text: 'These kids are very normal', highlight: true },
      { text: '. But at times due to their inability to process things or instructions, ' },
      { text: 'they can get frustrated very easily', highlight: true },
      { text: '. Therefore, they also need these releasing valves where they can calm themselves.' },
    ],
  },
  {
    question: 'Do they have any special requirements?',
    answer: [
      { text: 'The school aims at providing ' },
      { text: 'different intelligences according to the theory of multiple intelligence', highlight: true },
      { text: '. Therefore, the classroom spaces can be as flexible as possible to allow the movement of students between different classrooms, depending on their abilities.' },
    ],
  },
] as const;

export const sankalpHeaderBanner: SankalpImage = {
  src: '/images/sankalp/sankalp_header_banner.png',
  alt: 'Sankalp School learning environments and sensory classrooms',
  width: 1728,
  height: 449,
};

export const sankalpUserProfileAnalysis: SankalpImage = {
  src: '/images/sankalp/sankalp_user_profile_analysis.png',
  alt: 'Sankalp School user profile analysis for autism and specific learning disabilities',
  width: 1456,
  height: 515,
};

export const sankalpOverallDesignObjective: SankalpImage = {
  src: '/images/sankalp/sankalp_overall_design_objective.png',
  alt: 'Overall design objective for independent and sensitive learning environments',
  width: 906,
  height: 625,
};

export const sankalpDesignGoals: SankalpImage = {
  src: '/images/sankalp/sankalp_design_goals.png',
  alt: 'Four design goals for Sankalp School',
  width: 1383,
  height: 524,
};

export const sankalpDesignCriteria: SankalpImage = {
  src: '/images/sankalp/sankalp_design_criteria.png',
  alt: 'Eight inclusive design criteria for Sankalp School',
  width: 1459,
  height: 790,
};

export const sankalpDesignChallenges: readonly SankalpImage[] = [
  { src: '/images/sankalp/sankalp_design_challenge_1.png', alt: 'Existing toilet and stair conditions', width: 502, height: 330 },
  { src: '/images/sankalp/sankalp_design_challenge_2.png', alt: 'Existing staircase width study', width: 501, height: 333 },
  { src: '/images/sankalp/sankalp_design_challenge_3.png', alt: 'Existing corridor width study', width: 502, height: 333 },
  { src: '/images/sankalp/sankalp_design_challenge_4.png', alt: 'Existing flooring study', width: 502, height: 324 },
  { src: '/images/sankalp/sankalp_design_challenge_5.png', alt: 'Existing handrail height study', width: 501, height: 333 },
  { src: '/images/sankalp/sankalp_design_challenge_6.png', alt: 'Existing asbestos roof study', width: 501, height: 328 },
] as const;

export const sankalpInitialSketches: readonly SankalpImage[] = [
  { src: '/images/sankalp/sankalp_initial_sketches_and_ideas_4.png', alt: 'Initial linear classroom layout sketch', width: 350, height: 587 },
  { src: '/images/sankalp/sankalp_initial_sketches_and_ideas_2.png', alt: 'Initial activity-room layout sketch', width: 337, height: 292 },
  { src: '/images/sankalp/sankalp_initial_sketches_and_ideas_3.png', alt: 'Initial sensory courtyard layout sketch', width: 569, height: 327 },
] as const;

export const sankalpFinalProposalImages: readonly SankalpImage[] = [
  { src: '/images/sankalp/sankalp_final_proposal_1.png', alt: 'Sankalp School final classroom plans and axonometric proposals', width: 1507, height: 1100 },
  { src: '/images/sankalp/sankalp_final_proposal_2.png', alt: 'Final proposal for an individual classroom', width: 491, height: 457 },
  { src: '/images/sankalp/sankalp_final_proposal_3.png', alt: 'Final proposal for a collaborative classroom', width: 525, height: 456 },
  { src: '/images/sankalp/sankalp_final_proposal_4.png', alt: 'Final proposal for a sensory learning classroom', width: 707, height: 367 },
  { src: '/images/sankalp/sankalp_final_proposal_5.png', alt: 'Final proposal for an open learning classroom', width: 717, height: 373 },
] as const;
