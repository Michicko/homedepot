import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ children, type, size, path }) => {
  return (
    <>
      {type === "link" && (
        <ButtonWrapper
          className={size === "lg" ? "lg" : size === "md" ? "md" : "sm"}
          to={path}
        >
          {children}
        </ButtonWrapper>
      )}
      {type === "button" && (
        <button className={size === "lg" ? "lg" : size === "md" ? "md" : "sm"}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

const ButtonWrapper = styled(Link)`
  min-width: 12rem;
  height: 5rem;
  background: var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--white-color);

  &.lg {
    min-width: 20rem;

    @media only screen and (max-width: 43.75rem) {
      margin: 0 auto;
      min-width: 85%;
      height: 4rem;
    }
  }
`;
