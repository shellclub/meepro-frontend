import { NextRequest, NextResponse } from "next/server";
import Facts from "../../../utility/data/facts";

export async function POST(req: NextRequest) {
  return NextResponse.json(Facts);
}
