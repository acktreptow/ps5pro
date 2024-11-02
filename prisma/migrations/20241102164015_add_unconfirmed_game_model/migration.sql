-- CreateTable
CREATE TABLE "UnconfirmedGame" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "psStudios" BOOLEAN NOT NULL DEFAULT false,
    "psvr2" BOOLEAN NOT NULL DEFAULT false,
    "release" TEXT NOT NULL,
    "metacritic" INTEGER NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UnconfirmedGame_pkey" PRIMARY KEY ("id")
);
