import Link from 'next/link';
import { disciplines } from './portfolio-data';
import PortfolioIdentity from './PortfolioIdentity';

interface NavigationProps {
  active?: 'work' | 'about';
  roles?: string;
}

export default function Navigation({ active = 'work', roles = disciplines.join(' | ') }: NavigationProps) {
  const workHref = active === 'about' ? '/#work' : '#work';
  const brandHref = active === 'about' ? '/' : '#work';

  return (
    <header className="font-montserrat">
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
        <PortfolioIdentity href={brandHref} roles={roles} />
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
    </header>
  );
}
