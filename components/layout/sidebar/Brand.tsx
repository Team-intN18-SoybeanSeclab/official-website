import Link from "next/link";
import React from "react";

const Brand = () => {
  return (
    <div className="px-4 border-y border-mobai-border">
      <Link
        href="/"
        className="bg-mobai-yellow w-fit px-2 flex flex-col justify-center items-center"
      >
        <p className="whitespace-nowrap text-black font-fjalla-one text-5xl">{`Soybean SEC`}</p>
      </Link>
    </div>
  );
};

export default Brand;
