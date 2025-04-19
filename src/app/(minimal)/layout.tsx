"use client";

import LayoutTwo from "@/components/layout/layout-two";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutTwo>{children}</LayoutTwo>;
}
