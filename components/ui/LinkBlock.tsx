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
      className="flex flex-col gap-4 bg-mobai-yellow py-8"
    >
      <div className="border-l-8 border-y hover:border-y-2 border-r-4 border-background px-1">
        <p
          className={`text-foreground dark:text-background ${fontClass} text-2xl`}
        >
          {name}
        </p>
      </div>
      <p className="text-foreground px-2 dark:text-background font-medium">
        {description}
      </p>
    </Link>
  );
};

export default LinkBlock;
