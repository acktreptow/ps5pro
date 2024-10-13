import Link from "next/link";
import Image from "next/image";

export const Header = (): JSX.Element => {
  return (
    <header className="text-slate-50 text-3xl py-8 uppercase font-semibold bg-gradient-to-b from-blue-700 to-playstation border-b-8 border-slate-900 flex flex-col gap-8 items-center">
      <div>
        <Link href="/">
          <Image
            src="/images/ps5-pro-logo.png"
            alt="PS5 Pro Logo"
            width={250}
            height={50}
            className="rounded-lg border-2 border-slate-50"
          />
        </Link>
      </div>
      <div>
        <ul className="flex space-x-10">
          <li className="hover:text-slate-300 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-slate-300 hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-slate-300 hover:underline">
            <Link href="/gameslist">Games List</Link>
          </li>
          <li className="hover:text-slate-300 hover:underline">
            <Link href="/ps5vsps5pro">PS5 vs PS5 Pro</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
