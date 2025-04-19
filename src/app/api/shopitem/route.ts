import { NextRequest, NextResponse } from "next/server";
import Shop from "../../../utility/data/shopitem";

// Function to sort the data based on the sort option
function sortData(filteredData: any[], sortOption: string) {
  switch (sortOption) {
    case "1":
      // Sort by Position (implement custom logic if necessary)
      return filteredData;
    case "2":
      // Sort by Relevance (implement custom logic if necessary)
      return filteredData;
    case "3":
      // Sort by Name, A to Z
      return [...filteredData].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    case "4":
      // Sort by Name, Z to A
      return [...filteredData].sort((a, b) =>
        b.category.localeCompare(a.category)
      );
    case "5":
      // Sort by Price, low to high
      return [...filteredData].sort((a, b) => a.newPrice - b.newPrice);
    case "6":
      // Sort by Price, high to low
      return [...filteredData].sort((a, b) => b.newPrice - a.newPrice);
    default:
      return filteredData;
  }
}

export async function POST(req: NextRequest) {
  const { searchTerm = '', sortOption = '1', page = 1, limit = 10, selectedCategory = [], selectedWeight = [], selectedColor = [], selectedTags = [],   range = { min: 0, max: 250 }  } = await req.json();

  const currentPage = parseInt(page as string, 10);
  const itemsPerPage = parseInt(limit as string, 10);

  let filteredData = Shop.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())  &&
    item.newPrice >= range.min &&
    item.newPrice <= range.max
  );

  if (selectedCategory.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedCategory.includes(item.category)
    );
  }

  if (selectedWeight.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedWeight.includes(item.weight)
    );
  }

  if(selectedColor.length > 0) {
    filteredData = filteredData.filter((item) => 
      selectedColor.includes(item.color)
    );
  }

  if(selectedTags.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedTags.includes(item.tags) 
    )
  }

  const sortedData = sortData(filteredData, sortOption);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  return NextResponse.json({
    data: paginatedData,
    totalItems: sortedData.length,
    currentPage,
    totalPages: Math.ceil(sortedData.length / itemsPerPage),
  });
}
