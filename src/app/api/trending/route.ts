import { NextRequest, NextResponse } from "next/server";
import Trending from "../../../utility/data/trending";

export async function POST(req: NextRequest) {
  return NextResponse.json(Trending);
}
