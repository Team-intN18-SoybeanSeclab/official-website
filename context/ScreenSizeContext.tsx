"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ScreenSize = "mobile" | "desktop";

interface ScreenSizeContextType {
  screenSize: ScreenSize;
  isMobile: boolean;
  isDesktop: boolean;
}

const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(
  undefined,
);

const ScreenSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = {
    screenSize,
    isMobile: screenSize === "mobile",
    isDesktop: screenSize === "desktop",
  };

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }
  return context;
};

export { ScreenSizeProvider, useScreenSize };
