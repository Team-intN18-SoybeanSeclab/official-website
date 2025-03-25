import Image from "next/image";
import Link from "next/link";
import React from "react";
import { containsChinese } from "@/utils/string";

const MembarBlock = ({
  name,
  description,
  image,
  href,
}: {
  name: string;
  description: string;
  image: string;
  href?: string;
}) => {
  const fontClass = containsChinese(name) ? "font-bold" : "font-fjalla-one";

  return (
    <Link
      href={href ?? ""}
      className="bg-mobai-yellow py-8 w-full min-h-72 flex flex-col gap-4 hover:bg-transparent transition-all duration-500 ease-mobai-bounce"
    >
      <div className="border-y border-background border-x-8 border-r-2">
        <div className="relative w-20 h-20 border-r border-background">
          <Image src={image} alt="avatar" fill className="object-cover" />
        </div>
      </div>
      <div className="px-2 flex flex-col gap-1">
        <p
          className={`text-2xl ${fontClass} text-foreground dark:text-background`}
        >
          {name}
        </p>
        <p className="text-foreground dark:text-background font-medium font-fjalla-one whitespace-pre-wrap">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default MembarBlock;
