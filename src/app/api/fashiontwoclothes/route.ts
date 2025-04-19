import { NextRequest, NextResponse } from "next/server";
import FashionTwoClothe from "../../../utility/data/fashiontwocloths";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionTwoClothe);
}
