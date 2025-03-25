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
      className="bg-mobai-yellow ease-mobai-bounce group flex min-h-72 w-full flex-col gap-4 py-8 transition-all duration-500 hover:bg-transparent"
    >
      <div className="border-background dark:group-hover:border-mobai-yellow border-x-8 border-y border-r-2 transition-all duration-300 hover:bg-transparent">
        <div className="border-background relative h-20 w-20 border-r">
          <Image src={image} alt="avatar" fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2">
        <p
          className={`text-2xl ${fontClass} text-foreground dark:text-background dark:group-hover:text-mobai-yellow transition-all duration-300 hover:bg-transparent`}
        >
          {name}
        </p>
        <p className="text-foreground dark:text-background font-fjalla-one dark:group-hover:text-mobai-yellow font-medium whitespace-pre-wrap transition-all duration-300 hover:bg-transparent">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default MembarBlock;
