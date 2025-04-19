"use client";

import { useRef, RefObject } from "react";
// import { usePrint } from "@/hooks/usePrint";
import usePrint, { PrintWindowOptions } from "@/hooks/usePrint";
import { useExportPDF } from "@/hooks/useExportPDF";

interface PDFGeneratorOptions {
  pageSize?: "A4" | "Letter";
  margins?: string;
  fileName?: string;
}

export const usePDFGenerator = (options: PDFGeneratorOptions = {}) => {
  const {
    pageSize = "A4",
    margins = "0.5cm",
    fileName = "document.pdf",
  } = options;

  const printRef = useRef<HTMLDivElement>(null);

  const printOptions: PrintWindowOptions = {
    pageSize: pageSize,
    margins: margins,
    contentId: "pdf-content",
    cssPath: "/assets/css/style.css",
    additionalStyles: `
      .no-print { display: none }
      .print-only { display: block }
    `,
    windowSettings: "width=1024,height=768",
  };

  const handlePrint = usePrint(printOptions);

  const handleExport = useExportPDF({
    fileName,
    pageSize: pageSize.toLowerCase() as "a4" | "letter",
    ref: printRef as RefObject<HTMLElement>,
  });

  return {
    printRef,
    handlePrint,
    handleExport,
  };
};
