import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface GeneratePDFOptions {
  element: HTMLElement;
  fileName?: string;
  pageSize?: "a4" | "letter";
  orientation?: "portrait" | "landscape";
}

export const generatePDF = async ({
  element,
  fileName = "document.pdf",
  pageSize = "a4",
  orientation = "portrait",
}: GeneratePDFOptions): Promise<void> => {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF(orientation, "mm", pageSize);

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(fileName);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
};
