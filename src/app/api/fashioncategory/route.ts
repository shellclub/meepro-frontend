import { NextRequest, NextResponse } from "next/server";
import Fashioncategory from "../../../utility/data/sidebarcategory";

export async function POST(req: NextRequest) {
  return NextResponse.json(Fashioncategory);
}
