import { useEffect, useRef } from "react";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onPriceChange: (minPrice: number, maxPrice: number) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  onPriceChange,
}) => {
  const { range } = useSelector((state: RootState) => state.filter);
  const sliderRef = useRef<any | null>(null);

  useEffect(() => {
    const actualMin = min === max ? min - 1 : min;
    const actualMax = min === max ? max + 1 : max;

    if (sliderRef.current && !sliderRef.current.noUiSlider) {
      const slider = sliderRef.current;

      noUiSlider.create(slider, {
        start: [range.min, range.max],
        connect: true,
        range: {
          min: actualMin,
          max: actualMax,
        },
        format: {
          to: (value: number) => Math.round(value).toString(),
          from: (value: string) => parseInt(value, 10),
        },
      });

      slider.noUiSlider.on("update", (values: (number | string)[]) => {
        const minInputElement = document.getElementById(
          "minInput"
        ) as HTMLInputElement | null;
        const maxInputElement = document.getElementById(
          "maxInput"
        ) as HTMLInputElement | null;

        if (minInputElement && maxInputElement) {
          minInputElement.value = Math.round(
            parseFloat(values[0] as string)
          ).toString();
          maxInputElement.value = Math.round(
            parseFloat(values[1] as string)
          ).toString();
        }
      });

      slider.noUiSlider.on("change", (values: (number | string)[]) => {
        const minValue = parseInt(values[0] as string, 10);
        const maxValue = parseInt(values[1] as string, 10);
        if (minValue <= maxValue) {
          onPriceChange(minValue, maxValue);
        }
      });

      return () => {
        slider.noUiSlider.destroy();
      };
    }
  }, [max, min, range, onPriceChange]);

  useEffect(() => {
    const actualMin = min === max ? min - 1 : min;
    const actualMax = min === max ? max + 1 : max;

    if (sliderRef.current && sliderRef.current.noUiSlider) {
      const slider = sliderRef.current.noUiSlider;

      slider.updateOptions({
        start: [range.min, range.max],
        range: {
          min: actualMin,
          max: actualMax,
        },
      });
    }
  }, [min, max, range]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    handle: number
  ) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && sliderRef.current && sliderRef.current.noUiSlider) {
      const values = sliderRef.current.noUiSlider.get() as string[];
      values[handle] = Math.min(Math.max(value, min), max).toString();
      sliderRef.current.noUiSlider.set(values);
    }
  };

  return (
    <>
      <div
        style={{ marginBottom: "20px", padding: "0 5px" }}
        className="gi-price-filter"
      >
        <div className="gi-price-input">
          <label className="filter__label">
            From
            <input
              id="minInput"
              defaultValue={min?.toString()}
              type="text"
              className="filter__input"
              onChange={(e) => handleInputChange(e, 0)}
            />
          </label>
          <span className="gi-price-divider"></span>
          <label className="filter__label">
            To
            <input
              id="maxInput"
              defaultValue={max?.toString()}
              type="text"
              className="filter__input"
              onChange={(e) => handleInputChange(e, 1)}
            />
          </label>
        </div>
        <div
          ref={sliderRef}
          id="gi-sliderPrice"
          className="filter__slider-price"
          data-min="0"
          data-max="250"
          data-step="10"
        ></div>
      </div>
    </>
  );
};

export default PriceRangeSlider;
