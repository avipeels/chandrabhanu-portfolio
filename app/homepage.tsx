import Image from 'next/image';
import Link from 'next/link';

const homeActions = [
  { href: '/projects', label: 'Curated Works', className: 'lg:w-[344px]' },
  { href: '/about', label: 'Know More About Me', className: 'lg:w-[403px]' },
] as const;

export default function Homepage() {
  return (
    <main className="paper-background relative isolate overflow-hidden text-black">
      <section aria-label="Portfolio introduction">
        <div className="relative aspect-[1728/378] min-h-28 w-full overflow-hidden sm:min-h-40 lg:min-h-0">
          <Image
            src="/images/v2/home-collage-top.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="mx-auto flex w-full max-w-[1218px] flex-col px-5 py-10 sm:px-8 sm:py-14 lg:py-[76px]">
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
            <Image
              src="/images/v2/chandra-identity-mark.png"
              alt=""
              width={181}
              height={181}
              className="size-16 shrink-0 sm:size-24 lg:size-[181px]"
            />
            <h1 className="font-montserrat text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-[64px]">
              Chandra Bhanu
            </h1>
          </div>

          <p className="mt-8 max-w-[1218px] text-base leading-7 sm:mt-10 sm:text-xl sm:leading-9 lg:mt-12 lg:text-2xl lg:leading-[42px]">
            My background in architecture and education built my design foundation, but I transitioned to UX for a larger mission: impact at scale. I want to move beyond exclusive design to create accessible, human-centric solutions that empower everyone, not just the elite.
          </p>

          <nav aria-label="Portfolio destinations" className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-7 lg:mt-[60px]">
            {homeActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={`inline-flex h-14 w-full items-center justify-center rounded-full bg-[#616161] px-6 text-center text-base font-semibold text-white transition-colors hover:bg-[#4e4e4e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:w-auto sm:min-w-64 sm:text-lg lg:h-[80px] lg:text-2xl ${action.className}`}
              >
                {action.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative aspect-[1728/378] min-h-28 w-full overflow-hidden sm:min-h-40 lg:min-h-0">
          <Image
            src="/images/v2/home-collage-bottom.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>
    </main>
  );
}
