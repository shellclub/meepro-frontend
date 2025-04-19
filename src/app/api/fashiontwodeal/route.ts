import { NextRequest, NextResponse } from "next/server";
import FashionTwoDeal from "../../../utility/data/fashiondeal";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionTwoDeal);
}
