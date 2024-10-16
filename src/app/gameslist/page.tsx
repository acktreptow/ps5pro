import confirmedGames from "../data/confirmedGames.json";

const GamesPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-slate-800 text-center text-4xl font-extrabold my-8 bg-slate-100 p-8 rounded shadow-lg">
        All PS5 Pro Enhanced Games
      </h1>
      <div className="bg-slate-100 p-8 rounded shadow-lg mb-8">
        <h2 className="text-slate-800 text-2xl font-bold mb-8 underline">
          Confirmed Games
        </h2>
        <div className="flex justify-between">
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-4 underline">Title</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.name}</p>
            ))}
          </div>
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-4 underline">Genre</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.genre}</p>
            ))}
          </div>
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-4 underline">Developer</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.developer}</p>
            ))}
          </div>
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-4 underline">Release Date</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.release}</p>
            ))}
          </div>
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-4 underline">Metacritic</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.metacritic}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
