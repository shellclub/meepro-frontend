"use client";

import { useCallback } from "react";
import { generatePDF } from "@/lib/pdfUtils";

interface UseExportPDFOptions {
  fileName: string;
  pageSize: "a4" | "letter";
  ref: React.RefObject<HTMLElement>;
}

export const useExportPDF = ({
  fileName,
  pageSize,
  ref,
}: UseExportPDFOptions) => {
  return useCallback(async () => {
    if (!ref.current) return;

    try {
      await generatePDF({
        element: ref.current,
        fileName,
        pageSize,
      });
    } catch (error) {
      console.error("Failed to export PDF:", error);
    }
  }, [fileName, pageSize, ref]);
};
