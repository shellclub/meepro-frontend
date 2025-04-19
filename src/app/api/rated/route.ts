import { NextRequest, NextResponse } from "next/server";
import Rated from "../../../utility/data/rated";

export async function POST(req: NextRequest) {
  return NextResponse.json(Rated);
}
