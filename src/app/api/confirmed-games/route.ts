import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const confirmedGames = await prisma.confirmedGame.findMany({
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
        title: 'asc',
      },
    });
    return NextResponse.json(confirmedGames);
  } catch (error) {
    console.error('Error fetching confirmed games:', error);
    return NextResponse.error();
  }
}