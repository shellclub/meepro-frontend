import { NextRequest, NextResponse } from "next/server";
import ShopCategory from "../../../utility/data/shopitem";
import _ from "lodash"

export async function POST(req: NextRequest) {

  const shopItems = ShopCategory;

  const groupedByCategory = _.groupBy(shopItems, "category");

  const result = _.map(groupedByCategory, (items: string, key: any) => ({
    category: key,
    count: items.length 
  }));

  return NextResponse.json(result);
}
