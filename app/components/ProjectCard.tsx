import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  year?: string;
  imageSrc: string;
  imageAlt: string;
  position?: 'top' | 'bottom';
}

export default function ProjectCard({ 
  title, 
  year, 
  imageSrc, 
  imageAlt, 
  position = 'top' 
}: ProjectCardProps) {
  return (
    <div className="relative w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] group">
      <Image 
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 p-4 text-white`}>
          {year && (
            <p className="font-montserrat text-[16px] leading-[19.5px]">{year}</p>
          )}
          <h3 className="font-montserrat font-bold text-[24px] leading-[29.26px] mt-1">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
