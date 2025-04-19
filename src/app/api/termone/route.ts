import { NextRequest, NextResponse } from "next/server";
import TermsCondition from "../../../utility/data/termscondition";

export async function POST(req: NextRequest) {
  return NextResponse.json(TermsCondition);
}
