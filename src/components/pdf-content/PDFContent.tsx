"use client";
import React from "react";

import { usePDFGenerator } from "@/hooks/usePDFGenerator";

interface PDFContentProps {
  children: React.ReactNode;
  title?: string;
  pageSize?: "A4" | "Letter";
  margins?: string;
  fileName?: string;
}

export const PDFContent = ({
  children,
  title = "Content Title",
  pageSize = "A4",
  margins = "20mm",
  fileName = "document.pdf",
}: PDFContentProps) => {
  const { printRef, handlePrint, handleExport } = usePDFGenerator({
    pageSize,
    margins,
    fileName,
  });

  return (
    <>
      <div className="gi-vendor-card-header">
        <h5>{title}</h5>
        <div className="gi-header-btn">
          <a
            style={{ marginRight: "5px" }}
            className="gi-btn-1"
            href="#"
            onClick={handlePrint}
          >
            Print
          </a>
          <a className="gi-btn-2" href="#" onClick={handleExport}>
            Export
          </a>
        </div>
      </div>
      <div
        id="pdf-content"
        ref={printRef}
        className="bg-white p-8 rounded-lg shadow-md d-print-block"
      >
        {children}
      </div>
    </>
  );
};
