import { NextRequest, NextResponse } from "next/server";
import Footwear from "../../../utility/data/footwear";

export async function POST(req: NextRequest) {
  return NextResponse.json(Footwear);
}
