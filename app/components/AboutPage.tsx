import Image from 'next/image';
import Navigation from './Navigation';
import { aboutTimeline, contactLinks } from './about-data';

const portraitImages = [
  { src: '/images/school-project-2068ee.png', alt: 'Portrait placeholder from the portfolio image set' },
  { src: '/images/tokyo-anti-library.png', alt: 'Landscape placeholder from the portfolio image set' },
  { src: '/images/drawings-514a7a.png', alt: 'Sketch placeholder from the portfolio image set' },
  { src: '/images/board-game-29108c.png', alt: 'Project image placeholder from the portfolio image set' },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <section aria-label="About page image banner" className="mx-auto max-w-[1580px] px-4 pt-4 sm:px-8 lg:px-14 lg:pt-8">
        <div className="relative aspect-[1728/230] w-full overflow-hidden">
          <Image src="/images/about_header.png" alt="Trees, flowers, and a dragonfly arranged in a panoramic collage" fill priority sizes="100vw" className="object-cover" />
        </div>
      </section>

      <section className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-7 sm:px-10 lg:px-0 lg:pb-24 lg:pt-8">
        <div className="pointer-events-none absolute right-[-8%] top-14 hidden h-32 w-[36%] rounded-[50%] border-t-4 border-[#b9e1ff] lg:block" aria-hidden="true" />
        <Navigation active="about" />

        <div className="mx-auto mt-16 grid max-w-[1040px] items-center gap-12 lg:grid-cols-[390px_1fr] lg:gap-16 lg:mt-20">
          <div className="grid grid-cols-2 items-start gap-4 sm:gap-5">
            {portraitImages.map((image, index) => (
              <div key={image.src} className={`relative overflow-hidden bg-neutral-200 grayscale ${index === 1 ? 'mt-[-20px]' : ''} ${index === 2 ? 'ml-8' : ''}`}>
                <Image src={image.src} alt={image.alt} width={420} height={420} className="h-full w-full object-cover" sizes="(max-width: 1023px) 42vw, 190px" />
              </div>
            ))}
          </div>
          <div className="max-w-[520px] space-y-6 text-base leading-[1.18] sm:text-lg">
            <p>My design journey hasn&apos;t been a straight line, and that is exactly my greatest asset. As an architect who has naturally expanded into visual and UX design, my career has been shaped by rich, cross-disciplinary explorations. Even my teaching experience has helped in strengthening my foundation in design.</p>
            <p>By keeping the user at the absolute centre of my process, I translate complex spatial and digital challenges into seamless, enriching experiences.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="journey-title" className="mx-auto max-w-[1080px] px-6 pb-20 sm:px-10 lg:px-0 lg:pb-28">
        <h1 id="journey-title" className="mb-12 text-center font-montserrat text-2xl font-bold text-[#165C12] sm:text-3xl">The journey so far!</h1>
        <div className="space-y-0">
          {aboutTimeline.map((entry, index) => (
            <div key={`${entry.year}-${index}`} className="grid gap-4 border-b border-black/60 py-5 md:grid-cols-[360px_1fr] md:gap-12">
              <p className="self-center text-center font-montserrat-subrayada text-sm leading-[1.1] text-[#165C12] sm:text-base">{entry.annotation}</p>
              <div className="font-montserrat text-sm leading-[1.3] sm:text-base">
                {entry.year && <p className="mb-2 font-bold">{entry.year}</p>}
                {entry.details.map((detail) => <p key={detail} className="font-semibold">{detail}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="contact-title" className="mx-auto max-w-[680px] px-6 pb-20 sm:px-10 lg:pb-28">
        <h2 id="contact-title" className="mb-8 text-center font-montserrat text-2xl font-bold text-[#165C12] sm:text-3xl">Get in Touch .....</h2>
        <ul className="mx-auto max-w-[520px] space-y-3 font-montserrat text-sm sm:text-base">
          {contactLinks.map((contact) => (
            <li key={contact.value} className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center bg-white text-sm font-bold text-black" aria-hidden="true">{contact.label}</span>
              <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined} className="break-all underline decoration-black/50 underline-offset-2 transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">{contact.value}</a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Closing image" className="mx-auto max-w-[1580px] px-4 pb-8 sm:px-8 lg:px-14 lg:pb-14">
        <div className="relative aspect-[16/5] min-h-[220px] overflow-hidden sm:min-h-[320px] lg:min-h-0">
          <Image src="/images/hero-bg-253212.png" alt="Abstract architectural collage" fill sizes="100vw" className="object-cover object-left grayscale" />
        </div>
      </section>
    </main>
  );
}
