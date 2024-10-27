"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gamesData from "../app/data/postableGames.json";
import ps5Pro from "../../public/images/PS5-Pro.jpg";

function Home() {
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
        <form onSubmit={handleSubmit}>
          <select
            onChange={(e) => setSelectedGame(e.target.value)}
            className="block mx-auto border-4 border-gray-500 rounded-lg p-2 mb-4 text-lg "
          >
            <option>Select PS5 Pro Game</option>
            {gamesData.map((game) => (
              <option key={game.id} value={game.urlPath}>
                {game.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="block mx-auto text-lg border font-bold p-4 mb-12 bg-gradient-to-b from-blue-700 to-playstation text-white rounded-full hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation hover:font-bold transition-colors duration-200 shadow-md shadow-playstation"
          >
            Review Pro Enhancements
          </button>
        </form>
        <Image
          src={ps5Pro}
          alt="PS5 Pro"
          width={1000}
          className="mx-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default Home;
