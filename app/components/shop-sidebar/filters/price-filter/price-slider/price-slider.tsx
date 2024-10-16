import { CustomSlider } from "./styled";

type PriceSliderProps = {
  min: number;
  max: number;
  setPriceValue: (values: number[]) => void;
  priceValue: number[];
};

const PriceSlider = ({
  min,
  max,
  priceValue,
  setPriceValue,
}: PriceSliderProps) => {
  const minDistance = 5;

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceValue([
        Math.min(newValue[0], priceValue[1] - minDistance),
        priceValue[1],
      ]);
    } else {
      setPriceValue([
        priceValue[0],
        Math.max(newValue[1], priceValue[0] + minDistance),
      ]);
    }
  };

  return (
    <div className="py-2 px-1">
      <CustomSlider
        className="w-full"
        value={priceValue}
        onChange={handleChange}
        valueLabelDisplay="off"
        disableSwap
        min={min}
        max={max}
      />
    </div>
  );
};

export default PriceSlider;
