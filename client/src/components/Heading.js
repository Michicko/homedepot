import styled from "styled-components";

const Heading = ({ children, type }) => {
  return (
    <>{type === "primary" && <PrimaryHeading>{children}</PrimaryHeading>}</>
  );
};

export default Heading;

const PrimaryHeading = styled.h1`
  font-size: 3.85vmax;
  font-weight: 600;
  color: var(--dark-color);
`;
