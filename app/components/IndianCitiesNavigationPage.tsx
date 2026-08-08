import Image from 'next/image';
import Link from 'next/link';
import {
  type IndianCitiesImage,
  indianCitiesBackground,
  indianCitiesBanner,
  indianCitiesAppendix,
  indianCitiesCompetitiveAnalysis,
  indianCitiesDesignGoals,
  indianCitiesKeyInsights,
  indianCitiesScaleStudies,
  indianCitiesStreetScaleMaps,
  indianCitiesStreetScalePhotos,
  indianCitiesUserResearch,
  indianCitiesVisualExploration,
} from './indian-cities-data';

interface ResponsiveImageProps {
  image: IndianCitiesImage;
  sizes: string;
  className?: string;
  priority?: boolean;
}

function ResponsiveImage({ image, sizes, className = '', priority = false }: ResponsiveImageProps) {
  return (
    <figure className={`relative w-full overflow-hidden rounded-sm bg-white shadow-[0_6px_18px_rgba(0,0,0,0.14)] ${className}`} style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} className="object-contain" />
    </figure>
  );
}

function CaseStudyNavigation() {
  return (
    <nav aria-label="Case study navigation" className="flex shrink-0 items-center gap-6 text-xs sm:text-sm 2xl:absolute 2xl:right-[-200px] 2xl:top-0">
      <Link href="/#work" className="font-semibold text-[#165C12] underline decoration-1 underline-offset-4">Work</Link>
      <Link href="/about" className="text-black transition-opacity hover:opacity-60">About</Link>
    </nav>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="font-montserrat text-base font-bold uppercase sm:text-lg">{children}</h2>;
}

export default function IndianCitiesNavigationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2f2f2] text-black">
      <div className="bg-white py-4 sm:py-6 lg:py-8">
        <div className="relative aspect-[1728/449] w-full overflow-hidden bg-neutral-100">
          <Image src={indianCitiesBanner.src} alt={indianCitiesBanner.alt} fill priority sizes="100vw" className="object-cover" />
        </div>

        <article className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-8 xl:px-0">
          <header className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <div className="relative">
                  <Link href="/#work" aria-label="Back to work" className="mb-3 block w-fit text-3xl leading-none transition-opacity hover:opacity-60 xl:absolute xl:right-full xl:top-[-3px] xl:mr-16 xl:mb-0">←</Link>
                  <h1 className="font-montserrat text-lg font-bold uppercase underline decoration-1 underline-offset-4 sm:text-xl lg:text-2xl">Navigation Tool for Indian Cities</h1>
                  <p className="mt-2 text-xs leading-relaxed text-black/80 sm:text-sm">Google UX Design Professional Certificate | User Experience design | Visual Design</p>
                </div>
              </div>
              <CaseStudyNavigation />
            </div>
            <p className="mt-10 max-w-[1160px] text-xs leading-[1.45] sm:text-sm">The pulse of Indian city life is defined by its streets and how people move through them. This project explores the potential to redesign and elevate urban navigation tools specifically tailored for the Indian context. Starting with extensive foundational research on the anatomy and function of maps, the project synthesizes these insights to frame a clear problem statement. By mapping user personas and their primary pain points, the research seamlessly translates into targeted ideation, culminating in the final prototype.</p>
          </header>

          <section aria-labelledby="indian-cities-background-title" className="pt-14 sm:pt-20 lg:pt-24">
            <SectionHeading id="indian-cities-background-title">Background</SectionHeading>
            <p className="mt-5 max-w-[1180px] text-xs leading-[1.45] sm:text-sm">A foundational background study was conducted to explore the core utility of maps and how users naturally interact with them. By reviewing historical precedents in cartography, the goal was to extract the essential design elements that make a map both intuitive and highly readable. By synthesizing these insights, the primary objective was to identify the characteristics that define a highly legible, user-centric, and effective map.</p>
            <ResponsiveImage image={indianCitiesBackground} priority sizes="(max-width: 767px) 100vw, 1260px" className="mx-auto mt-8 max-w-[1120px]" />
          </section>

          <section aria-labelledby="indian-cities-research-title" className="pt-14 sm:pt-20 lg:pt-24">
            <SectionHeading id="indian-cities-research-title">Preliminary user research</SectionHeading>
            <p className="mt-5 max-w-[1180px] text-xs leading-[1.45] sm:text-sm">An online survey was conducted to understand how people in India use navigation apps and which ones they prefer. The research focused on their most common modes of transport, the journeys they make, and the challenges they face while navigating Indian cities.</p>
            <ResponsiveImage image={indianCitiesUserResearch} sizes="(max-width: 767px) 100vw, 1260px" className="mt-8" />
          </section>

          <section aria-labelledby="indian-cities-insights-title" className="pt-14 sm:pt-20 lg:pt-24">
            <SectionHeading id="indian-cities-insights-title">Key insights</SectionHeading>
            <ResponsiveImage image={indianCitiesKeyInsights} sizes="(max-width: 767px) 100vw, 1260px" className="mt-8" />
          </section>

          <section aria-labelledby="indian-cities-competitive-title" className="pt-14 sm:pt-20 lg:pt-24">
            <SectionHeading id="indian-cities-competitive-title">Competitive analysis — Google Maps and Nolli app</SectionHeading>
            <p className="mt-5 max-w-[1180px] text-xs leading-[1.45] sm:text-sm">Google Maps is one of the most robust navigation applications available today. This audit examines how its global features translate to India’s localized navigation habits, dense urban layouts, and diverse mobility needs.</p>
            <div className="mt-10 space-y-14 sm:space-y-20">
              <div>
                <h3 className="font-montserrat text-sm font-bold uppercase sm:text-base">Step 1: Analyzing user flow</h3>
                <div className="mt-6 space-y-8 sm:space-y-10">
                  {indianCitiesCompetitiveAnalysis.slice(0, 2).map((image) => (
                    <ResponsiveImage key={image.src} image={image} sizes="(max-width: 767px) 100vw, 1260px" />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-montserrat text-sm font-bold uppercase sm:text-base">Step 2: Analyzing visual design of the actual map</h3>
                <ResponsiveImage image={indianCitiesCompetitiveAnalysis[2]} sizes="(max-width: 767px) 100vw, 1260px" className="mt-6" />
              </div>
            </div>
          </section>

          <section aria-labelledby="indian-cities-goals-title" className="pt-14 sm:pt-20 lg:pt-24">
            <SectionHeading id="indian-cities-goals-title">Design goals</SectionHeading>
            <ResponsiveImage image={indianCitiesDesignGoals} sizes="(max-width: 767px) 100vw, 1260px" className="mt-8" />
          </section>

          <section aria-labelledby="indian-cities-visual-title" className="pt-14 sm:pt-20 lg:pt-24">
            <SectionHeading id="indian-cities-visual-title">Visual design exploration</SectionHeading>
            <p className="mt-5 max-w-[1180px] text-xs leading-[1.45] sm:text-sm">Drawing from an architectural background, the design focuses on spatial hierarchy and wayfinding—making the map interface both more readable and intuitively perceivable while preserving the familiar navigation experience.</p>

            <div className="mt-10 space-y-14 sm:space-y-20">
              <div>
                <h3 className="font-montserrat text-sm font-bold uppercase sm:text-base">1. Colour scheme — district scale</h3>
                <ResponsiveImage image={indianCitiesVisualExploration[0]} sizes="(max-width: 767px) 100vw, 960px" className="mx-auto mt-6 max-w-[960px]" />
              </div>
              <div>
                <h3 className="font-montserrat text-sm font-bold uppercase sm:text-base">2. Map pins and icons</h3>
                <p className="mt-5 max-w-[1180px] text-xs leading-[1.45] sm:text-sm">Indian streets are densely packed and incredibly vibrant. Therefore, designing of these pins became extremely crucial, so that it allows the clustering and overlapping of various information. Each marker can be anchored to its exact street—so users are never left guessing in a maze of crowded intersections and parallel lanes. The colour scheme is also done based on Urban studies grouping of different landuse components of Indian cities.</p>
                <ResponsiveImage image={indianCitiesVisualExploration[1]} sizes="(max-width: 767px) 100vw, 1260px" className="mt-6" />
              </div>
              <div>
                <h3 className="font-montserrat text-sm font-bold uppercase sm:text-base">3. Map at different scales</h3>
                <div className="mt-6 grid gap-8 lg:grid-cols-3 lg:gap-10">
                  {indianCitiesScaleStudies.map((image) => (
                    <div key={image.src} className="min-w-0">
                      <ResponsiveImage image={image} sizes="(max-width: 1023px) 100vw, 33vw" />
                      <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:mt-5">
                        <h4 className="font-montserrat text-lg font-bold uppercase leading-[1.1] sm:text-xl">{image.title}</h4>
                        <p className="font-handwriting text-right text-xs leading-[1.05] text-black sm:text-sm">
                          {image.scope.map((scope) => <span key={scope} className="block">{scope}</span>)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                  <div className="grid gap-6 md:col-span-2 md:grid-cols-3 lg:col-span-1 lg:grid-cols-1">
                    {indianCitiesStreetScalePhotos.map((image) => (
                      <ResponsiveImage key={image.src} image={image} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 33vw, 28vw" />
                    ))}
                  </div>
                  <div className="min-w-0 self-start">
                    <ResponsiveImage image={indianCitiesStreetScaleMaps[0]} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                    <h3 className="mt-4 block font-montserrat text-base font-bold uppercase leading-tight sm:text-lg">Street scale</h3>
                  </div>
                  <div className="min-w-0 self-start">
                    <ResponsiveImage image={indianCitiesStreetScaleMaps[1]} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="indian-cities-appendix-title" className="pt-14 sm:pt-20 lg:pt-24">
            <div className="bg-[#d8d8d8] px-4 py-5 text-center sm:py-6">
              <p className="font-montserrat text-sm font-bold uppercase sm:text-base">Work in progress</p>
            </div>
            <div className="pt-10 sm:pt-14">
              <SectionHeading id="indian-cities-appendix-title">Appendix</SectionHeading>
              <h3 className="mt-4 font-montserrat text-sm font-bold uppercase sm:text-base">User perception research — mapping activity</h3>
              <p className="mt-5 max-w-[940px] text-xs leading-[1.45] sm:text-sm">To understand people’s perception of maps, a mapping activity asked participants to select a familiar daily journey and draw a map from memory without phones. The exercise reveals which landmarks, turns, intersections, and distance cues are most meaningful for navigation.</p>
              <ResponsiveImage image={indianCitiesAppendix} sizes="(max-width: 767px) 100vw, 1141px" className="mx-auto mt-8 max-w-[1141px]" />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
