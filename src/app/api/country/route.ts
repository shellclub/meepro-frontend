import { NextRequest, NextResponse } from "next/server";
import Country from "../../../utility/json/countries.json";

export async function POST(req: NextRequest) {
  return NextResponse.json(Country);
}
