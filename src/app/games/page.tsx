"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GamesPage = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.push("/gameslist/");
  }, [router]);

  return <div></div>;
};

export default GamesPage;

// import { redirect } from "next/navigation";

// const GamesPage = () => {
//   redirect("/gameslist/");
//   return null;
// };

// export default GamesPage;
