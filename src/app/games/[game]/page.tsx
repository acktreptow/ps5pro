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
        <h2 className="text-3xl text-center font-bold underline my-4">
          Details
        </h2>
        <p>
          <span className="font-semibold">Genre:</span> {game.genre}
        </p>
        <p>
          <span className="font-semibold">Developer:</span> {game.developer}
        </p>
        <p>
          <span className="font-semibold">Release Date:</span> {game.release}
        </p>
        <p>
          <span className="font-semibold">PS Studios Game?:</span>{" "}
          {game.psStudios ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default GamesPage;
