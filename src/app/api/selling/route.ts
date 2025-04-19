import { NextRequest, NextResponse } from "next/server";
import Selling from "../../../utility/data/selling";

export async function POST(req: NextRequest) {
  return NextResponse.json(Selling);
}
