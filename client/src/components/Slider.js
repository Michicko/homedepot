import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Product from "./Product";
import { useRef } from "react";
import { useState } from "react";

const Slider = ({ items }) => {
  const sliderRef = useRef();
  const [totalWidth, setTotalWidth] = useState(0);

  const slideItem = (direction) => {
    const outer = sliderRef.current;
    const inner = outer.firstElementChild;
    const firstSlideElement = inner.firstElementChild;
    const firstSlideElementWidth =
      firstSlideElement.getBoundingClientRect().width;
    // get amount of margin
    const firstSlideElementSpaceWidth =
      1 * window.getComputedStyle(firstSlideElement).marginRight.split("px")[0];
    const slideWidth = Math.trunc(
      firstSlideElementWidth + firstSlideElementSpaceWidth
    );
    // check boundary
    if (
      (totalWidth <= 0 && direction === "prev") ||
      (totalWidth > inner.getBoundingClientRect().width - slideWidth &&
        direction === "next")
    ) {
      return;
    }
    // check direction and add or subtract slidewidth
    direction === "prev"
      ? setTotalWidth((prev) => prev - slideWidth)
      : setTotalWidth((prev) => prev + slideWidth);
  };

  return (
    <Wrapper className="slider-container">
      <div className="ctrls">
        <IoIosArrowBack
          className="slider-icon"
          onClick={() => slideItem("prev")}
        />
        <span className="sep"> &frasl;</span>
        <IoIosArrowForward
          className="slider-icon"
          onClick={() => slideItem("next")}
        />
      </div>
      <div className="slider" ref={sliderRef}>
        <div className="slides" style={{ left: `-${totalWidth}px` }}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
  width: 100%;

  .ctrls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 2rem;
    user-select: none;

    & > *:not(:last-child) {
      margin-right: 0.2rem;
    }
  }

  .slider-icon {
    height: 1.6rem;
    width: 1.6rem;
    color: var(--dark-color);
    user-select: none;
  }

  .sep {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--primary-color);
    user-select: none;
  }

  .slider {
    position: relative;
    height: 30rem;
    width: 100%;
    overflow: hidden;
    user-select: none;
  }

  .slides {
    min-width: 200%;
    height: 30rem;
    display: flex;

    position: absolute;
    left: 0;
    transition: all 0.2s ease-in;

    & > *:not(:last-child) {
      /* margin-right: 10rem; */
      margin-right: 7.5vmax;
    }
  }

  .slide {
    width: 20rem;
    height: 30rem;
    background: var(--primary-color);
  }
`;
