import { NextRequest, NextResponse } from "next/server";
import productImage from "../../../utility/data/productimage";

export async function POST(req: NextRequest) {
  return NextResponse.json(productImage);
}
