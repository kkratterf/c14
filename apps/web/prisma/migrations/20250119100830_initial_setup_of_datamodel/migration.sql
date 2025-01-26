-- CreateTable
CREATE TABLE "Startup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "logo" TEXT,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "website" TEXT,
    "linkedin" TEXT,
    "teamSizeid" TEXT,
    "locationid" TEXT NOT NULL,
    "foundedAt" TIMESTAMP(3) NOT NULL,
    "businessModel" TEXT NOT NULL,
    "amountRaised" DOUBLE PRECISION NOT NULL,
    "foundingStageid" TEXT,
    "isPopular" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StartupTag" (
    "id" TEXT NOT NULL,
    "startupid" TEXT NOT NULL,
    "tagid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StartupTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamSize" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "upperLimit" INTEGER NOT NULL,
    "lowerLimit" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoundingStage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FoundingStage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FounderStartup" (
    "id" TEXT NOT NULL,
    "founderid" TEXT NOT NULL,
    "startupid" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FounderStartup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Founder" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "linkedin" TEXT,
    "photo" TEXT,

    CONSTRAINT "Founder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorStartup" (
    "id" TEXT NOT NULL,
    "investorid" TEXT NOT NULL,
    "startupid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestorStartup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "linkedin" TEXT,
    "website" TEXT,
    "photo" TEXT,

    CONSTRAINT "Investor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_teamSizeid_fkey" FOREIGN KEY ("teamSizeid") REFERENCES "TeamSize"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_locationid_fkey" FOREIGN KEY ("locationid") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_foundingStageid_fkey" FOREIGN KEY ("foundingStageid") REFERENCES "FoundingStage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupTag" ADD CONSTRAINT "StartupTag_startupid_fkey" FOREIGN KEY ("startupid") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StartupTag" ADD CONSTRAINT "StartupTag_tagid_fkey" FOREIGN KEY ("tagid") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FounderStartup" ADD CONSTRAINT "FounderStartup_founderid_fkey" FOREIGN KEY ("founderid") REFERENCES "Founder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FounderStartup" ADD CONSTRAINT "FounderStartup_startupid_fkey" FOREIGN KEY ("startupid") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorStartup" ADD CONSTRAINT "InvestorStartup_investorid_fkey" FOREIGN KEY ("investorid") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestorStartup" ADD CONSTRAINT "InvestorStartup_startupid_fkey" FOREIGN KEY ("startupid") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
