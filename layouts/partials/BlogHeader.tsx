import Link from 'next/link';

export default function BlogHeader() {
  return (
    <header className="flex bg-black justify-between items-center text-center text-white">
      <div>
        <p>
          <Link href="/">
            <a className="inline-block p-4 text-2xl font-bold hover:bg-white hover:text-black">
              Erick Patrick
            </a>
          </Link>
        </p>
      </div>
      <div className="hidden sm:block">
        <nav>
          <Link href="/projects">
            <a className="inline-block p-5 text-base font-bold hover:bg-white hover:text-black">
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a className="inline-block p-5 text-base font-bold hover:bg-white hover:text-black">
              Blog
            </a>
          </Link>
          <Link href="/contact">
            <a className="inline-block p-5 text-base font-bold hover:bg-white hover:text-black">
              Contact
            </a>
          </Link>
          <Link href="/privacy">
            <a className="inline-block p-5 text-base font-bold hover:bg-white hover:text-black">
              Privacy
            </a>
          </Link>
        </nav>
      </div>
      <div className="sm:hidden">
        <a
          href="#menu"
          className="inline-block p-5 text-base font-bold hover:bg-white hover:text-black"
        >
          Menu
        </a>
      </div>
    </header>
  );
}
