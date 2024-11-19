import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const detailedGames = await prisma.detailedGame.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        urlPath: true,
        genre: true,
        developer: true,
        psStudios: true,
        psvr2: true,
        release: true,
        metacritic: true,
        pssr: true,
        rt: true,
        rtTypes: true,
        topRes: true,
        topFps: true,
        modes: true,
        extraInfo: true,
      },
      orderBy: {
        title: "asc",
      },
    });
    return NextResponse.json(detailedGames);
  } catch (error) {
    console.error("Error fetching detailed games:", error);
    return NextResponse.error();
  }
}
