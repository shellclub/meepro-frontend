import { NextRequest, NextResponse } from "next/server";
import RecentBlog from "../../../utility/data/recentblog";

export async function POST(req: NextRequest) {
  return NextResponse.json(RecentBlog);
}
