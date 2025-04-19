import { NextRequest, NextResponse } from "next/server";
import Weight from "../../../utility/data/shopitem";
import _ from "lodash"

export async function POST(req: NextRequest) {

  const shopItems = Weight;

  const groupedByWaight = _.groupBy(shopItems, "weight");

  const result = _.map(groupedByWaight, (items: string, key: any) => ({
    weight: key,
    count: items.length 
  }));

  return NextResponse.json(result);
}
