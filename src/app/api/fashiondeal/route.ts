import { NextRequest, NextResponse } from "next/server";
import FashionDeal from "../../../utility/data/categorydeal";

export async function POST(req: NextRequest) {
  return NextResponse.json(FashionDeal);
}
