import { NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";

type Product = {
  id: string;
  name: string;
  sku: string;
  price: string;
  created_at: string | null;
};

type InsertProduct = Omit<Product, "id" | "created_at">;

export async function GET() {
  const supabase = createServerClient();

  // Ambil data produk dari Supabase
  const { data, error } = await supabase.from("products").select("*");

  // Kalau ada error, balikin response error 500
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Kalau nggak ada error, balikin data produk
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const supabase = createServerClient();
  const body = await req.json();

  const { name, sku, price } = body;

  // Insert produk ke dalam database
  const { data, error } = await supabase.from("products").insert<InsertProduct>([{ name, sku, price }]).select();

  // Handle error jika ada
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Kalau nggak ada data balik, berarti gagal insert
  if (!data || data.length === 0) {
    return NextResponse.json({ error: "Insert failed, no data returned." }, { status: 500 });
  }

  // Balikin data produk yang baru di-insert
  return NextResponse.json(data[0]);
}
