import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginantion: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = [];
    const maxPageNumbers = 8;

    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (startPage === 1) {
        endPage = maxPageNumbers - 2;
      } else if (endPage === totalPages) {
        startPage = totalPages - (maxPageNumbers - 3);
      }

      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push("...");
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (endPage < totalPages - 1) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <>
      <ul className="gi-pro-pagination-inner">
        <li>
          <a
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            className={`next ${currentPage === 1 ? "disabled" : ""}`}
            href="#"
          >
            Prev
          </a>
        </li>

        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <li key={index}>
              <a
                className={currentPage === page ? "active" : ""}
                href="#"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ) : (
            <span key={index} className="pagination__ellipsis">
              {page}
            </span>
          )
        )}

        <li>
          <a
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
            className={`next ${currentPage === totalPages ? "disabled" : ""}`}
            href="#"
          >
            Next <i className="gicon gi-angle-right"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Paginantion;
