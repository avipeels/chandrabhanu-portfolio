import Image from 'next/image';
import type { Project } from './portfolio-data';

interface ProjectCardProps { project: Project; }

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasYear = Boolean(project.year);

  return (
    <article className={`group w-full ${hasYear ? '' : 'mt-[27.296px]'}`}>
      {project.year && <p className="h-[27.296px] font-montserrat text-base leading-5 text-black">{project.year}</p>}
      <div className="w-full">
        <div className="relative aspect-[330/245] overflow-hidden bg-neutral-100">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="absolute left-0 h-auto w-full max-w-none transition-transform duration-500 ease-out motion-reduce:transition-none sm:group-hover:scale-[1.02]"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 330px"
            style={{ top: `${-project.image.cropTop}px` }}
          />
        </div>
        <div className="flex min-h-[85px] items-center justify-center bg-[#165C12] px-4 py-4 text-center text-white sm:px-5">
          <h3 className="font-montserrat text-2xl font-bold uppercase leading-[1.08] sm:text-[32px]">{project.title}</h3>
        </div>
      </div>
    </article>
  );
}
