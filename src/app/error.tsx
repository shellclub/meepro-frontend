"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error); // Log the error to the console (optional)
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message || "An unknown error occurred."}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
