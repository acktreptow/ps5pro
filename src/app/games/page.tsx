import { redirect } from "next/navigation";

const GamesPage = () => {
  redirect("/gameslist/");
  return null;
};

export default GamesPage;