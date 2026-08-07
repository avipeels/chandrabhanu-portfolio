import { disciplines } from './portfolio-data';

export default function Navigation() {
  return (
    <header className="font-montserrat">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
        <a href="#work" className="text-2xl font-bold uppercase leading-none text-[#165C12] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#165C12] sm:text-[32px]">
          Chandra Bhanu
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm sm:gap-8 sm:text-base">
            <li><a href="#work" className="font-semibold text-[#165C12] underline decoration-1 underline-offset-4">Work</a></li>
            <li><a href="#about" className="text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">About</a></li>
          </ul>
        </nav>
      </div>
      <p className="mt-3 max-w-3xl text-base leading-4 font-normal text-black">
        {disciplines.join(' | ')}
      </p>
    </header>
  );
}
