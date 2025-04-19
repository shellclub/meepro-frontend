import { NextResponse } from "next/server";
import fashionAllItem from "../../../utility/data/fashionallitem";

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

export async function POST(req) {
  try {
    const {
      searchTerm = "",
      sortOption = "1",
      page = 1,
      limit = 10,
      selectedCategory = [],
      selectedTags = [],
      selectedBrands = [],
      MinPrice = 0,
      MaxPrice = Infinity,
    } = await req.json();

    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);

    let filteredData = fashionAllItem.filter((item) => {
      var bloo = item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return bloo;
    });

    if (MinPrice && MinPrice > 0) {
      filteredData = filteredData.filter((item) => item.newPrice >= MinPrice);
    }

    if (MaxPrice) {
      filteredData = filteredData.filter((item) => item.newPrice <= MaxPrice);
    }

    if (selectedCategory.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedCategory.includes(item.category)
      );
    }

    if (selectedTags.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedTags.includes(item.tags)
      );
    }

    if (selectedBrands.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedBrands.includes(item.brand)
      );
    }

    const sortedData = sortData(filteredData, sortOption);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = sortedData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return NextResponse.json({
      data: paginatedData,
      totalItems: sortedData.length,
      currentPage,
      totalPages: Math.ceil(sortedData.length / itemsPerPage),
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON input" }, { status: 400 });
  }
}
