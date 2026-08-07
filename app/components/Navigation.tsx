import { disciplines } from './portfolio-data';

export default function Navigation() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-5">
      <a href="#work" className="font-montserrat-subrayada text-xl leading-none text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-2xl">
        Chandra Bhanu
      </a>
      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-6 font-montserrat text-sm sm:text-base">
          <li><a href="#work" className="text-[#e63b3b] underline decoration-1 underline-offset-4">Work</a></li>
          <li><a href="#about" className="text-black transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">About</a></li>
        </ul>
      </nav>
      <p className="w-full max-w-2xl font-montserrat text-sm leading-relaxed text-black sm:text-base">
        {disciplines.join(' · ')}
      </p>
    </header>
  );
}
