export interface SankalpImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const sankalpInquiryNotes = [
  'Understanding Autism Spectrum Disorder (ASD) and Specific Learning Disorder (SLD)',
  'What is ideal and what is comfortable for the users, to create an environment that enables learning',
  'How to create a holistic learning environment, in which every user equally can incorporate their head, heart and hands towards learning.',
] as const;

export const sankalpInterviewInsights = [
  {
    question: 'What is it that makes an autistic child behave in an abnormal way?',
    answer: 'Nobody knows. It is a wiring problem in the brain. Every child is different, so a generalized problem cannot be pinned down.',
  },
  {
    question: 'Do we stimulate or not stimulate the senses?',
    answer: 'The objective is to balance typical and sensory design approaches by creating an environment that helps children face the world while remaining sensitive to their needs.',
  },
  {
    question: 'Do we need relaxing spaces in the classroom?',
    answer: 'Yes. Sometimes students need to be left on their own to calm themselves. Relaxing spaces within or between classrooms can be helpful.',
  },
  {
    question: 'Which are the isolated spaces?',
    answer: 'Mostly sensory rooms, cozy caves, and other quiet places where a student can be left alone to calm themselves.',
  },
  {
    question: 'Are these children different from other children?',
    answer: 'Mostly not. Difficulty processing instructions can make them frustrated easily, so they need calm, comfortable places where they can regulate themselves.',
  },
  {
    question: 'Do they have any special requirements?',
    answer: 'The school supports different intelligences. Classrooms should remain flexible enough to let students move between spaces according to their activities.',
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
  { src: '/images/sankalp/sankalp_initial_sketches_and_ideas_1.png', alt: 'Initial linear classroom layout sketch', width: 569, height: 327 },
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
