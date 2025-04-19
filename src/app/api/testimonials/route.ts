import { NextRequest, NextResponse } from "next/server";
import Testimonials from "../../../utility/data/testimonials";

export async function POST(req: NextRequest) {
  return NextResponse.json(Testimonials);
}
