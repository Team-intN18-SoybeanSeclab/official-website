import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col gap-2 p-4 py-8">
      <Link
        href="#members"
        className="font-fjalla-one transition-all duration-300 ease-mobai-bounce hover:[text-shadow:1px_1px_#D90000] text-foreground text-2xl hover:text-4xl hover:text-background"
      >
        Members
      </Link>
      <Link
        href="#links"
        className="font-fjalla-one transition-all duration-300 ease-mobai-bounce hover:[text-shadow:1px_1px_#15DD4B] text-foreground text-2xl hover:text-4xl hover:text-background"
      >
        Links
      </Link>
      <Link
        href="#contact"
        className="font-fjalla-one transition-all duration-300 ease-mobai-bounce hover:[text-shadow:1px_1px_#3C00FF] text-foreground text-2xl hover:text-4xl hover:text-background"
      >
        Contact
      </Link>
      <Link
        href="#join"
        className="font-fjalla-one transition-all duration-300 ease-mobai-bounce hover:[text-shadow:1px_1px_#15DD4B] text-foreground text-2xl hover:text-4xl hover:text-background"
      >
        Join
      </Link>
    </div>
  );
};

export default Nav;
