import { NextRequest, NextResponse } from "next/server";
import Category from "../../../utility/data/category";

export async function POST(req: NextRequest) {
  return NextResponse.json(Category);
}
