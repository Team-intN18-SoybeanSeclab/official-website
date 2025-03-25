import Contact from "@/sections/Contact";
import Crosshair from "@/components/effects/Crosshair";
import HomeSection from "@/sections/Home";
import Join from "@/sections/Join";
import Links from "@/sections/Links";
import Members from "@/sections/Members";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <>
      <Crosshair />
      <div className="mx-auto flex h-screen w-full max-w-7xl flex-row">
        <Sidebar />
        <div className="border-mobai-border scrollbar-hide w-full overflow-x-hidden overflow-y-auto xl:border-r">
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
