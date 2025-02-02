"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import games from "../app/data/detailedGames.json";
import PS5ProConsole from "../../public/images/ps5-pro-console.jpg";

const Home = (): JSX.Element => {
  const [selectedGame, setSelectedGame] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedGame) {
      router.push(`/games/${selectedGame}`);
    }
  }

  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 py-8 px-4 md:p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        PS5 Pro Enhanced Games
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <h2 className="text-center text-2xl font-extrabold mt-4 mb-12 md:mt-0 lg:text-3xl">
          Detailing how your favorite PS5 games are enhanced for the PS5 Pro:
        </h2>
        <form onSubmit={handleSubmit} className="text-lg">
          <select
            onChange={(e) => setSelectedGame(e.target.value)}
            className="block mx-auto p-2 mb-4 border-2 border-slate-800 rounded-lg"
          >
            <option>Select PS5 Pro Game</option>
            {games.map((game) => (
              <option key={game.id} value={game.urlPath}>
                {game.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="text-slate-100 block mx-auto border font-bold p-4 mb-12 bg-gradient-to-b from-blue-700 to-playstation rounded-full shadow-md shadow-playstation hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation transition duration-300 hover:scale-105"
          >
            Review Pro Enhancements
          </button>
        </form>
        <Image
          src={PS5ProConsole}
          alt="The PS5 Pro console."
          width={1000}
          className="mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
