import { NextRequest, NextResponse } from "next/server";
import FashionTwoFootwear from "../../../utility/data/fashiontwofootwear";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionTwoFootwear);
}
