import Image from 'next/image';
import Navigation from './components/Navigation';
import { projects } from './components/portfolio-data';
import ProjectCard from './components/ProjectCard';

export default function Homepage() {
  return (
    <main>
      <section aria-labelledby="portfolio-title" className="relative isolate overflow-hidden bg-stone-100">
        <Image src="/images/hero-bg-253212.png" alt="" fill priority sizes="100vw" className="-z-10 object-cover object-center" />
        <div className="mx-auto flex min-h-[23rem] max-w-[1728px] flex-col justify-between px-5 py-7 sm:px-8 sm:py-10 lg:min-h-[26rem] lg:px-16 xl:px-24">
          <Navigation />
          <div className="max-w-xl pt-16 sm:pt-24">
            <p className="font-montserrat text-sm font-bold tracking-[0.16em] text-black/70 uppercase">Selected work</p>
            <h1 id="portfolio-title" className="mt-3 font-montserrat text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-black sm:text-6xl">Making thoughtful things for people to use, play, and inhabit.</h1>
          </div>
        </div>
      </section>
      <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1728px] scroll-mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-16 xl:px-24">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10"><h2 id="work-title" className="font-montserrat text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Work</h2><p className="font-montserrat text-sm text-black/60">2018 — selected archive</p></div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          <div className="flex aspect-square items-end bg-[#e8e5e1] p-5 sm:p-6" aria-label="More projects coming soon"><p className="font-montserrat text-sm text-black/60">More work<br />coming soon.</p></div>
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
