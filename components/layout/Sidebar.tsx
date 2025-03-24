import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full border-r border-mobai-border xl:border-l">
      <div className="pt-4">
        <div className="px-4 border-y border-mobai-border">
          <div className="bg-mobai-yellow w-fit px-2 flex flex-col justify-center items-center">
            <p className="whitespace-nowrap text-black font-fjalla-one text-5xl">{`Soybean SEC`}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 pt-8">
        <Link
          href="#members"
          className="text-4xl font-medium font-fjalla-one text-mobai-yellow transition-all duration-300 ease-mobai-bounce"
        >
          Members
        </Link>
        <Link
          href="#links"
          className="text-2xl hover:text-4xl font-medium font-fjalla-one hover:text-mobai-yellow transition-all duration-300 ease-mobai-bounce"
        >
          Links
        </Link>
        <Link
          href="#contact"
          className="text-2xl hover:text-4xl font-medium font-fjalla-one hover:text-mobai-yellow transition-all duration-300 ease-mobai-bounce"
        >
          Contact
        </Link>
        <Link
          href="#join"
          className="text-2xl hover:text-4xl font-medium font-fjalla-one hover:text-mobai-yellow transition-all duration-300 ease-mobai-bounce"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
