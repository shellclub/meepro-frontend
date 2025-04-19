import { NextRequest, NextResponse } from "next/server";
import Blog from "../../../utility/data/blogcontent";

export async function POST(req: NextRequest) {
  const { searchTerm, page, limit, selectedCategory } = await req.json();

  // Convert request data to appropriate types
  const currentPage = parseInt(page, 10) || 1;
  const itemsPerPage = parseInt(limit, 10) || 6;
  const term = searchTerm || "";
  const categories = selectedCategory || [];

  // Filter and paginate data
  let filteredData = Blog;

  // Search filter
  if (term) {
    filteredData = filteredData.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
    );
  }

  // Category filter
  if (categories.length > 0) {
    filteredData = filteredData.filter((item) =>
      categories.includes(item.category)
    );
  }

  // Pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return NextResponse.json({
    data: paginatedData,
    totalItems,
    totalPages,
  });
}
