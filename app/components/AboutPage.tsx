import Image from 'next/image';
import Navigation from './Navigation';
import { aboutTimeline, contactLinks } from './about-data';

const portraitImages = [
  { src: '/images/about_1.png', alt: 'Chandra working at a desk', width: 241, height: 181, position: 'left-0 top-[5.58%] w-[46.35%]' },
  { src: '/images/about_2.png', alt: 'Two people standing by the sea', width: 205, height: 205, position: 'left-[50.96%] top-0 w-[39.42%]' },
  { src: '/images/about_3.png', alt: 'Chandra holding a stone outdoors', width: 185, height: 246, position: 'left-[14.62%] top-[53.49%] w-[35.58%]' },
  { src: '/images/about_4.png', alt: 'Portrait of Chandra', width: 185, height: 199, position: 'left-[55%] top-[53.49%] w-[35.58%]' },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f7f7] text-black">
      <section aria-label="About page image banner" className="w-full pt-4 lg:pt-8">
        <div className="relative aspect-[1728/230] w-full overflow-hidden">
          <Image src="/images/about_header.png" alt="Trees, flowers, and a dragonfly arranged in a panoramic collage" fill priority sizes="100vw" className="object-cover" />
        </div>
      </section>

      <section className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-7 sm:px-10 lg:px-0 lg:pb-24 lg:pt-8">
        <Navigation active="about" roles="Designer | Thinker | Maker | Explorer | Mentor | Mother of a toddler" />

        <div className="mx-auto mt-12 grid w-full max-w-[1120px] items-center gap-10 md:mt-16 md:grid-cols-2 md:gap-8 lg:mt-20 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-16">
          <div className="relative mx-auto mb-12 aspect-[520/430] w-full max-w-[520px] md:mb-0">
            {portraitImages.map((image) => (
              <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} className={`absolute h-auto object-cover grayscale ${image.position}`} sizes="(max-width: 639px) 90vw, 520px" />
            ))}
          </div>
          <div className="min-w-0 max-w-[520px] space-y-6 text-base leading-[1.25] sm:text-lg">
            <p>My design journey hasn&apos;t been a straight line, and that is exactly my greatest asset. As an architect who has naturally expanded into visual and UX design, my career has been shaped by rich, cross-disciplinary explorations. Even my teaching experience has helped in strengthening my foundation in design.</p>
            <p>By keeping the user at the absolute centre of my process, I translate complex spatial and digital challenges into seamless, enriching experiences.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="journey-title" className="mx-auto w-full max-w-[1080px] px-4 pb-20 sm:px-8 lg:px-0 lg:pb-28">
        <h1 id="journey-title" className="mb-8 text-center font-montserrat text-2xl font-bold text-[#165C12] sm:mb-12 sm:text-3xl">The journey so far!</h1>
        <div className="space-y-0">
          {aboutTimeline.map((entry, index) => (
            <div key={`${entry.year}-${index}`} className="grid min-w-0 gap-4 border-b border-black/60 py-5 md:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.2fr)] md:gap-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12">
              <p className="order-2 min-w-0 self-center break-words text-center font-montserrat-subrayada text-xs leading-[1.2] text-[#165C12] sm:text-sm md:order-1 md:text-base">{entry.annotation}</p>
              <div className="order-1 min-w-0 font-montserrat text-sm leading-[1.3] sm:text-base md:order-2">
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

      <section aria-label="Closing image" className="w-full">
        <div className="relative aspect-[16/5] min-h-[220px] overflow-hidden sm:min-h-[320px] lg:min-h-0">
          <Image src="/images/about_footer.png" alt="Abstract architectural collage" fill sizes="100vw" className="object-cover object-left grayscale" />
        </div>
      </section>
    </main>
  );
}
