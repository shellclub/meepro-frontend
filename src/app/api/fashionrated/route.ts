import { NextRequest, NextResponse } from "next/server";
import FashionRated from "../../../utility/data/fashionrated";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionRated);
}
