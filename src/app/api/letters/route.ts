import { NextRequest, NextResponse } from "next/server";
import { supabase, supabaseAdmin } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get("sort") || "newest";

  const { data, error } = await supabase
    .from("letters")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: sort === "oldest" });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, title, message } = body;

  if (!name || !title || !message) {
    return NextResponse.json(
      { error: "Name, title and message are required" },
      { status: 400 },
    );
  }

  const { data, error } = await supabaseAdmin
    .from("letters")
    .insert([
      {
        name: name.trim(),
        title: title.trim(),
        message: message.trim(),
        published: false,
      },
    ])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
