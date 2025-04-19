import { NextRequest, NextResponse } from "next/server";
import Footwear from "../../../utility/data/footwear";
import _ from "lodash"

export async function POST(req: NextRequest) {

  const FootwearItem = Footwear;

  const groupedByCategory = _.groupBy(FootwearItem, "category");

  const result = _.map(groupedByCategory, (items: string, key: any) => ({
    category: key,
    count: items.length 
  }));

  return NextResponse.json(result);
}
