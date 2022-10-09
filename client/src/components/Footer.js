import { Link } from "react-router-dom";
import styled from "styled-components";
import navlinks from "../utils/navlinks";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <p className="footer__text copy">
          &copy; copyrights Homedepot. {new Date().getFullYear()}
        </p>
        <ul className="footer__list">
          {navlinks.map((link) => {
            return (
              <li className="footer__item" key={link}>
                <Link className="footer__link" to={`/${link}`}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="footer__text">
          built by{" "}
          <a href="https://github.com/Michicko" className="footer__link built">
            {" "}
            Michky
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.footer`
  width: 100%;
  padding: 2rem 8rem;

  @media only screen and (max-width: 56.25rem) {
    padding: 2rem 4rem;
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 45rem) {
      flex-direction: column;
      text-align: center;

      & > *:not(:last-child) {
        margin-bottom: 0.6rem;
      }

      & > *:first-child {
        order: 2;
      }

      & > *:nth-child(2) {
        order: 1;
      }

      & > *:nth-child(3) {
        order: 3;
      }
    }
  }

  .footer {
    &__list {
      display: flex;
      align-items: center;
      list-style: none;

      & > *:not(:last-child) {
        margin-right: 5rem;

        @media only screen and (max-width: 56.25rem) {
          margin-right: 3rem;
        }

        @media only screen and (max-width: 45rem) {
          margin-right: 2rem;
        }
      }

      @media only screen and (max-width: 45rem) {
        text-align: center;
      }
    }

    &__text {
      color: var(--dark-color);
      font-size: 1.4rem;
      font-weight: 500;

      &.copy {
        color: rgba(60, 60, 60, 0.6);
      }
    }

    &__link {
      text-decoration: none;
      color: var(--dark-color);
      font-size: 1.5rem;
      font-weight: 500;

      &.built {
        font-size: 1.4rem;
        color: var(--secondary-color);
      }

      &:hover {
        color: var(--secondary-color);
      }
    }
  }
`;
