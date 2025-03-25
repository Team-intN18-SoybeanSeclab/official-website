import Link from "next/link";
import React from "react";
import { containsChinese } from "@/utils/string";

const JoinBlock = ({
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
      className="flex flex-col gap-4 bg-mobai-yellow py-8 hover:bg-transparent transition-all duration-500 ease-mobai-bounce group"
    >
      <div className="border-l-8 border-y border-r-4 border-background px-1 group-hover:px-0 transition-all duration-300 ease-mobai-bounce">
        <p
          className={`text-foreground dark:text-background ${fontClass} text-2xl`}
        >
          {name}
        </p>
      </div>
      <p className="text-foreground px-2 dark:text-background font-fjalla-one font-medium">
        {description}
      </p>
    </Link>
  );
};

export default JoinBlock;
