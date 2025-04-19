"use client";

import LayoutOne from "@/components/layout/layout-one";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutOne>{children}</LayoutOne>;
}
