import { NextRequest, NextResponse } from "next/server";
import PolicyOne from "../../../utility/data/policy";

export async function POST(req: NextRequest) {
  return NextResponse.json(PolicyOne);
}
