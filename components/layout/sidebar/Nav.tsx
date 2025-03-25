import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col gap-2 p-4 py-8">
      <Link
        href="#members"
        className="font-fjalla-one ease-mobai-bounce text-foreground hover:text-background text-2xl transition-all duration-300 hover:text-4xl hover:[text-shadow:1px_1px_#D90000]"
      >
        Members
      </Link>
      <Link
        href="#links"
        className="font-fjalla-one ease-mobai-bounce text-foreground hover:text-background text-2xl transition-all duration-300 hover:text-4xl hover:[text-shadow:1px_1px_#15DD4B]"
      >
        Links
      </Link>
      <Link
        href="#contact"
        className="font-fjalla-one ease-mobai-bounce text-foreground hover:text-background text-2xl transition-all duration-300 hover:text-4xl hover:[text-shadow:1px_1px_#3C00FF]"
      >
        Contact
      </Link>
      <Link
        href="#join"
        className="font-fjalla-one ease-mobai-bounce text-foreground hover:text-background text-2xl transition-all duration-300 hover:text-4xl hover:[text-shadow:1px_1px_#15DD4B]"
      >
        Join
      </Link>
    </div>
  );
};

export default Nav;
