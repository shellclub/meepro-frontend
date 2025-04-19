import { NextRequest, NextResponse } from "next/server";
import vegetables from "../../../utility/data/vegetables";

export async function POST(req: NextRequest) {
  return NextResponse.json(vegetables);
}
