import { NextRequest, NextResponse } from "next/server";
import fashionClothes from "../../../utility/data/clothes";
import _ from "lodash"

export async function POST(req: NextRequest) {

  const ClotheItem = fashionClothes;

  const groupedByCategory = _.groupBy(ClotheItem, "category");

  const result = _.map(groupedByCategory, (items: string, key: any) => ({
    category: key,
    count: items.length 
  }));

  return NextResponse.json(result);
}
