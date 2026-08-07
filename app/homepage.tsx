import Image from 'next/image';
import Navigation from './components/Navigation';
import { projects } from './components/portfolio-data';
import ProjectCard from './components/ProjectCard';

export default function Homepage() {
  return (
    <main className="bg-white">
      <section aria-label="Portfolio introduction">
        <div className="relative aspect-[1728/378] w-full overflow-hidden">
          <Image
            src="/images/hero-bg-253212.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="mx-auto max-w-[1342px] px-5 pb-1 pt-8 sm:px-8 lg:px-0">
          <Navigation />
        </div>
      </section>
      <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1130px] scroll-mt-6 px-5 pb-20 pt-16 sm:px-8 lg:px-0">
        <h1 id="work-title" className="sr-only">Selected work</h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[70px] lg:gap-y-[72px]">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
      <section id="about" aria-labelledby="about-title" className="scroll-mt-6 border-t border-black/10 bg-stone-50">
        <div className="mx-auto grid max-w-[1728px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3 lg:px-16 xl:px-24">
          <h2 id="about-title" className="font-montserrat text-2xl font-bold tracking-[-0.03em] sm:text-3xl">About</h2>
          <p className="max-w-2xl font-montserrat text-xl leading-relaxed text-black/80 lg:col-span-2">Chandra Bhanu is a multidisciplinary designer exploring the relationship between spaces, systems, and the people who move through them.</p>
        </div>
      </section>
    </main>
  );
}
