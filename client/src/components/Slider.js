import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CgFormatSlash } from "react-icons/cg";
import Product from "./Product";

const Slider = ({ items }) => {
  return (
    <Wrapper className="slider-container">
      <div className="ctrls">
        <IoIosArrowBack className="slider-icon" />
        <span className="sep"> &frasl;</span>
        <IoIosArrowForward className="slider-icon" />
      </div>
      <div className="slider">
        <div className="slides">
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

    & > *:not(:last-child) {
      margin-right: 0.2rem;
    }
  }

  .slider-icon {
    height: 1.6rem;
    width: 1.6rem;
    color: var(--dark-color);
  }

  .sep {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--primary-color);
  }

  .slider {
    position: relative;
    height: 30rem;
    width: 100%;
    overflow: hidden;
  }

  .slides {
    min-width: 200%;
    height: 30rem;
    display: flex;

    position: absolute;
    left: 0;

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
