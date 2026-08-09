import Link from 'next/link';

interface PortfolioIdentityProps {
  href: string;
  roles: string;
}

export default function PortfolioIdentity({ href, roles }: PortfolioIdentityProps) {
  return (
    <div className="min-w-0">
      <Link href={href} className="text-2xl font-bold uppercase leading-none text-black transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#165C12] sm:text-[32px]">
        Chandra Bhanu
      </Link>
      <p className="mt-3 max-w-3xl text-base leading-4 font-normal text-black">
        {roles}
      </p>
    </div>
  );
}
