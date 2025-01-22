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
        psStudios: true,
        psvr2: true,
        release: true,
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
        psStudios: true,
        psvr2: true,
        release: true,
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
        psStudios: true,
        psvr2: true,
        release: true,
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
      <div className="text-xl text-center mb-8 mx-4 grid gap-5 md:text-lg md:mx-8 md:grid-cols-2  lg:text-xl lg:gap-5">
        {detailedGames.map((game) => (
          <div
            className="pt-6 pb-10 px-4 bg-slate-100 border-2 rounded shadow-md lg:px-2"
            key={game.id}
          >
            <h3 className="font-extrabold text-2xl mb-2 md:text-xl lg:text-2xl lg:mb-4">
              {game.title}
            </h3>
            <p>
              <span className="font-semibold">Genre:</span> {game.genre}
            </p>
            <p>
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>
            <p>
              <span className="font-semibold">Release:</span> {game.release}
            </p>
            <p className="mb-8">
              <span className="font-semibold">Metacritic:</span>{" "}
              {game.metacritic}
            </p>
            <Link
              href={`/games/${game.urlPath}`}
              className="bg-gradient-to-b from-blue-700 to-playstation p-4 rounded-md text-slate-100 font-semibold"
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
            <h3 className="font-extrabold text-2xl mb-2 md:text-xl lg:mb-4">
              {game.title}
            </h3>
            <p>
              <span className="font-semibold">Genre:</span> {game.genre}
            </p>
            <p>
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>
            <p>
              <span className="font-semibold">Release:</span> {game.release}
            </p>
            <p>
              <span className="font-semibold">Metacritic:</span>{" "}
              {game.metacritic}
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
      <h3 className="text-center text-xl font-semibold mb-2 md:text-start lg:text-2xl lg:mb-1 lg:mx-8">
        Criteria (has to hit at least one):
      </h3>
      <ul>
        <li className="mb-4 mx-8 list-disc">
          Has a sequel scheduled to launch in 2025.
        </li>
        <li className="mb-4 mx-8 list-disc">
          It&#39;s a very popular game that deserves a PS5 Pro upgrade to
          showcase the ecosystem.
        </li>
        <li className="mb-4 mx-8 list-disc">
          The game would be significantly enhanced with a resolution and/or
          framerate boost.
        </li>
        <li className="mb-4 mx-8 list-disc">
          The game would look much better with either introducing or improving
          the ray-tracing implementation.
        </li>
        <li className="mb-4 mx-8 list-disc">
          I&#39;d personally like to see one as it&#39;s in my backlog!
        </li>
      </ul>
      <div className="text-xl text-center mb-8 mx-4 grid gap-5 md:text-lg md:mx-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {unconfirmedGames.map((game) => (
          <div
            className="py-6 px-4 bg-slate-100 border-2 rounded shadow-md lg:px-2"
            key={game.id}
          >
            <h3 className="font-extrabold text-2xl mb-2 md:text-xl lg:mb-4">
              {game.title}
            </h3>
            <p>
              <span className="font-semibold">Genre:</span> {game.genre}
            </p>
            <p>
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>
            <p>
              <span className="font-semibold">Release:</span> {game.release}
            </p>
            <p>
              <span className="font-semibold">Metacritic:</span>{" "}
              {game.metacritic}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesListPage;
