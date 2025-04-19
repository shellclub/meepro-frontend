import { NextRequest, NextResponse } from "next/server";
import Clothes from "../../../utility/data/clothes";

export async function POST(req: NextRequest) {
  return NextResponse.json(Clothes);
}
