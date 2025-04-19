import { NextRequest, NextResponse } from "next/server";
import FashionTwoCategory from "../../../utility/data/fashioncategory";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionTwoCategory);
}
