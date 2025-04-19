import { NextRequest, NextResponse } from "next/server";
import Tags from "../../../utility/data/fashionallitem";
import _ from "lodash"

export async function POST(req: NextRequest) {

  const fashionItems = Tags;
  

  const groupedByTags = _.groupBy(fashionItems, "tags");

  const result = _.map(groupedByTags, (items: string, key: any) => ({
    tags: key,
    count: items.length 
  }));

  return NextResponse.json(result);
}
