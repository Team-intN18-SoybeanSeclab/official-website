"use client";

import Github from "@/components/icons/Github";
import Link from "next/link";
import Moon from "@/components/icons/Moon";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-row gap-2 px-4">
      <Link href="https://github.com/Team-intN18-SoybeanSeclab" target="_blank">
        <Github />
      </Link>
      <button onClick={() => setTheme(!theme)}>
        <Moon />
      </button>
    </div>
  );
};

export default Footer;
