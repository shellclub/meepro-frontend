import "./globals.css";

import Providers from "@/store/Provider";
import { Loader } from "@/components/loader";
import QueryProvider from "@/context/QueryProvider";
import SessionWrapper from "@/context/SessionWrapper";
import { Prompt } from "next/font/google";

interface RootLayoutProps {
  children: React.ReactNode;
}
const prompt = Prompt({
  subsets: ["latin", "latin-ext", "thai", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata = {
  title:
    "MeePro Pet Shop - อาหารสัตว์เลี้ยง อาหารแมว อาหารสุนัข ของเล่นแมว อาหารเสริม ",
  description: "อาหารสัตว์เลี้ยง อาหารแมว อาหารสุนัข ของเล่นแมว อาหารเสริม",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <QueryProvider>
      <SessionWrapper>
        <html lang="th">
          <head>
            <link
              href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </head>
          <body className={prompt.className} style={{ background: "none" }}>
            <Loader>
              <Providers>
                <div>{children}</div>
              </Providers>
            </Loader>
          </body>
        </html>
      </SessionWrapper>
    </QueryProvider>
  );
}
