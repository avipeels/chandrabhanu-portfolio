import Image from 'next/image';
import type { Project } from './portfolio-data';

interface ProjectCardProps { project: Project; }

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group w-full">
      {project.year && <p className="mb-2 font-montserrat text-base leading-5 text-black">{project.year}</p>}
      <div className="overflow-hidden bg-neutral-100">
        <div className="relative aspect-[330/245] w-full">
          <Image src={project.image.src} alt={project.image.alt} fill className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none sm:group-hover:scale-[1.03]" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 330px" />
        </div>
        <div className="flex min-h-[86px] items-center bg-[#165C12] px-4 py-4 text-white sm:px-5">
          <h3 className="font-montserrat text-2xl font-bold uppercase leading-[1.08]">{project.title}</h3>
        </div>
      </div>
    </article>
  );
}
