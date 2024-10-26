"use client";

import { useRouter } from "next/navigation";

const GamesPage = (): JSX.Element => {
  useRouter().push("/gameslist/");

  return <div></div>;
};

export default GamesPage;
