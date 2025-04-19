import { NextRequest, NextResponse } from "next/server";
import vendorlist from "../../../utility/data/vendor-list";

export async function POST(req: NextRequest) {
  return NextResponse.json(vendorlist);
}
