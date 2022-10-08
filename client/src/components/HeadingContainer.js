import styled from "styled-components";

const HeadingContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeadingContainer;
const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  padding-left: 10rem;
  padding-right: 16rem;

  @media only screen and (max-width: 75rem) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media only screen and (max-width: 62.5rem) {
    /* padding-left: 6rem;
    padding-right: 6rem; */
  }
  @media only screen and (max-width: 53.5rem) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media only screen and (max-width: 43.75rem) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 32rem) {
    padding-left: 1rem;
    padding-right: 2rem;
  }
`;
