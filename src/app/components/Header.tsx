import Link from "next/link";
import Image from "next/image";

export const Header = (): JSX.Element => {
  return (
    <header className="text-slate-50 text-3xl py-8 uppercase font-semibold bg-gradient-to-b from-blue-700 to-playstation border-b-8 border-slate-900 flex flex-col gap-8 items-center">
      <div>
        <Link href="/">
          <Image
            src="/images/ps5-pro-logo.jpg"
            alt="PS5 Logo"
            width={250}
            height={50}
          />
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
