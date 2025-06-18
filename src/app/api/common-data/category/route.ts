// app/api/common-data/category/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { id: 1, name: "หมวดหมู่ A" },
    { id: 2, name: "หมวดหมู่ B" },
  ];
  return NextResponse.json({ data });
}
