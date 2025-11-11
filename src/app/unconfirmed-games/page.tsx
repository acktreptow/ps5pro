import type { Metadata } from "next";
import prisma from "../../../lib/prisma";

export const metadata: Metadata = {
  title: "99 Unconfirmed Games",
  description: "99 PS5 games that are most in need of Pro enhancements",
};

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

const UnconfirmedGamesPage = async () => {
  const unconfirmedGames = await getUnconfirmedGames();
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold mt-8 mb-12 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        {unconfirmedGames.length} Unconfirmed Games
      </h1>

      <h2 className="text-3xl text-center font-bold underline mb-4 mx-2 lg:text-start lg:mx-8">
        {unconfirmedGames.length} Games That Most Need PS5 Pro Upgrades
      </h2>
      <div className="my-8 mx-4 py-4 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        <h4 className="text-center mb-4 mx-2 md:text-start lg:text-xl md:mx-8 lg:mt-2">
          <span className="block mb-2 font-semibold text-xl  lg:inline">
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
        </h4>
      </div>
      <div className="my-8 mx-4 py-4 bg-slate-100 border-2 rounded shadow-lg md:mx-8">

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
            It provides regional value & promotion to the ecosystem (MiHoYo
            games to improve Pro sales in China etc).
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

export default UnconfirmedGamesPage;
