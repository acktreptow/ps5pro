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

const GamesPage = async ({ params }: { params: { game: string } }) => {
  const game = await getGameDetails(params.game);

  if (!game) {
    return (
      <div className="container mx-auto flex-grow text-slate-800">
        <h1 className="text-center text-4xl font-extrabold mt-8 mb-12 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
          Game Not Found
        </h1>
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
            <span className="font-semibold">Highest FPS:</span> {game.topFps}{" "}
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
              )
            )}
          </div>
        )}
        {game.extraInfo && (
          <div>
            <h2 className="text-3xl text-center font-bold underline my-4 md:text-start">
              Extra Information
            </h2>
            <p className="text-lg whitespace-pre-line">{game.extraInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesPage;
