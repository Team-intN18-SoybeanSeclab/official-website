"use client";

import Contact from "@/sections/Contact";
import Crosshair from "@/components/effects/Crosshair";
import HomeSection from "@/sections/Home";
import Join from "@/sections/Join";
import Links from "@/sections/Links";
import Members from "@/sections/Members";
import Sidebar from "@/components/layout/Sidebar";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        ref={containerRef}
        className="h-screen w-full fixed top-0 left-0 z-20 pointer-events-none hidden sm:block"
      >
        <Crosshair
          containerRef={containerRef as React.RefObject<HTMLElement>}
          color="#e1fc30"
        />
      </div>
      <div className="flex flex-row h-screen w-full max-w-7xl mx-auto">
        <Sidebar />
        <div className="w-full overflow-y-auto overflow-x-hidden xl:border-r border-mobai-border scrollbar-hide">
          <HomeSection />
          <Members />
          <Links />
          <Contact />
          <Join />
        </div>
      </div>
    </>
  );
}
