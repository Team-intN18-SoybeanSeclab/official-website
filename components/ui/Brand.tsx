import TextPressure from "../effects/TextPressure";

const Brand = () => {
  return (
    <div>
      <TextPressure
        text="SoybeanSec"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
};

export default Brand;
