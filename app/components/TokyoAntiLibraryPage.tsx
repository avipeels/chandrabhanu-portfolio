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

        <article className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-8 xl:px-0">
          <header className="relative">
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="relative">
                  <Link href="/#work" aria-label="Back to work" className="mb-3 block w-fit text-3xl leading-none transition-opacity hover:opacity-60 xl:absolute xl:right-full xl:top-[-3px] xl:mr-16 xl:mb-0">←</Link>
                  <h1 className="font-montserrat text-xl font-bold uppercase underline decoration-1 underline-offset-4 sm:text-2xl">Tokyo Anti-Library</h1>
                  <p className="mt-2 text-xs leading-relaxed text-black/80 sm:text-sm">Archasm competition entry | Team of 2 | Honorable mention @19th Rank | Architecture | App design</p>
                </div>
              </div>
              <CaseStudyNavigation />
            </div>
            <p className="mt-10 max-w-[1160px] text-xs leading-[1.35] sm:text-sm">The competition was to design a landmark 21st-century public library in Tokyo that explores the library&apos;s purpose in our digital world. The proposal was to address concerns about the declining relevance of libraries by transforming them into advanced hubs for research and knowledge sharing. Ultimately, the goal is to create a new architectural standard that serves as a blueprint for future libraries worldwide.</p>
          </header>

          <section aria-labelledby="investigation-title" className="pt-8 sm:pt-8">
            <h2 id="investigation-title" className="font-montserrat text-base font-bold uppercase sm:text-lg">Initial enquiry and investigation</h2>
            <div className="mt-7 grid gap-6 lg:max-w-[1168px] lg:grid-cols-3">
              {inquiryNotes.map((note) => <div key={note} className="sticky-note relative flex h-[176px] w-full max-w-none items-center justify-center justify-self-center overflow-hidden bg-[#fff229] px-5 pr-16 text-center font-handwriting text-base leading-[1.2] sm:px-8 sm:pr-[4.5rem] sm:text-lg lg:max-w-[352px] lg:justify-self-start"><span className="sticky-note-fold absolute right-0 top-0 z-20 size-[72px] bg-white" aria-hidden="true" /><span className="sticky-note-fold-inner absolute right-[6px] top-[6px] z-20 size-[60px] bg-[#fff229]" aria-hidden="true" /><span className="relative z-10 max-w-[245px]">{note}</span></div>)}
            </div>
            <p className="mt-8 text-xs leading-[1.35] sm:text-sm">In order to answer these questions we wanted to first get a broader understanding of the impact of digitization on physical spaces by making an evolution diagram of libraries.</p>
            <div className="mt-4 lg:relative lg:left-1/2 lg:ml-6 lg:w-[1260px] lg:max-w-[calc(100vw-8rem)] lg:-translate-x-1/2">
              <div className="grid gap-12 lg:grid-cols-3 lg:gap-x-[56px] lg:gap-y-12">
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
            <div className="relative mt-8 aspect-[1103/621] w-full">
              <Image src="/images/tokyo_5.png" alt="Tokyo Anti-Library modular design objective" fill sizes="(max-width: 767px) 100vw, 1260px" className="object-contain" />
            </div>
          </section>

          <section aria-labelledby="proposal-title" className="pt-14 sm:pt-20">
            <h2 id="proposal-title" className="font-montserrat text-base font-bold uppercase sm:text-lg">Final proposal</h2>
            <p className="mt-5 text-xs leading-[1.35] sm:text-sm">Our initiative presents a bifurcated framework that harmonizes the digital and physical realms to redefine the library experience. By leveraging the concept of the “Phygital,” we aim to create a seamless transition between virtual navigation and physical habitation. In the virtual realm, users engage with a high-fidelity digital interface, while the physical library becomes a place for discovery, community, and shared experience.</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,360px)_1px_minmax(0,1fr)] lg:items-stretch lg:gap-x-8">
              <div className="relative aspect-[405/1818] min-w-0">
                <Image src="/images/tokyo_6.png" alt="MyLib mobile library app screens" fill sizes="(max-width: 767px) 100vw, 360px" className="object-contain" />
              </div>

              <div className="relative hidden bg-black lg:block" aria-label="Virtual and physical design divider">
                <span className="absolute right-5 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-handwriting text-xs uppercase leading-none tracking-[0.14em]">Virtual</span>
                <span className="absolute left-5 top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap font-handwriting text-xs uppercase leading-none tracking-[0.14em]">Physical</span>
              </div>

              <div className="flex w-full flex-col items-center gap-2 py-2 lg:hidden">
                <span className="font-handwriting text-sm uppercase tracking-[0.14em]">Virtual</span>
                <span className="h-[2px] w-full bg-black/70" aria-hidden="true" />
                <span className="font-handwriting text-sm uppercase tracking-[0.14em]">Physical</span>
              </div>

              <div className="grid min-w-0 gap-6">
                {(['/images/tokyo_7.png', '/images/tokyo_8.png', '/images/tokyo_9.png', '/images/tokyo_10.png', '/images/tokyo_11.png'] as const).map((image, index) => (
                  <div key={image} className="relative aspect-[862/312] min-w-0">
                    <Image src={image} alt={`Tokyo Anti-Library physical proposal view ${index + 1}`} fill sizes="(max-width: 767px) 100vw, 850px" className="object-contain" />
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
    <figure className="relative flex w-full min-w-0 flex-col items-center pt-6 lg:items-start lg:pt-24">
      <p className="mb-3 text-center font-handwriting text-sm text-black lg:hidden">{card.era}</p>
      <div className={`relative w-full ${card.mobileAspectClassName} lg:mx-0 lg:h-[220px] lg:w-[60%] lg:aspect-auto`}>
        <Image src={card.image} alt={`${card.era} library reference`} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-contain grayscale" />
        <p className="pointer-events-none absolute left-[-4.25rem] top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-handwriting text-lg text-black lg:block">{card.era}</p>

        {card.topAnnotation && (
          <div className={`absolute top-[-72px] hidden w-48 -translate-x-1/2 text-center lg:block ${card.topAnnotationClassName ?? 'left-1/2'}`}>
            <p className="font-handwriting text-base leading-[1.05] text-[#ff5050]">{card.topAnnotation}</p>
            <span className={`absolute left-1/2 top-[28px] w-[3px] -translate-x-1/2 bg-[#ff5050] ${card.topMarkerLineClassName ?? 'h-[104px]'}`} aria-hidden="true" />
            <span className={`absolute left-1/2 size-4 -translate-x-1/2 rounded-full bg-[#ff5050] ${card.topMarkerDotClassName ?? 'top-[120px]'}`} aria-hidden="true" />
          </div>
        )}

        {card.sideAnnotations.map((annotation) => (
          <div key={annotation.text} className={`absolute hidden items-center lg:flex ${annotation.className}`}>
            <span className="size-4 shrink-0 rounded-full bg-[#ff5050]" aria-hidden="true" />
            <span className={`h-[3px] shrink-0 bg-[#ff5050] ${annotation.lineClassName}`} aria-hidden="true" />
            <span className="ml-0 w-32 font-handwriting text-sm leading-[1.05] text-[#ff5050]">{annotation.text}</span>
          </div>
        ))}
      </div>
      <figcaption className="mx-0 mt-5 w-full text-center text-sm leading-[1.3] text-black/75 sm:text-sm lg:w-[60%] lg:text-left">{card.caption}</figcaption>
    </figure>
  );
}
