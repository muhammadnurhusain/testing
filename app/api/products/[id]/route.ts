import { NextResponse } from "next/server";
import { createServerClient } from "@/utils/supabase/server";

export async function PUT(req: Request) {
  const { pathname } = new URL(req.url);
  const id = pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID produk tidak ditemukan" }, { status: 400 });
  }

  const body = await req.json();
  const { name, sku, price } = body;

  if (!/[0-9a-fA-F-]{36}/.test(id)) {
    return NextResponse.json({ error: "ID produk tidak valid" }, { status: 400 });
  }

  const supabase = createServerClient();

  const { data, error } = await supabase.from("products").update({ name, sku, price }).eq("id", id).select();
  console.log("Updating ID:", id);
  console.log("Body yang dikirim ke Supabase:", { name, sku, price });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data || data.length === 0) {
    return NextResponse.json({ error: "Produk tidak ditemukan atau tidak terupdate" }, { status: 404 });
  }

  if (!name || !sku || price === undefined || price === "") {
    return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
  }

  return NextResponse.json(data[0]);
}

export async function DELETE(req: Request) {
  const { pathname } = new URL(req.url);
  const id = pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID produk tidak ditemukan" }, { status: 400 });
  }

  const supabase = createServerClient();
  const { error } = await supabase.from("products").delete().match({ id });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
