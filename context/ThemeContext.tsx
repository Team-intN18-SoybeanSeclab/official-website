"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: false,
  setTheme: () => null,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") !== "light");
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
