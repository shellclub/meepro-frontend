import { NextRequest, NextResponse } from "next/server";
import Blog from "../../../utility/data/blogcontent";
import _ from "lodash"

export async function POST(req: NextRequest) {

  const BlogItems = Blog;

  const groupedByCategory = _.groupBy(BlogItems, "category");

  const result = _.map(groupedByCategory, (items: string, key: any) => ({
    category: key,
    count: items.length 
  }));

  return NextResponse.json(result);
}
