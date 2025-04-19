import { NextRequest, NextResponse } from "next/server";
import product from "../../../utility/data/productall";

export async function POST(req: NextRequest) {
  return NextResponse.json(product);
}
