import games from "../../data/games.json";

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
  const game: Game | undefined = games.find((game) => game.urlPath === params.game);

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
        PS5 Pro Game X
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <h2 className="text-3xl text-center font-bold underline my-4">
          {game.name}
        </h2>
      </div>
    </div>
  );
};

export default GamesPage;
