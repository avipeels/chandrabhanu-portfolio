import Image from 'next/image';
import Link from 'next/link';
import type { Project } from './portfolio-data';

interface ProjectCardProps { project: Project; }

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasYear = Boolean(project.year);
  const cardClassName = `group flex h-full min-w-0 w-full flex-col lg:h-auto ${hasYear ? '' : 'mt-[27.296px]'}`;

  const cardContent = (
    <>
      {project.year && <p className="h-[27.296px] font-montserrat text-base leading-5 text-black">{project.year}</p>}
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-lg lg:flex-none">
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
        <div className="flex min-h-[75px] flex-1 items-center justify-center bg-black px-4 py-4 text-center text-white sm:px-5 lg:h-[120px] lg:flex-none lg:min-h-0">
          <h3 className="break-words font-montserrat text-2xl font-bold uppercase leading-[1.08] md:text-[22px] lg:text-[26px]">{project.title}</h3>
        </div>
      </div>
    </>
  );

  return project.href ? (
    <Link href={project.href} className={`${cardClassName} focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black/60`}>
      {cardContent}
    </Link>
  ) : (
    <article className={cardClassName}>{cardContent}</article>
  );
}
