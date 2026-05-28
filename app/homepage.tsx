import Image from 'next/image';

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
          <div className="mb-6 lg:mb-0 bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:bg-transparent lg:backdrop-blur-none lg:p-0 rounded-lg lg:rounded-none">
            <h1 className="font-montserrat-subrayada text-[20px] md:text-[22px] lg:text-[24px] leading-[24.38px] md:leading-[26.82px] lg:leading-[29.26px] text-black">
              Chandra bhanu
            </h1>
            <p className="font-montserrat text-[14px] md:text-[15px] lg:text-[16px] leading-[17.07px] md:leading-[18.29px] lg:leading-[19.5px] text-black mt-[14px] md:mt-[16px] lg:mt-[54px] max-w-full lg:max-w-[655px]">
              Architecture | Board Game design | Experience Design | UX Design | Visual Design
            </p>
          </div>
          
          <nav className="flex items-center space-x-4 lg:space-x-6 bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:bg-transparent lg:backdrop-blur-none lg:p-0 rounded-lg lg:rounded-none">
            <a href="#" className="font-montserrat text-[14px] md:text-[15px] lg:text-[16px] leading-[17.07px] md:leading-[18.29px] lg:leading-[19.5px] text-[#F63B3B]">
              Work
            </a>
            <a href="#" className="font-montserrat text-[14px] md:text-[15px] lg:text-[16px] leading-[17.07px] md:leading-[18.29px] lg:leading-[19.5px] text-black">
              About
            </a>
          </nav>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-[299px] py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6 justify-items-center lg:justify-items-start">
          {/* Project 1 - Board Game */}
          <div className="relative w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] group">
            <Image 
              src="/images/board-game-29108c.png" 
              alt="Board Game Design"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="font-montserrat text-[16px] leading-[19.5px]">2018</p>
                <h3 className="font-montserrat font-bold text-[24px] leading-[29.26px] mt-1">
                  MOVIE TICKET BOOKING APP
                </h3>
              </div>
            </div>
          </div>

          {/* Project 2 - Tokyo Anti-Library */}
          <div className="relative w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] group">
            <Image 
              src="/images/tokyo-anti-library.png" 
              alt="Tokyo Anti-Library"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="font-montserrat text-[16px] leading-[19.5px]">2018</p>
                <h3 className="font-montserrat font-bold text-[24px] leading-[29.26px] mt-1">
                  TOKYO ANTI-LIBRARY
                </h3>
              </div>
            </div>
          </div>

          {/* Project 3 - School Project */}
          <div className="relative w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] group">
            <Image 
              src="/images/school-project-2068ee.png" 
              alt="Sankalp School"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="font-montserrat text-[16px] leading-[19.5px]">2018</p>
                <h3 className="font-montserrat font-bold text-[24px] leading-[29.26px] mt-1">
                  SANKALP SCHOOL
                </h3>
              </div>
            </div>
          </div>

          {/* Project 4 - Drawings */}
          <div className="relative w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] group">
            <Image 
              src="/images/drawings-514a7a.png" 
              alt="Drawings"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-montserrat font-bold text-[24px] leading-[29.26px]">
                  DRAWINGS
                </h3>
              </div>
            </div>
          </div>

          {/* Empty placeholder cards to match Figma layout */}
          <div className="w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] bg-[#D9D9D9]"></div>
          <div className="w-full max-w-[330px] h-[250px] sm:h-[280px] lg:h-[330px] bg-[#D9D9D9]"></div>
        </div>
      </div>
    </div>
  );
}
