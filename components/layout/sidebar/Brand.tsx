import Link from "next/link";
import React from "react";

const Brand = () => {
  return (
    <div className="border-mobai-border border-y px-4">
      <Link
        href="#home"
        className="bg-mobai-yellow flex w-fit flex-col items-center justify-center px-2"
      >
        <p className="font-fjalla-one text-5xl whitespace-nowrap text-black">{`Soybean SEC`}</p>
      </Link>
    </div>
  );
};

export default Brand;
