import { NextRequest, NextResponse } from "next/server";
import FashionTwoAll from "../../../utility/data/fashiontwoall";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionTwoAll);
}
