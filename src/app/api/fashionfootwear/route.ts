import { NextRequest, NextResponse } from "next/server";
import FashionFootwear from "../../../utility/data/fashionfootwear";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionFootwear);
}
