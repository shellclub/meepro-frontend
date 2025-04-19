import { NextRequest, NextResponse } from "next/server";
import Deal from "../../../utility/data/deal";

export async function POST(req: NextRequest) {
  return NextResponse.json(Deal);
}
