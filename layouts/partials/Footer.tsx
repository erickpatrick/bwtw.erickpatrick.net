import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer id="menu" className="p-4 text-xl text-center font-thin bg-black">
        <nav className="text-white font-semibold">
          <Link href="/">
            <a className="inline-block p-4 hover:underline">Home</a>
          </Link>
          <Link href="/projects">
            <a className="inline-block p-4 hover:underline">Projects</a>
          </Link>
          <Link href="/blog">
            <a className="inline-block p-4 hover:underline">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="inline-block p-4 hover:underline">Contact</a>
          </Link>
          <Link href="/privacy">
            <a className="inline-block p-4 hover:underline">Privacy</a>
          </Link>
        </nav>
        <span className="text-white font-light">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </span>
      </footer>
    </>
  );
}
