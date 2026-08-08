import Image from 'next/image';
import Link from 'next/link';
import { movieTicketImages, type MovieCaseStudyImage } from './movie-ticket-data';

interface ResponsiveImageProps {
  image: MovieCaseStudyImage;
  priority?: boolean;
  className?: string;
}

function ResponsiveImage({ image, priority = false, className = '' }: ResponsiveImageProps) {
  return (
    <figure
      className={`relative w-full overflow-hidden rounded-sm bg-white shadow-[0_7px_20px_rgba(0,0,0,0.14)] ${className}`}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 92vw, 1180px"
        className="object-contain"
      />
    </figure>
  );
}

function CaseStudyNavigation() {
  return (
    <nav aria-label="Case study navigation" className="flex shrink-0 items-center gap-6 text-xs sm:text-sm">
      <Link href="/#work" className="font-semibold text-[#165C12] underline decoration-1 underline-offset-4">Work</Link>
      <Link href="/about" className="transition-opacity hover:opacity-60">About</Link>
    </nav>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="font-montserrat text-base font-bold uppercase sm:text-lg lg:text-xl">{children}</h2>;
}

const sections = [
  ['movie-problem-title', 'The problem', movieTicketImages.problem],
  ['movie-goals-title', 'Goals', movieTicketImages.goals],
  ['movie-personas-title', 'User personas', movieTicketImages.personas],
  ['movie-flow-title', 'User flow', movieTicketImages.userFlow],
  ['movie-architecture-title', 'Information architecture', movieTicketImages.informationArchitecture],
  ['movie-ideation-title', 'Ideation - Crazy 8s', movieTicketImages.ideation],
  ['movie-wireframes-title', 'Digital wireframes', movieTicketImages.wireframes],
  ['movie-prototype-title', 'Low-fidelity prototype', movieTicketImages.prototype],
] as const;

export default function MovieTicketBookingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2f2f2] text-black">
      <div className="bg-white py-4 sm:py-6 lg:py-8">
        <div className="relative aspect-[1728/449] w-full overflow-hidden bg-neutral-100 shadow-[0_7px_20px_rgba(0,0,0,0.14)]">
          <Image src={movieTicketImages.hero.src} alt={movieTicketImages.hero.alt} fill priority sizes="100vw" className="object-cover" />
        </div>

        <article className="mx-auto max-w-[1260px] px-4 pb-16 pt-5 sm:px-8 sm:pb-24 sm:pt-7 lg:px-8 xl:px-0">
          <header className="relative">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <Link href="/#work" aria-label="Back to work" className="mb-3 block w-fit text-3xl leading-none transition-opacity hover:opacity-60 xl:absolute xl:right-full xl:top-[-3px] xl:mr-16 xl:mb-0">←</Link>
                <h1 className="font-montserrat text-lg font-bold uppercase underline decoration-1 underline-offset-4 sm:text-xl lg:text-2xl">Movie Ticket Booking App</h1>
                <p className="mt-2 text-xs leading-relaxed text-black/80 sm:text-sm">Google UX design Professional Certificate | User Experience design | Visual Design</p>
              </div>
              <CaseStudyNavigation />
            </div>
            <p className="mt-10 max-w-[1160px] text-xs leading-[1.45] sm:text-sm">The mobile ticketing app is an app designed to help users book movie ticket quickly and easily so that they don&apos;t miss their favorite movies. It is also designed to do much more than just book tickets. Such as watching trailers, reading about the cast, writing movie reviews etc. The process started with first understanding the user by creating user personas, to know their goals, needs and pain points.</p>
          </header>

          <div className="space-y-14 sm:space-y-20 lg:space-y-24">
            {sections.map(([id, title, image]) => (
              <section key={id} aria-labelledby={id} className="pt-2">
                <SectionHeading id={id}>{title}</SectionHeading>
                <ResponsiveImage image={image} className="mt-7" />
              </section>
            ))}

            <section aria-labelledby="movie-visual-title" className="pt-2">
              <SectionHeading id="movie-visual-title">Visual design</SectionHeading>
              <p className="mt-5 max-w-[1160px] text-xs leading-[1.45] sm:text-sm">The selected color #422448 strikes the perfect balance: it provides a sophisticated, high-contrast canvas that respects the diverse artwork of the posters while injecting a moody, cinematic energy that pure black or standard jewel tones didn&apos;t quite work.</p>
              <div className="mt-7 space-y-7 sm:space-y-10">
                <ResponsiveImage image={movieTicketImages.visualDesign} />
                <ResponsiveImage image={movieTicketImages.designSystem} />
              </div>
            </section>

            <section aria-labelledby="movie-mockups-title" className="pt-2">
              <SectionHeading id="movie-mockups-title">Final mock-ups</SectionHeading>
              <p className="mt-5 max-w-[1160px] text-xs leading-[1.45] sm:text-sm">Some of the key highlights of the final mock-ups are as follows:<br />1. Minimizes steps from movie selection to final payment, allowing users to secure tickets quickly and intuitively.<br />2. A balanced layout and a purpose-driven color scheme that draws attention to showtimes, seat selection, and primary call-to-action buttons.</p>
              <ResponsiveImage image={movieTicketImages.mockups} className="mt-7" />
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
