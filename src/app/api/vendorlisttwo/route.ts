import { NextRequest, NextResponse } from "next/server";
import vendorlisttwo from "../../../utility/data/vendor-list-2";

export async function POST(req: NextRequest) {
  return NextResponse.json(vendorlisttwo);
}
