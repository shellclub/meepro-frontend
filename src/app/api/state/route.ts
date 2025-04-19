import { NextRequest, NextResponse } from "next/server";
import States from "../../../utility/json/states.json";

export async function POST(req: NextRequest) {

   
  const data  = await req.json()

  const { country_code } = data;

  const returnData = States.filter((state) => state.country_code == country_code );

  
  return NextResponse.json(returnData);
}
