import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    // Ubah userId ke number
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const userId = parseInt(decoded.userId, 10); // Mengonversi userId ke number

    // Pastikan userId valid
    if (isNaN(userId)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
