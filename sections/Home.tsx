import RotatingText from "@/components/effects/RotatingText";
import TextPressure from "@/components/effects/TextPressure";
import Waves from "@/components/effects/Waves";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="border-mobai-border flex h-[50vh] min-h-[500px] flex-col border-b sm:h-[60vh] lg:h-[90vh] lg:overflow-hidden"
    >
      <div className="relative h-full">
        <div className="absolute top-0 right-0 left-0 z-10 flex h-full flex-col">
          <div className="flex flex-col gap-4">
            <div className="ease-mobai-bounce px-4 pt-4 transition-all duration-500 sm:pt-3 md:pt-2 lg:pt-0">
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
            <div className="border-mobai-border w-full border-y px-4">
              <p className="ease-mobai-bounce text-foreground dark:text-background hover:text-mobai-yellow bg-mobai-yellow w-fit px-2 text-6xl font-medium whitespace-pre-wrap transition-all duration-500 hover:bg-transparent hover:px-0 hover:py-4 sm:text-7xl md:text-8xl md:font-normal lg:text-9xl lg:font-light">
                {`黄豆安全\n实验室`}
              </p>
            </div>
          </div>
          <div className="border-mobai-border ease-mobai-bounce mt-auto flex origin-bottom-right border-t px-4 transition-all duration-500 sm:mt-4 sm:border-b md:justify-end lg:mt-0 lg:-rotate-12">
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
              mainClassName="px-2 bg-mobai-yellow lg:bg-transparent text-foreground dark:text-background dark:lg:text-mobai-yellow w-fit font-fjalla-one text-3xl lg:text-9xl px-4 overflow-hidden py-2 justify-center transition-all duration-500 ease-mobai-bounce"
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
