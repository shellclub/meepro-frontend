import { NextRequest, NextResponse } from "next/server";
import FashionItem from "../../../utility/data/fashionitem";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionItem);
}
