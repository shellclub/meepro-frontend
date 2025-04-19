import { NextRequest, NextResponse } from "next/server";
import fruits from "../../../utility/data/fruits";

export async function POST(req: NextRequest) {
  return NextResponse.json(fruits);
}
