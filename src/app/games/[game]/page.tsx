import Link from "next/link";
import prisma from "../../../../lib/prisma";

async function getGameDetails(urlPath: string) {
  try {
    const game = await prisma.detailedGame.findUnique({
      where: { published: true, urlPath },
    });
    return game;
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null;
  }
}

async function getRandomGame() {
  try {
    const randomGame = await prisma.detailedGame.findMany({
      where: { published: true },
      select: {
        urlPath: true,
      },
    });
    console.log("Detailed games fetched successfully:", randomGame);
    return randomGame;
  } catch (error) {
    console.error("Error fetching detailed games:", error);
    throw error;
  }
}
const GamesPage = async ({ params }: { params: { game: string } }) => {
  const game = await getGameDetails(params.game);
  const randomGame = await getRandomGame();

  if (!game) {
    return (
      <div className="container mx-auto flex-grow text-slate-800">
        <h1 className="text-center text-4xl font-extrabold mt-8 mb-12 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
          Game Not Found
        </h1>
        <div className="container mx-auto flex-grow text-slate-800 flex flex-col items-center justify-center">
          <div className="max-w-xl bg-slate-100 border-2 rounded shadow-lg mt-8 mb-12 mx-4 p-8 flex flex-col items-center">
            <span className="text-6xl mb-4">🎮</span>
            <h1 className="text-center text-4xl font-extrabold mb-4">
              Game Not Found
            </h1>
            <p className="text-center text-lg mb-6 text-slate-600">
              Sorry, we could&#39;t find the game you&#39;re looking for. It may
              have been removed, renamed, hasn&#39;t yet received detailed
              analysis, or isn&#39;t a PS5 Pro game.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <Link
                href="/games"
                className="w-full text-center bg-gradient-to-b from-blue-700 to-playstation text-slate-100 hover:text-white hover:underline font-bold py-2 px-4 rounded transition"
              >
                All PS5 Pro Games
              </Link>
              <Link
                href={
                  randomGame[Math.floor(Math.random() * randomGame.length)]
                    .urlPath
                }
                className="w-full text-center bg-gradient-to-b from-blue-700 to-playstation text-slate-100 hover:text-white hover:underline font-bold py-2 px-4 rounded transition"
              >
                Random PS5 Pro Game
              </Link>
              <Link
                href="/"
                className="w-full text-center bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded transition"
              >
                Go To Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        {game.pageTitle ? game.pageTitle : game.title}
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <div className="mb-12">
          <h2 className="text-3xl text-center font-bold underline my-4 md:text-start">
            Game Details
          </h2>
          <p className="text-lg">
            <span className="font-semibold">Genre:</span> {game.genre}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Developer:</span> {game.developer}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Publisher:</span> {game.publisher}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Release Date:</span> {game.release}
          </p>
          <p className="text-lg">
            <span className="font-semibold">PS Studios Game?</span>{" "}
            {game.psStudios ? "Yes" : "No"}
          </p>
          <p className="text-lg">
            <span className="font-semibold">PSVR2 Compatible?</span>{" "}
            {game.psvr2 ? "Yes" : "No"}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Metacritic Score:</span>{" "}
            {game.metacritic ? game.metacritic : "N/A (No Scored Reviews)"}
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl text-center font-bold underline my-4 md:text-start">
            Enhancements
          </h2>
          <p className="text-lg">
            <span className="font-semibold">PSSR?</span>{" "}
            {game.pssr ? "Yes" : "No"}
          </p>
          <p className="text-lg">
            <span className="font-semibold">RT?</span> {game.rt ? "Yes" : "No"}
          </p>
          {game.rt && (
            <p className="text-lg">
              <span className="font-semibold">RT Types:</span> {game.rtTypes}
            </p>
          )}
          <p className="text-lg">
            <span className="font-semibold">Highest Resolution:</span>{" "}
            {game.topRes}{" "}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Highest FPS:</span>{" "}
            {game.topFps}{" "}
          </p>
        </div>
        {Array.isArray(game.modes) && (
          <div className="mb-12">
            <h2 className="text-3xl text-center font-bold underline my-4 md:text-start">
              Modes
            </h2>
            {(game.modes as { name: string; description: string }[]).map(
              (mode, index) => (
                <p className="text-lg" key={index}>
                  <span className="font-semibold capitalize">{mode.name}:</span>{" "}
                  {mode.description}
                </p>
              ),
            )}
          </div>
        )}
        {game.extraInfo && (
          <div>
            <h2 className="text-3xl text-center font-bold underline my-4 md:text-start">
              Extra Information
            </h2>
            {game.disclaimer && (
              <p className="text-lg whitespace-pre-line mb-2 italic">
                <span className="font-semibold">Disclaimer: </span>
                {game.disclaimer}
              </p>
            )}
            <p className="text-lg whitespace-pre-line">{game.extraInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesPage;
