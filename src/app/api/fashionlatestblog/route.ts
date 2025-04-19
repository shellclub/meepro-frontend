import { NextRequest, NextResponse } from "next/server";
import FashionBlog from "../../../utility/data/fashionblog";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionBlog);
}
