import { useCallback } from "react";
import PrintWindow, { PrintWindowOptions } from "@/lib/printOpenWindow";

const usePrint = (
  options: PrintWindowOptions = { contentId: "print-content" }
): any => {
  const print = useCallback(async (): Promise<void> => {
    const contentId = options.contentId;
    try {
      const element = document.getElementById(contentId);

      if (!element) {
        throw new Error(`Element with id "${contentId}" not found`);
      }

      const content = element.innerHTML;
      const printWindow = new PrintWindow(options);
      await printWindow.printContent(content);
    } catch (error) {
      console.error("Print error:", error);
      throw error;
    }
  }, [options]);

  return print;
};

export type { PrintWindowOptions };
export default usePrint;
