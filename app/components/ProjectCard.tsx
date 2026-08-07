import Image from 'next/image';
import type { Project } from './portfolio-data';

interface ProjectCardProps { project: Project; }

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative aspect-square w-full overflow-hidden bg-neutral-100">
      <Image src={project.image.src} alt={project.image.alt} fill className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none sm:group-hover:scale-[1.03]" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1440px) 33vw, 330px" />
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent p-5 text-white sm:p-6">
        {project.year && <p className="font-montserrat text-sm">{project.year}</p>}
        <h3 className="mt-1 max-w-[15ch] font-montserrat text-xl font-bold leading-tight sm:text-2xl">{project.title}</h3>
      </div>
    </article>
  );
}
