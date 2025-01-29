-- AlterTable
ALTER TABLE "Startup" ADD COLUMN     "amountRaisedCurrency" TEXT,
ALTER COLUMN "businessModel" DROP NOT NULL,
ALTER COLUMN "amountRaised" DROP NOT NULL;
