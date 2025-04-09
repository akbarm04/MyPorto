"use client";

import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile
    const checkMobile = () => {
      const userAgent =
        typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      const mobile = Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      );
      setIsMobile(mobile || window.innerWidth <= 768);
    };

    // Check on initial load
    checkMobile();

    // Check on window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
