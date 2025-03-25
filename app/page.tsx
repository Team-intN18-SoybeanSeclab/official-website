import Contact from "@/sections/Contact";
import HomeSection from "@/sections/Home";
import Join from "@/sections/Join";
import Links from "@/sections/Links";
import Members from "@/sections/Members";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
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
  );
}
