import confirmedGames from "../data/confirmedGames.json";

const GamesPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        All PS5 Pro Enhanced Games
      </h1>
      <div className="hidden mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <h2 className="text-3xl text-center font-bold underline my-4">
          Confirmed Games
        </h2>
        <div className="flex justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Title</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.name}</p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Genre</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.genre}</p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Developer</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.developer}</p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Release Date</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.release}</p>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Metacritic</h3>
            {confirmedGames.map((game) => (
              <p key={game.id}>{game.metacritic}</p>
            ))}
          </div>
        </div>
        <h4 className="text-center text-lg">
          <span className="font-semibold">Confirmed Games Total:</span>{" "}
          {confirmedGames.length}
        </h4>
      </div>
    </div>
  );
};

export default GamesPage;
