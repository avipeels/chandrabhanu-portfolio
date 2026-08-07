import Link from 'next/link';

interface NavigationProps {
  active?: 'work' | 'about';
}

export default function Navigation({ active = 'work' }: NavigationProps) {
  const workHref = active === 'about' ? '/#work' : '#work';
  const brandHref = active === 'about' ? '/' : '#work';

  return (
    <header className="font-montserrat">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
        <Link href={brandHref} className="text-2xl font-bold uppercase leading-none text-[#165C12] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#165C12] sm:text-[32px]">
          Chandra Bhanu
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm sm:gap-8 sm:text-base">
            <li>
              <Link href={workHref} className={active === 'work' ? 'font-semibold text-[#165C12] underline decoration-1 underline-offset-4' : 'text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black'}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className={active === 'about' ? 'font-semibold text-[#165C12] underline decoration-1 underline-offset-4' : 'text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black'}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <p className="mt-3 max-w-3xl text-base leading-4 font-normal text-black">
        {tagline}
      </p> */}
    </header>
  );
}
