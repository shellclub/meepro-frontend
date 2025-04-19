import { NextRequest, NextResponse } from "next/server";
import FashionTwoBlog from "../../../utility/data/fashiontwoblog";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionTwoBlog);
}
