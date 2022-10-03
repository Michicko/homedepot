import { Link } from "react-router-dom";
import styled from "styled-components";
import navlinks from "../utils/navlinks";
import Container from "./Container";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = ({ bg, border, current }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <Nav
      className={`${bg === "primary" ? "primary" : "white"} ${
        border ? "border" : "no-border"
      }`}
    >
      <Sidebar menuOpened={menuOpened} />
      <Container>
        <nav>
          <Link className="logo" to="/">
            homedepot.
          </Link>
          <ul className="nav-list">
            {navlinks.map((item) => {
              return (
                <li className="nav-item" key={item}>
                  <Link
                    className={`${current ? "nav-link current" : "nav-link"}`}
                    to={`/${item}`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-right">
            <div className="search-box">
              <AiOutlineSearch className="nav-icon" />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
              />
            </div>
            <Link to={`/profile`} className="icon-link profile">
              <FaRegUser className="nav-icon" />
            </Link>
            <Link to={`/cart`} className="icon-link">
              <HiOutlineShoppingBag className="nav-icon" />
            </Link>
            <button className="menu-btn" onClick={toggleMenu}>
              {!menuOpened && <RiMenu3Fill className="nav-icon" />}
              {menuOpened && <AiOutlineClose className="nav-icon" />}
            </button>
          </div>
        </nav>
      </Container>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;

  &.primary {
    background: var(--primary-color);
  }

  &.white {
    background: var(--white-color);
  }

  &.border {
    border-bottom: 1px solid var(--primary-color);
  }

  &.no-border {
    border: none;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 43.75rem) {
      justify-content: flex-end;
    }

    .nav-right {
      display: flex;
      align-items: end;

      @media only screen and (max-width: 43.75rem) {
        align-items: center;
      }

      div {
        display: flex;
        align-items: end;

        .nav-icon {
          margin-right: 0.5rem;

          @media only screen and (max-width: 43.75rem) {
            margin-right: 0;
          }
        }

        input[type="search"] {
          width: 8rem;
          border: none;
          outline: none;
          background: transparent;

          @media only screen and (max-width: 43.75rem) {
            display: none;
          }

          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
          }

          &::placeholder {
            font-size: 1.4rem;
            font-weight: 500;
            color: var(--dark-color);
          }
        }
      }

      & > *:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  .logo {
    margin-right: 8rem;
    font-size: 1.6rem;
    font-weight: 800;
    text-decoration: none;
    color: var(--dark-color);

    @media only screen and (max-width: 62.5rem) {
      margin-right: 6rem;
    }

    @media only screen and (max-width: 53.5rem) {
      margin-right: 4rem;
    }

    @media only screen and (max-width: 32rem) {
      display: none;
    }
  }

  .nav-icon {
    height: 1.8rem;
    width: 1.8rem;
    color: var(--dark-color);

    @media only screen and (max-width: 43.75rem) {
      height: 2rem;
      width: 2rem;
    }
  }

  .icon-link {
    color: var(--dark-color);
  }

  .icon-link.profile {
    @media only screen and (max-width: 43.75rem) {
      display: none;
    }
  }

  .menu-btn {
    display: none;
    border: none;
    outline: none;
    background: transparent;
    .nav-icon {
      height: 2.5rem;
      width: 2.5rem;
    }

    @media only screen and (max-width: 43.75rem) {
      display: block;
    }
  }

  ul {
    list-style: none;
    margin-right: auto;
    display: flex;

    @media only screen and (max-width: 43.75rem) {
      display: none;
    }

    & > *:not(:last-child) {
      margin-right: 6rem;

      @media only screen and (max-width: 62.5rem) {
        margin-right: 4rem;
      }

      @media only screen and (max-width: 53.5rem) {
        margin-right: 2rem;
      }
    }

    .nav-link {
      font-size: var(--primary-size);
      text-decoration: none;
      color: var(--dark-color);
      font-weight: 500;
      text-transform: capitalize;

      &.current,
      &:hover,
      &:active {
        color: var(--secondary-color);
      }
    }
  }
`;
