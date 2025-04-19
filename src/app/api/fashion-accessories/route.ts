import { NextRequest, NextResponse } from "next/server";
import accessorise from "../../../utility/data/accessorise";
import _ from "lodash"

export async function POST(req: NextRequest) {

  const AccessoriseItem = accessorise;

  const groupedByCategory = _.groupBy(AccessoriseItem, "category");

  const result = _.map(groupedByCategory, (items: string, key: any) => ({
    category: key,
    count: items.length 
  }));

  return NextResponse.json(result);
}
