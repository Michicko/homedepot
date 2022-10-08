import styled from "styled-components";

const Heading = ({ children, type }) => {
  return (
    <>
      {type === "primary" && <PrimaryHeading>{children}</PrimaryHeading>}
      {type === "section" && <SectionHeading>{children}</SectionHeading>}
    </>
  );
};

export default Heading;

const PrimaryHeading = styled.h1`
  font-size: 3.85vmax;
  font-weight: 600;
  color: var(--dark-color);
`;

const SectionHeading = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--dark-color);
  display: flex;
  margin-bottom: 2rem;

  @media only screen and (max-width: 32rem) {
    font-size: 1.6rem;
  }

  &::before {
    display: block;
    content: "-";
    margin-right: 1rem;
  }
`;
