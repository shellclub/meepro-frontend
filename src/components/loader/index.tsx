"use client";

import { GlobalLoader } from "./GlobalLoader";

export function Loader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalLoader />
      {children}
    </>
  );
}
