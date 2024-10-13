import Link from "next/link";

export const Header = (): JSX.Element => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-playstation text-white uppercase flex items-center justify-between text-2xl p-10">
      <div>
        <Link href="/">
          <h1>PS5 Pro</h1>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gameslist">Games List</Link>
          </li>
          <li>
            <Link href="/hardware">Hardware Comparison</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
