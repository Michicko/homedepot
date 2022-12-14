import styled from "styled-components";

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  padding-left: 12rem;
  padding-right: 12rem;

  @media only screen and (max-width: 75rem) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
  @media only screen and (max-width: 62.5rem) {
    /* padding-left: 8rem; */
    /* padding-right: 8rem; */
  }
  @media only screen and (max-width: 53.5rem) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 43.75rem) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media only screen and (max-width: 32rem) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
