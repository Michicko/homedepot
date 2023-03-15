import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { navlinks } from "@/utils/links";
import { generateUniqueId } from "@/utils/funcs";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { route } = useRouter();
  const router = useRouter();
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // hide overflow when sidebar is opened
  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      if (isSidebarOpened) {
        document.querySelector("html").style.overflow = "hidden";
      } else {
        document.querySelector("html").style.overflow = "unset";
      }
    }

    return () => {
      setIsMounted(false);
    };
  }, [isSidebarOpened]);

  // on resize close sidebr if opened
  useEffect(() => {
    const closeSidebarOnResize = () => {
      if (window.innerWidth >= 768 && isSidebarOpened) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", closeSidebarOnResize);

    return () => {
      window.removeEventListener("resize", closeSidebarOnResize);
    };
  });

  // when route changes closesidebar
  useEffect(() => {
    if (isSidebarOpened) {
      closeSidebar();
    }
  }, [route]);

  // toggle search input
  const toggleSearchInput = () => {
    setIsSearchOpened(!isSearchOpened);
    if (isSidebarOpened) {
      closeSidebar();
    }
  };

  // open sidebar on  mobile view
  const openSidebar = () => {
    setIsSidebarOpened(true);
  };

  // close sidebar on  mobile view
  const closeSidebar = () => {
    setIsSidebarOpened(false);
  };

  return (
    <nav
      className={
        route === "/"
          ? `${styles.nav} ${styles.normal}`
          : `${styles.nav} ${styles.white}`
      }
    >
      {/* web view nav */}
      <div className={`${styles["nav-web-view"]} row`}>
        <Link href="/" className={`${styles["nav-logo"]} ${styles.web}`}>
          homedepot.
        </Link>
        <div className={styles["navlinks"]}>
          {navlinks.map((navlink) => {
            return (
              <Link
                href={`/${navlink}`}
                className={
                  route === `/${navlink}`
                    ? `${styles.navlink} ${styles.active}`
                    : `${styles.navlink}`
                }
                key={generateUniqueId()}
              >
                {navlink}
              </Link>
            );
          })}
        </div>

        <div className={styles["nav-rhs"]}>
          <div className={`${styles["nav-input-box"]}`}>
            <BsSearch
              className={`${styles["nav-icon"]} ${styles["search-icon"]}`}
              onClick={toggleSearchInput}
            />
            <input
              type="text"
              name="search"
              id="search"
              className={
                isSearchOpened
                  ? `${styles["nav-input"]} ${styles.show}`
                  : `${styles["nav-input"]}`
              }
              placeholder="Search..."
            />
          </div>
          <Link href="/profile">
            <FaRegUser className={`${styles["nav-icon"]} ${styles.rhs}`} />
          </Link>
          <Link href="/cart">
            <BsHandbag className={`${styles["nav-icon"]} ${styles.rhs}`} />
          </Link>
        </div>
      </div>

      {/* mobile view logo */}
      {route === "/" ? null : (
        <Link className={`${styles["nav-logo"]} ${styles.mobile}`} href="/">
          hd.
        </Link>
      )}

      {/* mobile view nav */}
      <div className={styles["nav-mobile-view"]}>
        <div className={styles["nav-input-box"]}>
          <BsSearch
            className={`${styles["nav-icon"]} ${styles["search-icon"]}`}
            onClick={toggleSearchInput}
          />
          <input
            type="text"
            name="search"
            id="search"
            className={
              isSearchOpened
                ? `${styles["nav-input"]} ${styles.show}`
                : `${styles["nav-input"]}`
            }
            placeholder="Search..."
          />
        </div>
        <Link href="/cart">
          <BsHandbag className={styles["nav-icon"]} />
        </Link>
        {isSidebarOpened ? (
          <CgClose
            className={`${styles["nav-icon"]} ${styles["menu"]}`}
            onClick={closeSidebar}
          />
        ) : (
          <CgMenuRightAlt
            className={`${styles["nav-icon"]} ${styles["menu"]}`}
            onClick={openSidebar}
          />
        )}
      </div>

      {/* sidebar for mobile view */}
      <Sidebar isSidebarOpened={isSidebarOpened} />
    </nav>
  );
};

export default Navbar;
