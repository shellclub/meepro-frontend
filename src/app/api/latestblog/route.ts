import { NextRequest, NextResponse } from "next/server";
import LatestBlog from "../../../utility/data/latestblog";

export async function POST(req: NextRequest) {
  return NextResponse.json(LatestBlog);
}
