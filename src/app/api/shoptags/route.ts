import { NextRequest, NextResponse } from "next/server";
import ShopTags from "../../../utility/data/shopitem";
import _ from "lodash";

export async function POST(req: NextRequest) {
  const shopItems = ShopTags;

  const groupedByTags = _.groupBy(shopItems, "tags");

  const result = _.map(groupedByTags, (items: string, key: any) => ({
    tags: key,
    count: items.length,
  }));

  return NextResponse.json(result);
}
