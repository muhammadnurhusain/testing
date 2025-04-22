-- CreateEnum
CREATE TYPE "InboundStatus" AS ENUM ('PENDING', 'RECEIVED', 'INSPECTED', 'PUTAWAY');

-- CreateEnum
CREATE TYPE "QCStatus" AS ENUM ('PENDING', 'PASSED', 'REJECTED');

-- CreateTable
CREATE TABLE "InboundTransaction" (
    "id" TEXT NOT NULL,
    "referenceNo" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "receivedDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InboundTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InboundItem" (
    "id" TEXT NOT NULL,
    "productSku" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "quantityReceived" INTEGER NOT NULL,
    "quantityAccepted" INTEGER NOT NULL DEFAULT 0,
    "status" "InboundStatus" NOT NULL DEFAULT 'PENDING',
    "locationCode" TEXT,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "InboundItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InboundItem" ADD CONSTRAINT "InboundItem_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "InboundTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
