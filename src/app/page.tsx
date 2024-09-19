"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gamesData from "../app/data/games.json";

function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-center py-10 font-bold">PS5 Pro</h1>
      <h2 className="text-4xl text-center py-10 font-semibold">Pick a game:</h2>
      <form>
        <select className="block mx-auto border-4 border-gray-500 rounded-lg p-2 mb-4">
          <option>Select game</option>
          {gamesData.map((game) => (
            <option key={game.id}>{game.name}</option>
          ))}
        </select>
        <button
          type="submit"
          className="block mx-auto border font-semibold p-4 mb-8 "
        >
          Review Game Details
        </button>
      </form>
    </div>
  );
}

export default Home;
