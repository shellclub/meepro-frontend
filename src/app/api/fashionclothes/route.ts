import { NextRequest, NextResponse } from "next/server";
import FashionClothes from "../../../utility/data/fashionclothe";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionClothes);
}
