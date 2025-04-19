import { NextRequest, NextResponse } from "next/server";
import accessorise from "../../../utility/data/accessorise";

export async function POST(req: NextRequest) {
  return NextResponse.json(accessorise);
}
