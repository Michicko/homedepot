import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";
import HeadingContainer from "./HeadingContainer";
import Slider from "./Slider";

const Discount = ({ products }) => {
  return (
    <Wrapper>
      <HeadingContainer>
        <Heading type="section">Sale off</Heading>
      </HeadingContainer>
      <Container>
        <Slider products={products} />
      </Container>
    </Wrapper>
  );
};

export default Discount;
const Wrapper = styled.section`
  width: 100%;
  min-height: 40rem;
`;
