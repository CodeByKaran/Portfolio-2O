import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Check if window is available (client-side)
      if (typeof window !== "undefined") {
        // Use media query for more reliable detection
        const isMobileQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(isMobileQuery.matches);
      }
    }

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [theme, setTheme]); // Empty array ensures effect runs only on mount/unmount

  return isMobile;
}
