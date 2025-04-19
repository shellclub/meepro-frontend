import { NextRequest, NextResponse } from "next/server";
import Cities from "../../../utility/json/cities.json";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { country_code, states_code } = data;

  if (Array.isArray(Cities)) {
    const returnData = Cities.filter(
      (city: any) =>
        city.country_code == country_code && city.state_code == states_code
    );

    return NextResponse.json(returnData);
  }
  return NextResponse.json([]);
}
