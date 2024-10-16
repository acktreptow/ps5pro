import confirmedGames from "../data/confirmedGames.json";

const GamesPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-slate-800 text-center text-4xl font-extrabold my-8 bg-slate-100 p-8 rounded shadow-lg">
        All PS5 Pro Enhanced Games
      </h1>
      <div className="bg-slate-100 p-8 rounded shadow-lg mb-8">
        <h2 className="text-slate-800 text-2xl font-bold mb-4 underline">
          Confirmed Games
        </h2>
        <div className="flex">
          <div>
            <h2>Title</h2>
          </div>
          <div>
            <h2>Genre</h2>
          </div>
          <div>
            <h2>Developer</h2>
          </div>
          <div>
            <h2>Release Date</h2>
          </div>
          <div>
            <h2>Metacritic</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
