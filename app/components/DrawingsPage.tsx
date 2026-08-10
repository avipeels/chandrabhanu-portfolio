import Image from 'next/image';
import { CaseStudyBackLink, CaseStudyImage, CaseStudyNavigation } from './CaseStudyComponents';
import {
  drawingsArchitecturePair,
  drawingsBanner,
  drawingsPlates,
  drawingsStudies,
} from './drawings-data';

export default function DrawingsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2f2f2] text-black">
      <div className="bg-white pb-4 sm:pb-6 lg:pb-8">
        <div className="relative aspect-[1728/449] w-full overflow-hidden bg-neutral-100">
          <Image src={drawingsBanner.src} alt={drawingsBanner.alt} fill priority sizes="100vw" className="object-cover" />
        </div>

        <article className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-8 xl:px-0">
          <header className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <div className="relative">
                  <CaseStudyBackLink />
                  <h1 className="font-montserrat text-xl font-bold uppercase underline decoration-1 underline-offset-4 sm:text-2xl">Drawings</h1>
                </div>
              </div>
              <CaseStudyNavigation className="shrink-0 2xl:absolute 2xl:right-[-200px] 2xl:top-0" />
            </div>
          </header>

          <section aria-label="Architectural drawing studies" className="pt-10 sm:pt-14 lg:pt-16">
            <div className="grid gap-10 sm:gap-14 lg:gap-20">
              {drawingsPlates.map((image, index) => (
                <CaseStudyImage
                  key={image.src}
                  image={image}
                  priority={index === 0}
                  sizes="(max-width: 767px) 100vw, 1260px"
                  frame="soft"
                />
              ))}
            </div>

            <div className="mx-auto mt-10 grid w-full max-w-[1180px] gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:mt-20 lg:grid-cols-[1.32fr_1fr] lg:gap-20">
              {drawingsArchitecturePair.map((image) => (
                <CaseStudyImage key={image.src} image={image} sizes="(max-width: 767px) 100vw, 50vw" frame="soft" />
              ))}
            </div>

            <div className="mt-12 grid gap-14 lg:mt-24 lg:gap-24">
              <CaseStudyImage image={drawingsStudies[0]} sizes="(max-width: 767px) 100vw, 620px" className="mx-auto max-w-[620px]" frame="soft" />
              <CaseStudyImage image={drawingsStudies[1]} sizes="(max-width: 767px) 100vw, 720px" className="mx-auto max-w-[720px]" frame="soft" />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
