import { NextRequest, NextResponse } from "next/server";
import FashionAll from "../../../utility/data/fashionall";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionAll);
}
