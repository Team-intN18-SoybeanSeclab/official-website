import Contact from "@/sections/Contact";
import Join from "@/sections/Join";
import Links from "@/sections/Links";
import Members from "@/sections/Members";
import Sidebar from "@/components/layout/Sidebar";
import Waves from "@/components/effects/Waves";

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-full max-w-7xl mx-auto">
      <Sidebar />
      <div className="w-full overflow-y-auto overflow-x-hidden xl:border-r border-mobai-border scrollbar-hide">
        <div className="flex flex-col h-[90vh]">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 z-10 right-0 border-mobai-border border-y mt-4 px-4">
              <p className="text-6xl sm:text-7xl md:text-8xl transition-all duration-500 ease-mobai-bounce lg:text-9xl whitespace-pre-wrap font-medium md:font-normal lg:font-light text-foreground bg-mobai-yellow w-fit px-2">
                {`黄豆安全\n实验室`}
              </p>
            </div>
            <Waves
              lineColor="#e1fc30"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </div>
        </div>
        <Members />
        <Links />
        <Contact />
        <Join />
      </div>
    </div>
  );
}
