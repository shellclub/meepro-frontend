interface PrintWindowOptions {
  windowSettings?: string;
  cssPath?: string;
  additionalStyles?: string;
  pageSize?: "A4" | "Letter";
  margins?: string;
  contentId: string;
}

interface PrintWindowInstance {
  document: Document;
  onload: (() => void) | null;
  onerror: ((error: string) => void) | null;
  focus: () => void;
  print: () => void;
  close: () => void;
}

class PrintWindow {
  private window: PrintWindowInstance | null;
  private readonly windowSettings: string;
  private readonly cssPath: string;
  private readonly additionalStyles: string;
  private readonly pageSize: string;
  private readonly margins: string;
  private readonly contentId: string;

  constructor(options: PrintWindowOptions = { contentId: "print-content" }) {
    this.windowSettings = options.windowSettings || "width=800,height=600";
    this.cssPath = options.cssPath || "/assets/css/style.css";
    this.additionalStyles = options.additionalStyles || "";
    this.pageSize = options.pageSize || "A4";
    this.margins = options.margins || "";
    this.contentId = options.contentId || "print-content";
    this.window = null;
  }

  public open(): boolean {
    try {
      const newWindow = window.open(
        "",
        "_blank",
        this.windowSettings
      ) as PrintWindowInstance | null;

      if (!newWindow) {
        throw new Error(
          "Failed to open print window. Pop-ups might be blocked."
        );
      }

      this.window = newWindow;
      return true;
    } catch (error) {
      console.error("PrintWindow open error:", error);
      return false;
    }
  }

  public write(content: string): boolean {
    try {
      if (!this.window) {
        throw new Error("Window not initialized. Call open() first.");
      }

      this.window.document.open();
      this.window.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Print Preview</title>
            <link rel="stylesheet" href="/assets/css/plugins/bootstrap.css" />
            <link rel="stylesheet" href="${this.cssPath}" />
            <style>
              body {
                margin: 0;
                padding: 20px;
              }
              @media print {
                
                #${this.contentId},
                #${this.contentId} * {
                  visibility: visible;
                }
                #${this.contentId} {
                  padding: 0 !important;
                  margin: 0 !important;
                  position: absolute !important;
                  left: 0 !important;
                  top: 0 !important;
                  width: 100% !important;
                }

                /* Set page margins */
                @page {
                  size: ${this.pageSize};
                  margin: ${this.margins};
                }
              }
              ${this.additionalStyles}
            </style>
          </head>
          <body>
          ${content}
          </body>
        </html>
      `);
      this.window.document.close();
      return true;
    } catch (error) {
      console.error("PrintWindow write error:", error);
      return false;
    }
  }

  public print(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.window) {
          throw new Error("Window not initialized. Call open() first.");
        }

        this.window.onload = () => {
          this.window?.focus();
          this.window?.print();
          resolve();
        };

        this.window.onerror = (error: string) => {
          reject(new Error(`Print window error: ${error}`));
        };
      } catch (error) {
        console.error("PrintWindow print error:", error);
        reject(error);
      }
    });
  }

  public close(): void {
    try {
      if (this.window) {
        this.window.close();
        this.window = null;
      }
    } catch (error) {
      console.error("PrintWindow close error:", error);
    }
  }

  public async printContent(content: string): Promise<boolean> {
    try {
      const isWindowOpened = this.open();
      if (!isWindowOpened) {
        throw new Error("Failed to open print window");
      }

      const isContentWritten = this.write(content);
      if (!isContentWritten) {
        throw new Error("Failed to write content to print window");
      }

      await this.print();
      this.close();

      return true;
    } catch (error) {
      console.error("PrintWindow printContent error:", error);
      this.close();
      throw error;
    }
  }
}

export type { PrintWindowOptions };
export default PrintWindow;
