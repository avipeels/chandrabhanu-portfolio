import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'mailto:d.chandrabhanu@gmail.com',
    label: 'Email Chandra Bhanu',
    mark: 'email',
    className: '',
  },
  {
    href: 'https://www.linkedin.com/in/chandrabhanu-dosapati',
    label: 'Chandra Bhanu on LinkedIn',
    mark: 'in',
    className: 'rounded-[5px] bg-[#666] px-1.5 py-0.5 text-[19px] font-bold leading-none text-[#d8d8d8]',
  },
  {
    href: 'https://www.behance.net/chandrabhanu3',
    label: 'Chandra Bhanu on Behance',
    mark: 'Bē',
    className: 'rounded-[4px] bg-[#666] px-1.5 py-1 text-xs font-bold leading-none text-[#d8d8d8]',
  },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-[#d8d8d8] text-black">
      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-center gap-6 px-6 py-5 sm:flex-row sm:justify-between sm:px-8 sm:py-6 lg:min-h-[114px] lg:px-9">
        <Link
          href="/"
          className="flex w-fit items-center gap-3 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:gap-4"
        >
          <Image
            src="/images/v2/chandra-identity-mark.png"
            alt=""
            width={72}
            height={72}
            className="size-12 shrink-0 sm:size-14"
          />
          <span className="text-xl font-bold tracking-[-0.03em] sm:text-2xl">
            Chandra Bhanu
          </span>
        </Link>

        <nav aria-label="Social links">
          <ul className="flex items-center justify-center gap-5 sm:justify-end sm:gap-8">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="flex size-11 items-center justify-center text-[#666] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  {link.mark === 'email' ? (
                    <Image
                      src="/images/v2/footer/gmail-icon.png"
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                  ) : (
                    <span aria-hidden="true" className={link.className}>
                      {link.mark}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
