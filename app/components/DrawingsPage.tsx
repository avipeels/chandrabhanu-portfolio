import Image from 'next/image';
import Link from 'next/link';
import {
  drawingsArchitecturePair,
  drawingsBanner,
  drawingsPlates,
  drawingsStudies,
  type DrawingsImage,
} from './drawings-data';

function CaseStudyNavigation() {
  return (
    <nav aria-label="Case study navigation" className="flex shrink-0 items-center gap-6 text-xs sm:text-sm 2xl:absolute 2xl:right-[-200px] 2xl:top-0">
      <Link href="/#work" className="font-semibold text-[#165C12] underline decoration-1 underline-offset-4">Work</Link>
      <Link href="/about" className="text-black transition-opacity hover:opacity-60">About</Link>
    </nav>
  );
}

function ResponsiveImage({ image, sizes, className = '', priority = false }: { image: DrawingsImage; sizes: string; className?: string; priority?: boolean }) {
  return (
    <div className={`relative w-full rounded-sm bg-white shadow-[0_6px_18px_rgba(0,0,0,0.14)] ${className}`} style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} className="object-contain" />
    </div>
  );
}

export default function DrawingsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2f2f2] text-black">
      <div className="bg-white py-4 sm:py-6 lg:py-8">
        <div className="relative aspect-[1728/449] w-full overflow-hidden bg-neutral-100">
          <Image src={drawingsBanner.src} alt={drawingsBanner.alt} fill priority sizes="100vw" className="object-cover" />
        </div>

        <article className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-8 xl:px-0">
          <header className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <div className="relative">
                  <Link href="/#work" aria-label="Back to work" className="mb-3 block w-fit text-3xl leading-none transition-opacity hover:opacity-60 xl:absolute xl:right-full xl:top-[-3px] xl:mr-16 xl:mb-0">←</Link>
                  <h1 className="font-montserrat text-xl font-bold uppercase underline decoration-1 underline-offset-4 sm:text-2xl">Drawings</h1>
                </div>
              </div>
              <CaseStudyNavigation />
            </div>
          </header>

          <section aria-label="Architectural drawing studies" className="pt-10 sm:pt-14 lg:pt-16">
            <div className="grid gap-10 sm:gap-14 lg:gap-20">
              {drawingsPlates.map((image, index) => (
                <ResponsiveImage
                  key={image.src}
                  image={image}
                  priority={index === 0}
                  sizes="(max-width: 767px) 100vw, 1260px"
                />
              ))}
            </div>

            <div className="mx-auto mt-10 grid w-full max-w-[1180px] gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:mt-20 lg:grid-cols-[1.32fr_1fr] lg:gap-20">
              {drawingsArchitecturePair.map((image) => (
                <ResponsiveImage key={image.src} image={image} sizes="(max-width: 767px) 100vw, 50vw" />
              ))}
            </div>

            <div className="mt-12 grid gap-14 lg:mt-24 lg:gap-24">
              <ResponsiveImage image={drawingsStudies[0]} sizes="(max-width: 767px) 100vw, 620px" className="mx-auto max-w-[620px]" />
              <ResponsiveImage image={drawingsStudies[1]} sizes="(max-width: 767px) 100vw, 720px" className="mx-auto max-w-[720px]" />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
