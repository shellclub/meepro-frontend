"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Start loading when pathname changes
    setIsLoading(true);

    // Stop loading after a short delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay as needed

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div id="gi-overlay">
      <span className="loader"></span>
    </div>
  );
}
