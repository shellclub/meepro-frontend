import { NextRequest, NextResponse } from "next/server";
import Team from "../../../utility/data/team";

export async function POST(req: NextRequest) {
  return NextResponse.json(Team);
}
