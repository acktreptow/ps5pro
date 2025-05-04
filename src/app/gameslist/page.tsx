import type { Metadata } from "next";
import Link from "next/link";
import prisma from "../../../lib/prisma";

export const metadata: Metadata = {
  title: "Games List",
  description:
    "A list of all PS5 Pro enhanced games, detailing genre, developer, release, Metacritic etc.",
};

async function getConfirmedGames() {
  try {
    const confirmedGames = await prisma.confirmedGame.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        genre: true,
        developer: true,
        publisher: true,
        psStudios: true,
        psvr2: true,
        release: true,
        hasShipped: true,
        metacritic: true,
      },
      orderBy: {
        title: "asc",
      },
    });
    console.log("Confirmed games fetched successfully:", confirmedGames);
    return confirmedGames;
  } catch (error) {
    console.error("Error fetching confirmed games:", error);
    throw error;
  }
}

async function getDetailedGames() {
  try {
    const detailedGames = await prisma.detailedGame.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        urlPath: true,
        genre: true,
        developer: true,
        publisher: true,
        psStudios: true,
        psvr2: true,
        release: true,
        hasShipped: true,
        metacritic: true,
        pssr: true,
        rt: true,
        rtTypes: true,
        topRes: true,
        topFps: true,
        modes: true,
        extraInfo: true,
      },
      orderBy: {
        title: "asc",
      },
    });
    console.log("Detailed games fetched successfully:", detailedGames);
    return detailedGames;
  } catch (error) {
    console.error("Error fetching detailed games:", error);
    throw error;
  }
}

async function getUnconfirmedGames() {
  try {
    const unconfirmedGames = await prisma.unconfirmedGame.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        genre: true,
        developer: true,
        publisher: true,
        psStudios: true,
        psvr2: true,
        release: true,
        hasShipped: true,
        metacritic: true,
      },
      orderBy: {
        title: "asc",
      },
    });
    console.log("Unconfirmed games fetched successfully:", unconfirmedGames);
    return unconfirmedGames;
  } catch (error) {
    console.error("Error fetching unconfirmed games:", error);
    throw error;
  }
}

const GamesListPage = async () => {
  const confirmedGames = await getConfirmedGames();
  const detailedGames = await getDetailedGames();
  const unconfirmedGames = await getUnconfirmedGames();
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold mt-8 mb-12 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        All PS5 Pro Enhanced Games
      </h1>
      <h2 className="text-3xl text-center font-bold underline mb-4 mx-2 lg:text-start lg:mx-8">
        Games With Details
      </h2>
      <div className="my-8 mx-4 py-4 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        <h3 className="text-xl text-center font-semibold mb-2 md:text-start md:mx-8 lg:text-2xl lg:mt-2">
          Disclaimer
        </h3>
        <h3 className="mx-4 md:mx-8 lg:text-lg">
          Over 95% of the information on PS5 Pro enhancements comes from primary
          sources (like press releases and developer comments on X) or highly
          reputable secondary sources (Digital Foundry, NX Gamer etc). Any
          information that&#39;s more speculative in nature is clearly noted.
        </h3>
      </div>
      <div className="text-xl text-center mb-8 mx-4 grid gap-5 md:text-lg md:mx-8 md:grid-cols-2 lg:text-xl">
        {detailedGames.map((game) => (
          <div
            className="pt-6 pb-10 px-4 bg-slate-100 border-2 rounded shadow-md lg:px-2"
            key={game.id}
          >
            <h3 className="text-2xl font-extrabold mb-2 md:text-xl lg:text-2xl lg:mb-4">
              {game.title}
            </h3>
            <p>
              <span className="font-semibold">Genre:</span> {game.genre}
            </p>
            <p>
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span>{" "}
              {game.publisher ? game.publisher : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Release:</span> {game.release}
            </p>
            <p className="mb-8">
              <span className="font-semibold">Metacritic:</span>{" "}
              {game.metacritic ? game.metacritic : "No Reviews"}
            </p>
            <Link
              href={`/games/${game.urlPath}`}
              className="bg-gradient-to-b from-blue-700 to-playstation p-4 rounded-md text-slate-100 font-semibold hover:from-blue-600 hover:to-playstation hover:text-white"
            >
              Review Enhancements
            </Link>
          </div>
        ))}
      </div>
      <h4 className="text-center text-2xl mb-12 md:text-start md:mx-8">
        <span className="font-semibold">Total Detailed Games:</span>{" "}
        {detailedGames.length}
      </h4>
      <h2 className="text-3xl text-center font-bold underline mb-4 mx-2 lg:text-start lg:mx-8">
        Other Confirmed Games
      </h2>
      <div className="text-xl text-center mb-8 mx-4 grid gap-5 md:text-lg md:mx-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {confirmedGames.map((game) => (
          <div
            className="py-6 px-4 bg-slate-100 border-2 rounded shadow-md lg:px-2"
            key={game.id}
          >
            <h3 className="text-2xl font-extrabold mb-2 md:text-xl lg:mb-4">
              {game.title}
            </h3>
            <p>
              <span className="font-semibold">Genre:</span> {game.genre}
            </p>
            <p>
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>{" "}
            <p>
              <span className="font-semibold">Publisher:</span>{" "}
              {game.publisher ? game.publisher : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Release:</span> {game.release}
            </p>
            <p>
              <span className="font-semibold">Metacritic:</span>{" "}
              {game.metacritic ? game.metacritic : "No Reviews"}
            </p>
          </div>
        ))}
      </div>
      <h4 className="text-center text-2xl mb-12 md:text-start md:mx-8">
        <span className="font-semibold">Total Confirmed Games:</span>{" "}
        {confirmedGames.length}
      </h4>
      <h2 className="text-3xl text-center font-bold underline mb-4 mx-2 lg:text-start lg:mx-8">
        {unconfirmedGames.length} Games That Most Need PS5 Pro Upgrades
      </h2>
      <div className="my-8 mx-4 py-4 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        <h4 className="text-center font-semibold mb-4 md:text-start lg:text-xl md:mx-8 lg:mt-2">
          <span className="block mb-1 text-lg md:text-base md:inline lg:text-xl">
            Disclaimer:
          </span>{" "}
          Whether its limited development resources, the developer has suffered
          severe layoffs, or a myriad of other reasons, I&#39;m fully aware that
          the vast majority of these games will never receive an official PS5
          Pro upgrade. However, that doesn&#39;t mean they{" "}
          <span className="italic">shouldn&#39;t</span>. As the criteria below
          shows, the games themselves would greatly benefit from a Pro upgrade.
          Either by drastically improving the game&#39;s experience itself, or
          bringing the franchise and/or PS5 Pro ecosystem more into the
          spotlight etc.{" "}
          <span className="block my-4 text-lg md:text-base md:my-2 lg:text-xl lg:my-4">
            With that being said...
          </span>
        </h4>
        <h3 className="text-xl text-center font-semibold mb-4 md:text-start md:mx-8 lg:text-2xl lg:mt-6 lg:mb-2">
          Criteria (in rough order of importance)
        </h3>
        <ul className="lg:text-lg">
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            Would be significantly enhanced with a resolution and/or framerate
            boost.
          </li>
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            Would look much better by introducing or improving the ray tracing
            implementation.
          </li>
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            Would look much better with improved or added graphical settings
            (global illumination, textures etc).
          </li>
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            Would be a showcase for the capabilities of PSVR2.
          </li>
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            Is a very popular game that would showcase the Pro ecosystem to new
            audiences.
          </li>
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            Is AAA, with a sequel scheduled to launch in 2025.
          </li>
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            Is AAA, with development far enough along to have a release date,
            yet no mention of Pro support.
          </li>
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            Is part a AAA franchise where there&#39;s already Pro enhanced
            entries.
          </li>
          <li className="mb-2 ml-10 mr-8 list-disc md:ml-12">
            It&#39;s in my backlog!
          </li>
        </ul>
      </div>
      <div className="text-xl text-center mb-8 mx-4 grid gap-5 md:text-lg md:mx-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {unconfirmedGames.map((game) => (
          <div
            className="py-6 px-4 bg-slate-100 border-2 rounded shadow-md lg:px-2"
            key={game.id}
          >
            <h3 className="text-2xl font-extrabold mb-2 md:text-xl lg:mb-4">
              {game.title}
            </h3>
            <p>
              <span className="font-semibold">Genre:</span> {game.genre}
            </p>
            <p>
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> {game.publisher}
            </p>
            <p>
              <span className="font-semibold">Release:</span> {game.release}
            </p>
            <p>
              <span className="font-semibold">Metacritic:</span>{" "}
              {game.metacritic ? game.metacritic : "No reviews"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesListPage;
