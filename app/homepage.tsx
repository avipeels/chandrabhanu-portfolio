import Image from 'next/image';
import ProjectCard from './components/ProjectCard';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] min-h-[300px] max-h-[300px] w-full md:h-[70vh] md:max-h-[600px] lg:h-[348px] lg:max-h-none">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-bg-253212.png" 
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A"
          />
        </div>
        
        {/* Navigation */}
        <div className="relative z-10 px-4 md:px-8 lg:px-[299px] pt-[20vh] lg:pt-[360px]">
          <Navigation variant="mobile" />
          <Navigation variant="desktop" />
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-[299px] py-8 md:py-10 lg:py-12 mt-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6 justify-items-center lg:justify-items-start">
          {/* Project 1 - Board Game */}
          <ProjectCard
            title="MOVIE TICKET BOOKING APP"
            year="2018"
            imageSrc="/images/board-game-29108c.png"
            imageAlt="Board Game Design"
            position="top"
          />

          {/* Project 2 - Tokyo Anti-Library */}
          <ProjectCard
            title="TOKYO ANTI-LIBRARY"
            year="2018"
            imageSrc="/images/tokyo-anti-library.png"
            imageAlt="Tokyo Anti-Library"
            position="top"
          />

          {/* Project 3 - School Project */}
          <ProjectCard
            title="SANKALP SCHOOL"
            year="2018"
            imageSrc="/images/school-project-2068ee.png"
            imageAlt="Sankalp School"
            position="top"
          />

          {/* Project 4 - Drawings */}
          <ProjectCard
            title="DRAWINGS"
            imageSrc="/images/drawings-514a7a.png"
            imageAlt="Drawings"
            position="top"
          />

          {/* Empty placeholder cards to match Figma layout */}
          <div className="w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] bg-[#D9D9D9]"></div>
          <div className="w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] bg-[#D9D9D9]"></div>
        </div>
      </div>
    </div>
  );
}
