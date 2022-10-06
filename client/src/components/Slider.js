import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CgFormatSlash } from "react-icons/cg";

const Slider = ({ items }) => {
  console.log(items);
  return (
    <Wrapper className="slider-container">
      <div className="ctrls">
        <IoIosArrowBack className="slider-icon" />
        <span className="sep"> &frasl;</span>
        <IoIosArrowForward className="slider-icon" />
      </div>
      <div className="slider"></div>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
  width: 100%;
  height: 45rem;

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
  }
`;
