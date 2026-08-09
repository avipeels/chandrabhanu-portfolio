import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CaseStudyImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CaseStudyImageProps {
  image: CaseStudyImageAsset;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  frame?: 'none' | 'raised' | 'soft';
}

interface CaseStudyNavigationProps {
  className?: string;
}

interface CaseStudySectionHeadingProps {
  id: string;
  children: ReactNode;
  className?: string;
  size?: 'default' | 'large';
}

const defaultImageSizes = '(max-width: 639px) 100vw, (max-width: 1023px) 92vw, 1180px';

const imageFrameClassNames: Record<NonNullable<CaseStudyImageProps['frame']>, string> = {
  none: '',
  raised: 'overflow-hidden rounded-sm bg-white shadow-[0_7px_20px_rgba(0,0,0,0.14)]',
  soft: 'overflow-hidden rounded-sm bg-white shadow-[0_6px_18px_rgba(0,0,0,0.14)]',
};

const joinClassNames = (...classNames: Array<string | undefined>) => classNames.filter(Boolean).join(' ');

export function CaseStudyImage({
  image,
  sizes = defaultImageSizes,
  priority = false,
  className,
  imageClassName = 'object-contain',
  frame = 'raised',
}: CaseStudyImageProps) {
  return (
    <figure
      className={joinClassNames('relative w-full', imageFrameClassNames[frame], className)}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} className={imageClassName} />
    </figure>
  );
}

export function CaseStudyNavigation({ className }: CaseStudyNavigationProps) {
  return (
    <nav aria-label="Case study navigation" className={joinClassNames('flex items-center gap-6 text-xs sm:text-sm', className)}>
      <Link href="/#work" className="font-semibold text-[#165C12] underline decoration-1 underline-offset-4">Work</Link>
      <Link href="/about" className="text-black transition-opacity hover:opacity-60">About</Link>
    </nav>
  );
}

export function CaseStudyBackLink() {
  return (
    <Link href="/#work" aria-label="Back to work" className="mb-3 block w-fit text-3xl leading-none transition-opacity hover:opacity-60 xl:absolute xl:right-full xl:top-[-3px] xl:mr-16 xl:mb-0">←</Link>
  );
}

export function CaseStudySectionHeading({ id, children, className, size = 'default' }: CaseStudySectionHeadingProps) {
  return <h2 id={id} className={joinClassNames('font-montserrat text-base font-bold uppercase sm:text-lg', size === 'large' ? 'lg:text-xl' : undefined, className)}>{children}</h2>;
}
