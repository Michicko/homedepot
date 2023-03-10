import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./RangeSlider.module.css";

// code from
// https://codesandbox.io/s/multi-range-slider-react-js-forked-4uq1uo?file=/src/component/multiRangeSlider/MultiRangeSlider.js

const RangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const updateMinValue = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
    minValRef.current = value;
  };
  const updateMaxValue = (e) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;
  };

  // expose min and max onChange
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className={styles["slider-container"]}>
      <input
        type="range"
        name="from"
        id="from"
        min={min}
        max={max}
        value={minVal}
        onChange={updateMinValue}
        className={`${styles["thumb"]} ${styles["thumb--left"]}`}
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        name="to"
        id="to"
        min={min}
        max={max}
        value={maxVal}
        onChange={updateMaxValue}
        className={`${styles["thumb"]} ${styles["thumb--right"]}`}
      />
      <div className={styles.slider}>
        <div className={styles["slider__track"]}></div>
        <div ref={range} className={styles["slider__range"]}></div>
        <div className={styles["slider__left-value"]}>${minVal}</div>
        <div className={styles["slider__right-value"]}>${maxVal}</div>
      </div>
    </div>
  );
};

export default RangeSlider;
