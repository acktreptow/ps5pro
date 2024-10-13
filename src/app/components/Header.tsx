import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-playstation text-white uppercase flex items-center justify-between text-2xl p-10">
      <div>
        <Link href="/">
          <h1>PS5 Pro</h1>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-10">
          <Link href="/about">About</Link>
          <Link href="/gameslist">Games List</Link>
          <Link href="/hardware">Hardware Comparison</Link>
        </ul>
      </div>
    </header>
  );
};
