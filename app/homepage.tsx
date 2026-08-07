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
      <section id="work" aria-labelledby="work-title" className="mx-auto w-full max-w-[1130px] scroll-mt-6 px-5 pb-20 pt-14 sm:px-8 sm:pt-16 lg:px-0">
        <h1 id="work-title" className="sr-only">Selected work</h1>
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-[70px] lg:gap-y-[72px]">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
    </main>
  );
}
