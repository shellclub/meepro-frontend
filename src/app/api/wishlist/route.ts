import { NextRequest, NextResponse } from "next/server";
import Wishlist from "../../../utility/data/wishlist";

export async function POST(req: NextRequest) {
  return NextResponse.json(Wishlist);
}
