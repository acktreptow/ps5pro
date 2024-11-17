import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const unconfirmedGames = await prisma.unconfirmedGame.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        genre: true,
        developer: true,
        psStudios: true,
        psvr2: true,
        release: true,
        metacritic: true,
      },
      orderBy: {
        title: "asc",
      },
    });
    return NextResponse.json(unconfirmedGames);
  } catch (error) {
    console.error("Error fetching unconfirmed games:", error);
    return NextResponse.error();
  }
}
