import Link from "next/link";
import React from "react";
import { containsChinese } from "@/utils/string";

const LinkBlock = ({
  name,
  href,
  description,
}: {
  name: string;
  href?: string;
  description: string;
}) => {
  const fontClass = containsChinese(name) ? "font-bold" : "font-fjalla-one";

  return (
    <Link
      href={href ?? ""}
      className="bg-mobai-yellow ease-mobai-bounce group flex flex-col gap-4 py-8 transition-all duration-500 hover:bg-transparent"
    >
      <div className="border-background ease-mobai-bounce dark:group-hover:border-mobai-yellow border-y border-r-4 border-l-8 px-1 transition-all duration-300 group-hover:px-0 dark:group-hover:px-1">
        <p
          className={`text-foreground dark:text-background ${fontClass} dark:group-hover:text-mobai-yellow text-2xl transition-all duration-300 hover:bg-transparent`}
        >
          {name}
        </p>
      </div>
      <p className="text-foreground dark:text-background dark:group-hover:text-mobai-yellow px-2 font-medium transition-all duration-300 hover:bg-transparent">
        {description}
      </p>
    </Link>
  );
};

export default LinkBlock;
