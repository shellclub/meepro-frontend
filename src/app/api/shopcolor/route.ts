import { NextRequest, NextResponse } from "next/server";
import ShopColor from "../../../utility/data/shopitem";
import _ from "lodash";

export async function POST(req: NextRequest) {
  const shopItems = ShopColor;

  const groupedByColor = _.groupBy(shopItems, "color");

  const result = _.map(groupedByColor, (items: string, key: any) => ({
    color: key,
    count: items.length,
  }));

  return NextResponse.json(result);
}
