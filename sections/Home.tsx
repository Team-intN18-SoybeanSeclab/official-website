import RotatingText from "@/components/effects/RotatingText";
import TextPressure from "@/components/effects/TextPressure";
import Waves from "@/components/effects/Waves";

const HomeSection = () => {
  return (
    <div className="flex flex-col min-h-[500px] h-[50vh] sm:h-[60vh] lg:h-[90vh] border-b border-mobai-border lg:overflow-hidden">
      <div className="relative h-full">
        <div className="absolute top-0 left-0 z-10 right-0 h-full flex flex-col">
          <div className="flex flex-col gap-4">
            <div className="px-4 pt-4 sm:pt-3 md:pt-2 lg:pt-0 transition-all duration-500 ease-mobai-bounce">
              <TextPressure
                text="SoybeanSec"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#e1fc30"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
            <div className="border-mobai-border border-y w-full px-4">
              <p className="text-6xl sm:text-7xl md:text-8xl transition-all duration-500 ease-mobai-bounce lg:text-9xl whitespace-pre-wrap font-medium md:font-normal lg:font-light text-foreground bg-mobai-yellow w-fit px-2">
                {`黄豆安全\n实验室`}
              </p>
            </div>
          </div>
          <div className="px-4 border-t mt-auto sm:border-b sm:mt-4 border-mobai-border lg:mt-0 flex md:justify-end transition-all duration-500 ease-mobai-bounce lg:-rotate-12 origin-bottom-right">
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
              mainClassName="px-2 bg-[#e1fc30] lg:bg-transparent text-foreground w-fit font-fjalla-one text-3xl lg:text-9xl px-4 overflow-hidden py-2 justify-center transition-all duration-500 ease-mobai-bounce"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="pb-0.5 lg:pt-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
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
  );
};

export default HomeSection;
