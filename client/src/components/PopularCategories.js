import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";
import HeadingContainer from "./HeadingContainer";

const PopularCategories = () => {
  return (
    <Wrapper>
      <HeadingContainer>
        <Heading type="section">Popular</Heading>
      </HeadingContainer>
      <Container>
        <div className="content">here goes products categories</div>
      </Container>
    </Wrapper>
  );
};

export default PopularCategories;
const Wrapper = styled.section`
  width: 100%;
`;
