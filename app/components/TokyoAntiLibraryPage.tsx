import Image from 'next/image';
import Link from 'next/link';

const inquiryNotes = [
  'What is a library? What is it meant for? How do people use the library?',
  'Can a library be more than just a collection of books?',
  'How does the idea of knowledge sharing change in the digital era?',
] as const;

const investigationCards = [
  {
    era: '18th Century',
    image: '/images/tokyo_1.png',
    caption: 'Physical, centralized repositories focusing on rare volumes, restricted access, and study in grand traditional halls.',
    topAnnotation: 'Grand architecture',
    topAnnotationClassName: 'left-[40%]',
    topMarkerLineClassName: 'h-[146px]',
    topMarkerDotClassName: 'top-[194px]',
    sideAnnotations: [
      { text: 'Limited access, limited natural light for better preservation', className: 'left-[80%] top-[76%]', lineClassName: 'w-16' },
    ],
  },
  {
    era: '20th Century',
    image: '/images/tokyo_2.png',
    caption: 'Transformation into community-focused hubs with open access, introduction of digital cataloguing, and computer access.',
    topAnnotation: 'Open flexible spaces',
    topAnnotationClassName: 'left-[25%]',
    topMarkerLineClassName: 'h-[61px]',
    topMarkerDotClassName: 'top-[109px]',
    sideAnnotations: [
      { text: 'Diverse learning environments', className: 'left-[73%] top-[58%]', lineClassName: 'w-16' },
      { text: 'Integration of technology', className: 'left-[40%] top-[80%]', lineClassName: 'w-32' },
    ],
  },
  {
    era: '21st Century',
    image: '/images/tokyo_3.png',
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

const proposalImages = [
  '/images/figma-urban-source.png',
  '/images/school-project-2068ee.png',
  '/images/hero-bg-253212.png',
  '/images/tokyo-anti-library.png',
] as const;

function CaseStudyNavigation() {
  return (
    <nav aria-label="Case study navigation" className="flex items-center gap-6 text-xs sm:text-sm 2xl:absolute 2xl:right-[-200px] 2xl:top-0">
      <Link href="/#work" className="font-semibold text-[#165C12] underline decoration-1 underline-offset-4">Work</Link>
      <Link href="/about" className="text-black transition-opacity hover:opacity-60">About</Link>
    </nav>
  );
}

export default function TokyoAntiLibraryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2f2f2] text-black">
      <div className="bg-white py-4 sm:py-6 lg:py-8">
        <div className="relative aspect-[4/1] w-full overflow-hidden bg-neutral-200">
          <Image src="/images/tokyo-anti-library.png" alt="Tokyo Anti-Library public library concept" fill priority sizes="100vw" className="object-cover object-center" />
        </div>

        <article className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-0">
          <header className="relative">
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="relative">
                  <Link href="/#work" aria-label="Back to work" className="mb-3 block w-fit text-3xl leading-none transition-opacity hover:opacity-60 lg:absolute lg:right-full lg:top-[-3px] lg:mr-16 lg:mb-0">←</Link>
                  <h1 className="font-montserrat text-xl font-bold uppercase underline decoration-1 underline-offset-4 sm:text-2xl">Tokyo Anti-Library</h1>
                  <p className="mt-2 text-xs leading-relaxed text-black/80 sm:text-sm">Archasm competition entry | Team of 2 | Honorable mention @19th Rank | Architecture | App design</p>
                </div>
              </div>
              <CaseStudyNavigation />
            </div>
            <p className="mt-8 max-w-[1160px] text-xs leading-[1.35] sm:text-sm">The competition was to design a landmark 21st-century public library in Tokyo that explores the library&apos;s purpose in our digital world. The proposal was to address concerns about the declining relevance of libraries by transforming them into advanced hubs for research and knowledge sharing. Ultimately, the goal is to create a new architectural standard that serves as a blueprint for future libraries worldwide.</p>
          </header>

          <section aria-labelledby="investigation-title" className="pt-20 sm:pt-24">
            <h2 id="investigation-title" className="font-montserrat text-base font-bold uppercase sm:text-lg">Initial enquiry and investigation</h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:max-w-[1168px] lg:grid-cols-3">
              {inquiryNotes.map((note) => <div key={note} className="sticky-note relative flex h-[176px] w-full max-w-[352px] items-center justify-center justify-self-center overflow-hidden bg-[#fff229] px-5 pr-16 text-center font-handwriting text-base leading-[1.2] sm:px-8 sm:pr-[4.5rem] sm:text-lg lg:justify-self-start"><span className="sticky-note-fold absolute right-0 top-0 z-20 size-[72px] bg-white" aria-hidden="true" /><span className="sticky-note-fold-inner absolute right-[6px] top-[6px] z-20 size-[60px] bg-[#fff229]" aria-hidden="true" /><span className="relative z-10 max-w-[245px]">{note}</span></div>)}
            </div>
            <p className="mt-8 text-xs leading-[1.35] sm:text-sm">In order to answer these questions we wanted to first get a broader understanding of the impact of digitization on physical spaces by making an evolution diagram of libraries.</p>
            <div className="mt-8 lg:relative lg:left-1/2 lg:ml-6 lg:w-[1260px] lg:max-w-[calc(100vw-8rem)] lg:-translate-x-1/2">
              <div className="grid gap-12 md:grid-cols-3 lg:gap-x-[56px] lg:gap-y-12">
                {investigationCards.map((card) => <InvestigationCard key={card.era} card={card} />)}
              </div>
            </div>
            <p className="mt-8 text-xs italic leading-[1.35] sm:text-sm">“Architecture is no longer simply the play of masses in light. It now embraces the play of digital information in space.” - William J Mitchell</p>
          </section>

          <section aria-labelledby="hypothesis-title" className="pt-14 sm:pt-20">
            <h2 id="hypothesis-title" className="font-montserrat text-base font-bold uppercase sm:text-lg">Hypothesis</h2>
            <p className="mt-5 text-xs leading-[1.35] sm:text-sm">Based on our understanding, our initial idea is that any physical space can be subdivided in terms of its functional aspects and experiential aspects. And in the digital era if the functional aspects get transferred into the virtual realm, we can focus on enhancing the experiential aspects of any physical space.</p>
            <div className="relative mt-10 aspect-[1236/429] w-full">
              <Image src="/images/tokyo_4.png" alt="Functional and experiential aspects of a library" fill sizes="(max-width: 767px) 100vw, 1260px" className="object-contain" />
            </div>
          </section>

          <section aria-labelledby="objective-title" className="pt-14 sm:pt-20">
            <h2 id="objective-title" className="font-montserrat text-base font-bold uppercase sm:text-lg">Overall design objective</h2>
            <p className="mt-5 text-xs leading-[1.35] sm:text-sm">To create a library that is “For the people, by the people and of the people,” by shifting all functional aspects of a library to the virtual realm to enhance the physical experience of the library.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                ['1. The closed library', '/images/drawings-514a7a.png'],
                ['2. Unlocking & deconstruction', '/images/figma-urban-source.png'],
                ['3. Modular assembly', '/images/school-project-2068ee.png'],
                ['4. The open community hub', '/images/tokyo-anti-library.png'],
              ].map(([label, image]) => (
                <figure key={label} className="min-w-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image src={image} alt={label} fill sizes="(max-width: 639px) 100vw, 45vw" className="object-contain" />
                  </div>
                  <figcaption className="mt-2 text-center text-xs font-semibold uppercase">{label}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section aria-labelledby="proposal-title" className="pt-14 sm:pt-20">
            <h2 id="proposal-title" className="font-montserrat text-base font-bold uppercase sm:text-lg">Final proposal</h2>
            <p className="mt-5 text-xs leading-[1.35] sm:text-sm">Our initiative presents a bifurcated framework that harmonizes the digital and physical realms to redefine the library experience. By leveraging the concept of the “Phygital,” we aim to create a seamless transition between virtual navigation and physical habitation. In the virtual realm, users engage with a high-fidelity digital interface, while the physical library becomes a place for discovery, community, and shared experience.</p>
            <div className="mt-10 grid gap-8 md:grid-cols-[250px_minmax(0,1fr)] md:gap-12">
              <div className="grid grid-cols-2 gap-4 self-start md:grid-cols-1">
                {proposalImages.slice(0, 4).map((image, index) => (
                  <div key={`${image}-${index}`} className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <Image src={image} alt={`MyLib app screen ${index + 1}`} fill sizes="(max-width: 767px) 45vw, 250px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="grid gap-5">
                {proposalImages.map((image, index) => (
                  <div key={`${image}-scene-${index}`} className="relative aspect-[16/6] overflow-hidden bg-neutral-100">
                    <Image src={image} alt={`Tokyo Anti-Library proposal view ${index + 1}`} fill sizes="(max-width: 767px) 100vw, 650px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

type InvestigationCardData = (typeof investigationCards)[number];

interface InvestigationCardProps {
  card: InvestigationCardData;
}

function InvestigationCard({ card }: InvestigationCardProps) {
  return (
    <figure className="relative min-w-0 pt-6 lg:pt-24">
      <p className="mb-3 font-handwriting text-sm text-black md:hidden">{card.era}</p>
      <div className="relative h-[300px] sm:h-[340px] lg:mx-0 lg:h-[220px] lg:w-[60%]">
        <Image src={card.image} alt={`${card.era} library reference`} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-contain grayscale" />
        <p className="pointer-events-none absolute left-[-4.25rem] top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-handwriting text-lg text-black lg:block">{card.era}</p>

        {card.topAnnotation && (
          <div className={`absolute top-[-72px] hidden w-48 -translate-x-1/2 text-center lg:block ${card.topAnnotationClassName ?? 'left-1/2'}`}>
            <p className="font-handwriting text-base leading-[1.05] text-[#ff5050]">{card.topAnnotation}</p>
            <span className={`absolute left-1/2 top-[48px] w-[3px] -translate-x-1/2 bg-[#ff5050] ${card.topMarkerLineClassName ?? 'h-[84px]'}`} aria-hidden="true" />
            <span className={`absolute left-1/2 size-4 -translate-x-1/2 rounded-full bg-[#ff5050] ${card.topMarkerDotClassName ?? 'top-[120px]'}`} aria-hidden="true" />
          </div>
        )}

        {card.sideAnnotations.map((annotation) => (
          <div key={annotation.text} className={`absolute hidden items-center lg:flex ${annotation.className}`}>
            <span className="size-4 shrink-0 rounded-full bg-[#ff5050]" aria-hidden="true" />
            <span className={`h-[3px] shrink-0 bg-[#ff5050] ${annotation.lineClassName}`} aria-hidden="true" />
            <span className="ml-3 w-32 font-handwriting text-sm leading-[1.05] text-[#ff5050]">{annotation.text}</span>
          </div>
        ))}
      </div>
      <figcaption className="mx-0 mt-5 w-full text-sm leading-[1.3] text-black/75 sm:text-sm lg:w-[60%]">{card.caption}</figcaption>
    </figure>
  );
}
