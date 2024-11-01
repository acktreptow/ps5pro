-- CreateTable
CREATE TABLE "DetailedGame" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "urlPath" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "psStudios" BOOLEAN NOT NULL DEFAULT false,
    "release" TEXT NOT NULL,
    "metacritic" INTEGER NOT NULL,
    "pssr" BOOLEAN NOT NULL DEFAULT false,
    "rt" BOOLEAN NOT NULL DEFAULT false,
    "rtTypes" TEXT,
    "topRes" TEXT NOT NULL,
    "topFps" TEXT NOT NULL,
    "modes" JSONB,
    "extraInfo" TEXT,

    CONSTRAINT "DetailedGame_pkey" PRIMARY KEY ("id")
);
