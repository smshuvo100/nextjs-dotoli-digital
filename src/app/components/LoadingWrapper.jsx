"use client";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function LoadingWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marks when hydration is complete on client
    setIsClient(true);
  }, []);

  // Only show loading spinner until client-side hydration
  return isClient ? children : <Loading />;
}
