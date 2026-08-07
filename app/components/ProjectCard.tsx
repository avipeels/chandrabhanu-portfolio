import Image from 'next/image';
import type { Project } from './portfolio-data';

interface ProjectCardProps { project: Project; }

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasYear = Boolean(project.year);

  return (
    <article className={`group flex h-full min-w-0 w-full flex-col ${hasYear ? '' : 'mt-[27.296px]'}`}>
      {project.year && <p className="h-[27.296px] font-montserrat text-base leading-5 text-black">{project.year}</p>}
      <div className="flex min-h-0 w-full flex-1 flex-col">
        <div className="relative aspect-[330/245] overflow-hidden bg-neutral-100">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none sm:group-hover:scale-[1.02]"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 330px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E1E1E]/80" />
        </div>
        <div className="flex min-h-[85px] flex-1 items-center justify-center bg-[#165C12] px-4 py-4 text-center text-white sm:px-5">
          <h3 className="break-words font-montserrat text-2xl font-bold uppercase leading-[1.08] md:text-[26px] lg:text-[32px]">{project.title}</h3>
        </div>
      </div>
    </article>
  );
}
