import Github from "@/components/icons/Github";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col h-full border-r border-mobai-border xl:border-l">
      <div className="pt-4">
        <div className="px-4 border-y border-mobai-border">
          <div className="bg-mobai-yellow w-fit px-2 flex flex-col justify-center items-center">
            <p className="whitespace-nowrap text-black font-fjalla-one text-5xl">{`Soybean SEC`}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 py-8">
        <Link
          href="#members"
          className="text-4xl [text-shadow:1px_1px_#D90000] hover:text-background font-medium font-fjalla-one text-background transition-all duration-300 ease-mobai-bounce"
        >
          Members
        </Link>
        <Link
          href="#links"
          className="text-2xl hover:[text-shadow:1px_1px_#15DD4B] hover:text-4xl font-medium font-fjalla-one hover:text-background transition-all duration-300 ease-mobai-bounce"
        >
          Links
        </Link>
        <Link
          href="#contact"
          className="text-2xl hover:[text-shadow:1px_1px_#3C00FF] hover:text-4xl font-medium font-fjalla-one hover:text-background transition-all duration-300 ease-mobai-bounce"
        >
          Contact
        </Link>
        <Link
          href="#join"
          className="text-2xl hover:[text-shadow:1px_1px_#15DD4B] hover:text-4xl font-medium font-fjalla-one hover:text-background transition-all duration-300 ease-mobai-bounce"
        >
          Join
        </Link>
      </div>
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
