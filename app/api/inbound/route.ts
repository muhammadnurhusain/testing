import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Buat interface untuk tipe item
interface InboundItem {
  productSku: string;
  productName: string;
  quantityReceived: number;
  quantityAccepted?: number;
  status?: string;
  locationCode?: string | null;
}

export async function GET() {
  try {
    const data = await prisma.inboundTransaction.findMany({
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("GET error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { referenceNo, supplier, receivedDate, items } = body;

    const created = await prisma.inboundTransaction.create({
      data: {
        referenceNo,
        supplier,
        receivedDate: new Date(receivedDate),
        items: {
          create: items.map((item: InboundItem) => ({
            productSku: item.productSku,
            productName: item.productName,
            quantityReceived: item.quantityReceived,
            quantityAccepted: item.quantityAccepted || 0,
            status: item.status || "PENDING",
            locationCode: item.locationCode || null,
          })),
        },
      },
    });

    return NextResponse.json(created);
  } catch (error: unknown) {
    console.error("POST error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}