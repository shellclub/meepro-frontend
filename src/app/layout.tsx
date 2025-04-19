import "./globals.css";

import Providers from "@/store/Provider";
import { Loader } from "@/components/loader";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "MeePro Pet Shop - อาหารสัตว์เลี้ยง อาหารแมว อาหารสุนัข ของเล่นแมว อาหารเสริม ",
  description: "อาหารสัตว์เลี้ยง อาหารแมว อาหารสุนัข ของเล่นแมว อาหารเสริม",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th">
      <body style={{ background: "none" }}>
        <Loader>
          <Providers>
            <div>{children}</div>
          </Providers>
        </Loader>
      </body>
    </html>
  );
}
