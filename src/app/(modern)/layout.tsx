"use client";

import LayoutThree from "@/components/layout/layout-three";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutThree>{children}</LayoutThree>;
}
