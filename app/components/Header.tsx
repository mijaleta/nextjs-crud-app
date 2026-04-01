export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="max-w-2xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My CRUD App</h1>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
        </ul>
      </nav>
    </header>
  );
}
