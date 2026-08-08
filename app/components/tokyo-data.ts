export const inquiryNotes = [
  'What is a library? What is it meant for? How do people use the library?',
  'Can a library be more than just a collection of books?',
  'How does the idea of knowledge sharing change in the digital era?',
] as const;

export const investigationCards = [
  {
    era: '18th Century',
    image: '/images/tokyo_1.png',
    mobileAspectClassName: 'aspect-[289/257]',
    caption: 'Physical, centralized repositories focusing on rare volumes, restricted access, and study in grand traditional halls.',
    topAnnotation: 'Grand architecture',
    topAnnotationClassName: 'left-[40%]',
    topMarkerLineClassName: 'h-[166px]',
    topMarkerDotClassName: 'top-[194px]',
    sideAnnotations: [
      { text: 'Limited access, limited natural light for better preservation', className: 'left-[80%] top-[76%]', lineClassName: 'w-16' },
    ],
  },
  {
    era: '20th Century',
    image: '/images/tokyo_2.png',
    mobileAspectClassName: 'aspect-[290/257]',
    caption: 'Transformation into community-focused hubs with open access, introduction of digital cataloguing, and computer access.',
    topAnnotation: 'Open flexible spaces',
    topAnnotationClassName: 'left-[25%]',
    topMarkerLineClassName: 'h-[81px]',
    topMarkerDotClassName: 'top-[109px]',
    sideAnnotations: [
      { text: 'Diverse learning environments', className: 'left-[73%] top-[58%]', lineClassName: 'w-16' },
      { text: 'Integration of technology', className: 'left-[40%] top-[80%]', lineClassName: 'w-32' },
    ],
  },
  {
    era: '21st Century',
    image: '/images/tokyo_3.png',
    mobileAspectClassName: 'aspect-[238/277]',
    caption: 'Shift to decentralized, digital platforms for tracking, discovery, social engagement, and virtual access to content anytime.',
    topAnnotation: undefined,
    topAnnotationClassName: undefined,
    topMarkerLineClassName: undefined,
    topMarkerDotClassName: undefined,
    sideAnnotations: [
      { text: 'Virtual book community', className: 'left-[63%] top-[65%]', lineClassName: 'w-12' },
    ],
  },
] as const;
