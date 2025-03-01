import Crosshair from "@/components/effects/Crosshair";
import RotatingText from "@/components/effects/RotatingText";
import Waves from "@/components/effects/Waves";
import Brand from "@/components/ui/Brand";
import { useRef } from "react";

const DesktopLayout = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  return (
    <>
      <Crosshair containerRef={containerRef} color="#ffffff" />
      <div className="flex flex-col h-screen w-full">
        <div className="h-screen w-full flex flex-col pt-24 gap-4 bg-[#138352]">
          <div className="h-full relative">
            <Waves
              lineColor="#fff"
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
          <div className="mt-auto">
            <Brand />
          </div>
          <div className="font-bold text-4xl flex flex-row gap-4 items-start justify-between px-8">
            <div>
              <RotatingText
                texts={[
                  "Web",
                  "MISC",
                  "Crypto",
                  "Reverse",
                  "Android",
                  "PWN",
                  "ICS",
                  "IOT",
                  "Blockchain",
                  "AI",
                ]}
                mainClassName="px-2 bg-[#F8D440] text-background overflow-hidden py-2 justify-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <p className="text-xl font-normal">
              + 黄豆安全实验室 Artist-MOBAI +
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopLayout;
