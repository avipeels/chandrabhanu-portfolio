import Image from 'next/image';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[300px] max-h-[500px] w-full md:h-[70vh] md:max-h-[600px] lg:h-[348px] lg:max-h-none">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-bg-253212.png" 
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Navigation */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 md:px-8 lg:px-[299px] pt-[20vh] lg:pt-[360px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mb-6 lg:mb-0 bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:bg-transparent lg:backdrop-blur-none lg:p-0 rounded-lg lg:rounded-none">
            <h1 className="font-montserrat-subrayada text-[20px] md:text-[22px] lg:text-[24px] leading-[24.38px] md:leading-[26.82px] lg:leading-[29.26px] text-black">
              Chandra bhanu
            </h1>
            <nav className="flex items-center space-x-4 lg:space-x-6 mt-4 lg:mt-0">
              <a href="#" className="font-montserrat text-[14px] md:text-[15px] lg:text-[16px] leading-[17.07px] md:leading-[18.29px] lg:leading-[19.5px] text-[#F63B3B]">
                Work
              </a>
              <a href="#" className="font-montserrat text-[14px] md:text-[15px] lg:text-[16px] leading-[17.07px] md:leading-[18.29px] lg:leading-[19.5px] text-black">
                About
              </a>
            </nav>
          </div>
          
        </div>
        <div className="px-4 md:px-8 lg:px-[299px] mt-[15px]">
          <p className="font-montserrat text-[14px] md:text-[15px] lg:text-[16px] leading-[17.07px] md:leading-[18.29px] lg:leading-[19.5px] text-black max-w-full lg:max-w-[655px] bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:bg-transparent lg:backdrop-blur-none lg:p-0 rounded-lg lg:rounded-none">
            Architecture | Board Game design | Experience Design | UX Design | Visual Design
          </p>
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
