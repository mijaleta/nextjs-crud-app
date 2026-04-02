import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="max-w-2xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CRUD App</h1>
        <ul className="flex gap-4">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
