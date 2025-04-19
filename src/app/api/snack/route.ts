import { NextRequest, NextResponse } from "next/server";
import snack from "../../../utility/data/snack";

export async function POST(req: NextRequest) {
  return NextResponse.json(snack);
}
