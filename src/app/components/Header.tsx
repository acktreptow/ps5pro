import Link from "next/link";
import Image from "next/image";
import PS5ProCertification from "../../../public/images/ps5-pro-enhanced-certification.png";

export const Header = (): JSX.Element => {
  return (
    <header className="text-slate-50 uppercase font-semibold py-8 flex flex-col gap-8 items-center bg-gradient-to-b from-blue-700 to-playstation border-b-8 border-slate-900 lg:text-xl">
      <div>
        <Link href="/">
          <Image
            src={PS5ProCertification}
            alt="PS5 Pro Enhanced Certification logo."
            width={200}
            height={50}
            className="rounded-lg border-2 border-slate-50 md:w-56 lg:w-64"
          />
        </Link>
      </div>
      <div>
        <ul className="flex flex-col items-center gap-1 md:flex-row md:space-x-4 lg:space-x-8">
          <li className="hover:text-white hover:underline hover:scale-110 transition-transform duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-white hover:underline hover:scale-110 transition-transform duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-white hover:underline hover:scale-110 transition-transform duration-300">
            <Link href="/gameslist">Games List</Link>
          </li>
          <li className="hover:text-white hover:underline hover:scale-110 transition-transform duration-300">
            <Link href="/unconfirmed-games">99 Unconfirmed Games</Link>
          </li>
          <li className="hover:text-white hover:underline hover:scale-110 transition-transform duration-300">
            <Link href="/ps5vsps5pro">PS5 vs PS5 Pro</Link>
          </li>
          <li className="hover:text-white hover:underline hover:scale-110 transition-transform duration-300">
            <Link href="/graphicsvsperformance">Graphics vs Performance</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
