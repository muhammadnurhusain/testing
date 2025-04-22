-- AlterTable
ALTER TABLE "InboundItem" ADD COLUMN     "locationCode" TEXT,
ADD COLUMN     "status" "InboundStatus" NOT NULL DEFAULT 'PENDING';
