import { NextRequest, NextResponse } from "next/server";
import Question from "../../../utility/data/questions";

export async function POST(req: NextRequest) {
  return NextResponse.json(Question);
}
