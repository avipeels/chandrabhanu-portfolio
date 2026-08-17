import Image from 'next/image';
import Link from 'next/link';
import { beliefs, desktopDisciplineLayout, disciplines, identityLabels, inspiration, journey, whoAmIImages } from './about-v2-data';

function SectionTitle({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <div>
      <h2 id={id} className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl lg:text-[40px]">{children}</h2>
      <span aria-hidden="true" className="mt-4 block h-1 w-14 bg-black sm:w-[119px]" />
    </div>
  );
}

function ImageBand({ src }: { src: string }) {
  return (
    <div aria-hidden="true" className="relative aspect-[1728/230] min-h-20 w-full overflow-hidden sm:min-h-28">
      <Image src={src} alt="" fill sizes="100vw" className="object-cover opacity-50" />
      <span className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-black/15 to-transparent" />
    </div>
  );
}

function CollageLabel({ children, className, layer = 'front' }: { children: React.ReactNode; className: string; layer?: 'behind' | 'front' }) {
  return (
    <span className={`absolute ${layer === 'front' ? 'z-30' : 'z-10'} bg-[#d9d9d9] px-5 py-3 font-handwriting text-[clamp(1rem,1.55vw,1.5rem)] font-medium leading-none tracking-[0.02em] shadow-[-4px_4px_6px_rgba(0,0,0,0.25)] ${className}`}>
      {children}
    </span>
  );
}

function VerticalCollageLabel({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span className={`absolute z-30 flex items-center justify-center bg-[#d9d9d9] px-2 py-3 shadow-[-4px_4px_6px_rgba(0,0,0,0.25)] ${className}`}>
      <span className="-rotate-90 whitespace-nowrap font-handwriting text-[clamp(1rem,1.55vw,1.5rem)] font-medium leading-none tracking-[0.02em]">{children}</span>
    </span>
  );
}

function JourneyEntry({ entry }: { entry: { year: string; detail: string } }) {
  return (
    <div className="flex items-start">
      <span aria-hidden="true" className="mr-2">•</span>
      <strong className="shrink-0">{entry.year}</strong>
      <span className="min-w-0">: {entry.detail}</span>
    </div>
  );
}

function JourneyMilestone({ labels, entry }: { labels: readonly string[]; entry: { year: string; detail: string } }) {
  return (
    <div>
      <ul aria-label={`Disciplines for ${entry.year}`} className="mb-3 flex flex-wrap gap-3">
        {labels.map((label) => (
          <li key={label} className="bg-[#d9d9d9] px-4 py-2 font-handwriting text-base shadow-[-2px_3px_4px_rgba(0,0,0,0.16)] lg:px-7 lg:text-xl">
            {label}
          </li>
        ))}
      </ul>
      <JourneyEntry entry={entry} />
    </div>
  );
}

function JourneyDisciplineConnector({ index }: { index: number }) {
  const linePositions = [59, 73, 67, 68, 64, 71, 73, 64] as const;
  const start = linePositions[index];
  const end = linePositions[index + 1];

  if (start === undefined || end === undefined) return null;

  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute -left-[100px] top-3 z-0 h-[calc(100%+2.25rem)] w-[340px] overflow-visible">
      <path d={`M ${start} 0 L ${(start + end) / 2} 52 L ${end} 100`} fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="paper-background relative isolate min-h-screen flex-1 overflow-hidden text-black">
      <ImageBand src="/images/v2/about/top-band.png" />

      <nav aria-label="Primary navigation" className="mx-auto flex max-w-[1566px] justify-end gap-12 px-5 py-6 font-montserrat text-base font-semibold leading-none tracking-[-0.02em] sm:px-8 lg:gap-[84px] lg:py-7">
        <Link href="/" className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Home</Link>
        <Link href="/projects" className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Work</Link>
      </nav>

      <section aria-labelledby="who-am-i-title" className="mx-auto max-w-[1566px] px-5 pb-16 pt-8 sm:px-8 lg:pb-32 lg:pt-12">
        <SectionTitle id="who-am-i-title">Who am I?</SectionTitle>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
          {whoAmIImages.map((image) => (
            <figure key={image.src} className="relative overflow-hidden border border-black bg-white shadow-[-3px_4px_5px_rgba(0,0,0,0.2)]">
              <Image src={image.src} alt={image.alt} width={900} height={700} className="aspect-[4/3] w-full object-cover" sizes="(max-width: 639px) 90vw, 45vw" />
              <figcaption className="bg-[#d9d9d9] px-3 py-2 text-center font-handwriting text-lg">{image.label}</figcaption>
            </figure>
          ))}
        </div>
        <ul aria-label="More about Chandra" className="mt-5 flex flex-wrap gap-3 lg:hidden">
          {identityLabels.map((label) => <li key={label} className="bg-[#d9d9d9] px-3 py-2 font-handwriting text-lg font-medium shadow-[-2px_3px_4px_rgba(0,0,0,0.16)]">{label}</li>)}
        </ul>
        <div className="relative mt-12 hidden aspect-[1455/878] w-full lg:block">
          <CollageLabel layer="behind" className="left-[21%] top-[4.5%] w-[22%]">Architect</CollageLabel>
          <VerticalCollageLabel className="left-[45.5%] top-[-19%] h-[28%] w-[4.5%]">Thinker</VerticalCollageLabel>
          <CollageLabel layer="behind" className="left-[55%] top-0 w-[25%]">Mother to a toddler</CollageLabel>
          <CollageLabel className="left-[13%] top-[29%] w-[16%] text-center">Hardworker</CollageLabel>
          <VerticalCollageLabel className="left-[70%] top-[7%] h-[28%] w-[4.5%]">Designer</VerticalCollageLabel>
          <VerticalCollageLabel className="left-[10%] top-[50%] h-[28%] w-[4.5%]">Quick learner</VerticalCollageLabel>
          <VerticalCollageLabel className="left-[36%] top-[35.7%] h-[29%] w-[4.5%]">Researcher</VerticalCollageLabel>
          <CollageLabel className="left-[77%] top-[46%]">Loves Photography</CollageLabel>
          <CollageLabel layer="behind" className="left-[46.5%] top-[80%] w-[24%] text-right">Maker</CollageLabel>
          <VerticalCollageLabel className="left-[72.5%] top-[74.6%] h-[22%] w-[4.5%]">Explorer</VerticalCollageLabel>

          <div className="absolute left-[29%] top-[9%] z-20 w-[21%] border border-black bg-white shadow-[-4px_4px_6px_rgba(0,0,0,0.25)]">
            <Image src={whoAmIImages[0].src} alt={whoAmIImages[0].alt} width={900} height={700} className="aspect-[307/230] w-full object-cover" sizes="360px" />
          </div>
          <div className="absolute left-[42%] top-[46%] z-20 w-[17%] border border-black bg-white shadow-[-4px_4px_6px_rgba(0,0,0,0.25)]">
            <Image src={whoAmIImages[1].src} alt={whoAmIImages[1].alt} width={700} height={900} className="aspect-[236/315] w-full object-cover" sizes="280px" />
          </div>
          <div className="absolute left-[61%] top-[46%] z-20 w-[16%] border border-black bg-white shadow-[-4px_4px_6px_rgba(0,0,0,0.25)]">
            <Image src={whoAmIImages[2].src} alt={whoAmIImages[2].alt} width={700} height={800} className="aspect-[236/254] w-full object-cover" sizes="280px" />
          </div>
          <div className="absolute left-[15%] top-[46%] z-20 w-[19%] border border-black bg-white shadow-[-4px_4px_6px_rgba(0,0,0,0.25)]">
            <Image src={whoAmIImages[4].src} alt={whoAmIImages[4].alt} width={700} height={800} className="aspect-[275/287] w-full object-cover" sizes="300px" />
          </div>
          <div className="absolute left-[52%] top-[6%] z-20 w-[18%] border border-black bg-white shadow-[-4px_4px_6px_rgba(0,0,0,0.25)]">
            <Image src={whoAmIImages[3].src} alt={whoAmIImages[3].alt} width={700} height={900} className="aspect-square w-full object-cover" sizes="280px" />
          </div>
        </div>
      </section>

      <ImageBand src="/images/v2/about/beliefs-band.jpg" />
      <section aria-labelledby="beliefs-title" className="mx-auto max-w-[1566px] px-5 py-14 sm:px-8 lg:py-20">
        <SectionTitle id="beliefs-title">What I believe in?</SectionTitle>
        <ol className="mt-8 space-y-4 text-base leading-7 sm:text-lg lg:mt-12 lg:text-[28px] lg:leading-[1.6]">
          {beliefs.map((belief, index) => <li key={belief}><span className="mr-6 font-medium">{String(index + 1).padStart(2, '0')}</span>{belief}</li>)}
        </ol>
      </section>

      <ImageBand src="/images/v2/about/journey-band.jpg" />
      <section aria-labelledby="journey-title" className="mx-auto max-w-[1536px] px-5 py-14 sm:px-8 lg:py-24">
        <SectionTitle id="journey-title">What my journey looks like?</SectionTitle>
        <ol className="mt-10 list-none space-y-8 text-base leading-7 lg:hidden">
          {journey.map((entry, journeyIndex) => {
            const labels = disciplines.filter((_, index) => desktopDisciplineLayout[index].journeyIndex === journeyIndex || (journeyIndex === journey.length - 1 && index === 6));

            return <li key={entry.year}><JourneyMilestone labels={labels} entry={entry} /></li>;
          })}
        </ol>

        <ol className="mt-16 hidden list-none gap-y-9 lg:grid">
          {disciplines.map((discipline, index) => {
            const layout = desktopDisciplineLayout[index];
            const entry = layout.journeyIndex === undefined ? undefined : journey[layout.journeyIndex];

            return (
              <li key={discipline} className="relative grid grid-cols-[280px_minmax(0,1fr)] items-start gap-4 text-[22px] leading-[1.55]">
                <JourneyDisciplineConnector index={index} />
                <div className="relative z-10 pt-0.5" style={{ marginLeft: layout.offset, transform: `translateY(${layout.offsetY})` }}>
                  <span className="bg-[#d9d9d9] px-7 py-2 font-handwriting text-xl shadow-[-2px_3px_4px_rgba(0,0,0,0.16)]">{discipline}</span>
                </div>
                {entry && <JourneyEntry entry={entry} />}
              </li>
            );
          })}
        </ol>
      </section>

      <ImageBand src="/images/v2/about/inspiration-band.jpg" />
      <section aria-labelledby="inspiration-title" className="mx-auto max-w-[1536px] px-5 py-14 sm:px-8 lg:py-24">
        <SectionTitle id="inspiration-title">What inspires me?</SectionTitle>
        <div className="mt-10 grid gap-8 lg:hidden">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {inspiration.books.map((book) => <Image key={book.src} src={book.src} alt={book.alt} width={172} height={246} className="h-auto w-24 object-cover sm:w-32" sizes="128px" />)}
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {inspiration.films.map((film) => <Image key={film.src} src={film.src} alt={film.alt} width={189} height={189} className="size-16 rounded-full object-cover shadow-[-2px_3px_4px_rgba(0,0,0,0.2)] sm:size-24" sizes="96px" />)}
          </div>
        </div>
        <div className="relative mt-16 hidden h-[475px] max-w-[1280px] lg:block">
          <span aria-hidden="true" className="absolute left-[75px] right-0 top-[88px] border-t border-black/60" />
          <span aria-hidden="true" className="absolute left-[75px] top-[88px] h-[282px] border-l border-black/60" />
          <span aria-hidden="true" className="absolute right-0 top-[88px] h-[282px] border-l border-black/60" />
          <span aria-hidden="true" className="absolute left-[75px] right-0 top-[370px] border-t border-black/60" />

          <div className="absolute left-0 top-0 flex gap-11">
            {inspiration.books.map((book) => <Image key={book.src} src={book.src} alt={book.alt} width={172} height={246} className="h-auto w-[150px] object-cover" sizes="150px" />)}
          </div>
          <div className="absolute left-[260px] top-[283px] flex gap-11">
            {inspiration.films.map((film) => <Image key={film.src} src={film.src} alt={film.alt} width={189} height={189} className="size-[175px] rounded-full object-cover shadow-[-2px_3px_4px_rgba(0,0,0,0.2)]" sizes="175px" />)}
          </div>
        </div>
      </section>
    </main>
  );
}
