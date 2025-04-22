/*
  Warnings:

  - You are about to drop the column `locationCode` on the `InboundItem` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `InboundItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "InboundItem" DROP COLUMN "locationCode",
DROP COLUMN "status",
ALTER COLUMN "quantityAccepted" DROP DEFAULT;
