import Link from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function LocalLink({ href, children }: LinkProps) {
  return (
    <Link href={href}>
      <a className="underline">{children}</a>
    </Link>
  );
}
