import { NextRequest, NextResponse } from "next/server";
import FashionTwoBanner from "../../../utility/data/fashiontwobanner";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionTwoBanner);
}
