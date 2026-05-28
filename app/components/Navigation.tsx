interface NavigationProps {
  variant?: 'mobile' | 'desktop';
}

export default function Navigation({ variant = 'desktop' }: NavigationProps) {
  if (variant === 'mobile') {
    return (
      <div className="lg:hidden space-y-4">
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
          <h1 className="font-montserrat-subrayada text-[20px] leading-[24.38px] text-black text-center">
            Chandra bhanu
          </h1>
        </div>
        <nav className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
          <div className="flex justify-center space-x-8">
            <a href="#" className="font-montserrat text-[14px] leading-[17.07px] text-[#F63B3B]">
              Work
            </a>
            <a href="#" className="font-montserrat text-[14px] leading-[17.07px] text-black">
              About
            </a>
          </div>
        </nav>
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
          <p className="font-montserrat text-[14px] leading-[17.07px] text-black text-center">
            Architecture | Board Game design | Experience Design | UX Design | Visual Design
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <div className="flex flex-row lg:items-center lg:justify-between w-full">
        <h1 className="font-montserrat-subrayada text-[24px] leading-[29.26px] text-black">
          Chandra bhanu
        </h1>
        <nav className="flex items-center space-x-6">
          <a href="#" className="font-montserrat text-[16px] leading-[19.5px] text-[#F63B3B]">
            Work
          </a>
          <a href="#" className="font-montserrat text-[16px] leading-[19.5px] text-black">
            About
          </a>
        </nav>
      </div>
      <div className="mt-[25px]">
        <p className="font-montserrat text-[16px] leading-[19.5px] text-black max-w-[655px]">
          Architecture | Board Game design | Experience Design | UX Design | Visual Design
        </p>
      </div>
    </div>
  );
}
