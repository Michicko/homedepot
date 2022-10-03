import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import navlinks from "../utils/navlinks";

const Sidebar = ({ current, menuOpened }) => {
  return (
    <Wrapper className={`${menuOpened ? "open" : ""}`}>
      <div className="box">
        <Link to="/profile" className="profile-link">
          {/* <FaRegUser className="icon" /> */}
          profile
        </Link>
        <ul className="sidebar-list">
          {navlinks.map((item) => {
            return (
              <li className="sidebar-item" key={item}>
                <Link
                  className={`${
                    current ? "sidebar-link current" : "sidebar-link"
                  }`}
                  to={`/${item}`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 2rem;
  left: 0;
  background: #e2e2e2;
  background: #fff;
  z-index: 400;
  width: 0;
  overflow: hidden;
  transition: width 0.4s ease;

  &.open {
    @media only screen and (max-width: 43.75rem) {
      border-left: 2px solid var(--secondary-color);
      width: 80%;
      overflow: unset;
    }
  }

  .sidebar-icon-link {
    display: block;
    color: var(--dark-color);
    padding: 1rem;
  }

  .box {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 600;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
  }

  .sidebar-list {
    display: flex;
    flex-direction: column;
    width: 100%;

    & > * {
      width: 100%;
      display: block;
      padding: 1rem;
      /* border-bottom: 1px solid var(--primary-color); */
    }
  }

  .sidebar-link,
  .profile-link {
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

  .profile-link {
    padding: 1rem;
    /* border-bottom: 1px solid var(--primary-color); */
  }

  .icon {
    height: 1.5rem;
    width: 1.5rem;
    color: var(--dark-color);
  }
`;
