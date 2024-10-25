"use client";

import { useState } from "react";
import Image from "next/image";
import gamesData from "../app/data/postableGames.json";
import ps5Pro from "../../public/images/PS5-Pro.jpg";

function Home() {
  const [selectedGame, setSelectedGame] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedGame) {
      window.location.href = `/games/${selectedGame}`;
    }
  }

  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 py-8 px-4 md:p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        PS5 Pro Enhanced Games
      </h1>
      <h2 className="text-4xl text-center py-10 font-semibold">
        Everything you need to know about the Pro versions of PS5 games
      </h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="block mx-auto border-4 border-gray-500 rounded-lg p-2 mb-4"
        >
          <option>Select game</option>
          {gamesData.map((game) => (
            <option key={game.id}>{game.name}</option>
          ))}
        </select>
        <button
          type="submit"
          className="block mx-auto border font-semibold p-4 mb-8"
        >
          Review Game Details
        </button>
      </form>
      |<Image src={ps5Pro} alt="PS5 Pro" width={1000} className="mx-auto" />
    </div>
  );
}

export default Home;
