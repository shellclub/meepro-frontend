import { NextRequest, NextResponse } from "next/server";
import MoreItem from "../../../utility/data/moreitem";

export async function POST(req: NextRequest) {
  return NextResponse.json(MoreItem);
}
