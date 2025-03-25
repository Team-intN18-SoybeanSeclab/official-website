import Brand from "@/components/layout/sidebar/Brand";
import Github from "@/components/icons/Github";
import Link from "next/link";
import Nav from "@/components/layout/sidebar/Nav";
import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col h-full border-r border-mobai-border xl:border-l">
      <div className="pt-4">
        <Brand />
      </div>
      <Nav />
      <div className="pb-8">
        <div className="flex h-[1px] w-full">
          <div className="w-1/3 bg-[#D90000]" />
          <div className="w-1/3 bg-[#15DD4B]" />
          <div className="w-1/3 bg-[#3C00FF]" />
        </div>
      </div>
      <div className="px-4">
        <Link
          href="https://github.com/Team-intN18-SoybeanSeclab"
          target="_blank"
        >
          <Github />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
