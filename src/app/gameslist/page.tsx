import confirmedGames from "../data/confirmedGames.json";
import postableGames from "../data/postableGames.json";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Games List",
  description:
    "A list of all PS5 Pro enhanced games, detailing the genre, developer, release date, and Metacritic score.",
};

const GamesListPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold mt-8 mb-12 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
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
      <h2 className="text-3xl text-center font-bold underline mb-4 lg:text-start lg:mx-8">
        Games With Details
      </h2>
      <div className="text-xl text-center mb-8 mx-4 grid gap-5 md:text-lg md:mx-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-5">
        {postableGames.map((game) => (
          <div
            className="pt-6 pb-10 px-4 bg-slate-100 border-2 rounded shadow-md lg:px-2"
            key={game.id}
          >
            <h3 className="font-extrabold text-2xl mb-2 md:text-xl lg:mb-4">
              {game.name}
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
            <Link href={`/games/${game.urlPath}`} className="bg-gradient-to-b from-blue-700 to-playstation p-4 rounded-md text-slate-100 font-semibold">
              Review Enhancements
            </Link>
          </div>
        ))}
      </div>
      <h4 className="text-center text-2xl mb-12 md:text-start md:mx-8">
        <span className="font-semibold">Total Games With Details:</span>{" "}
        {postableGames.length}
      </h4>
      <h2 className="text-3xl text-center font-bold underline mb-4 lg:text-start lg:mx-8">
        Confirmed Games
      </h2>
      <div className="text-xl text-center mb-8 mx-4 grid gap-5 md:text-lg md:mx-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {confirmedGames.map((game) => (
          <div
            className="py-6 px-4 bg-slate-100 border-2 rounded shadow-md lg:px-2"
            key={game.id}
          >
            <h3 className="font-extrabold text-2xl mb-2 md:text-xl lg:mb-4">
              {game.name}
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
    </div>
  );
};

export default GamesListPage;
