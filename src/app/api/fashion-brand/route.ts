import { NextRequest, NextResponse } from "next/server";
import Brand from "../../../utility/data/fashionallitem";
import _ from "lodash"

export async function POST(req: NextRequest) {

  const fashionItems = Brand;
  

  const groupedByBrand = _.groupBy(fashionItems, "brand");

  const result = _.map(groupedByBrand, (items: string, key: any) => ({
    brand: key,
    count: items.length 
  }));

  return NextResponse.json(result);
}
