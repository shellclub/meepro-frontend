import { NextRequest, NextResponse } from "next/server";
import Question from "../../../utility/data/questionstwo";

export async function POST(req: NextRequest) {
  return NextResponse.json(Question);
}
