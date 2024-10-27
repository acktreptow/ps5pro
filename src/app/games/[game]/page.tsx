import postableGames from "../../data/postableGames.json";

interface Game {
  name: string;
  id: string;
  urlPath: string;
  genre: string;
  developer: string;
  psStudios: boolean;
  release: string;
  metacritic: number;
  pssr: boolean;
  rt: boolean;
  rtTypes?: string;
  resolution: string;
  fps: string;
  modes?: {
    fidelity: string;
    performance: string;
  };
  extraInfo?: string;
}

interface Params {
  game: string;
}

interface GamesPageProps {
  params: Params;
}

const GamesPage: React.FC<GamesPageProps> = ({ params }) => {
  const game: Game | undefined = postableGames.find(
    (game) => game.urlPath === params.game
  );

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
      <h1 className="text-center text-4xl font-extrabold mt-8 mb-12 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        {game.name}
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <div className="mb-12">
          <h2 className="text-3xl text-center font-bold underline my-4">
            Game Details
          </h2>
          <p className="text-lg">
            <span className="font-semibold">Genre:</span> {game.genre}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Developer:</span> {game.developer}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Release Date:</span> {game.release}
          </p>
          <p className="text-lg">
            <span className="font-semibold">PS Studios Game?</span>{" "}
            {game.psStudios ? "Yes" : "No"}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Metacritic Score:</span>{" "}
            {game.metacritic}
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl text-center font-bold underline my-4">
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
            {game.resolution}{" "}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Highest FPS:</span> {game.fps}{" "}
          </p>
        </div>
        {game.modes && (
          <div>
            <h2 className="text-3xl text-center font-bold underline my-4">
              Modes
            </h2>
            <p className="text-lg">
              <span className="font-semibold">Fidelity:</span>{" "}
              {game.modes.fidelity}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Performance:</span>{" "}
              {game.modes.performance}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesPage;
