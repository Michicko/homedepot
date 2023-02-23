import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { navlinks } from "@/utils/links";
import { generateUniqueId } from "@/utils/funcs";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const { route } = useRouter();
  const [isSearchOpened, setIsSearchOpened] = useState(false);

  const toggleSearchInput = () => {
    setIsSearchOpened(!isSearchOpened);
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
      <div className={styles["nav-web-view"]}>
        <Link href="/" className={`${styles["nav-logo"]} ${styles.web}`}>
          homedepot.
        </Link>
        <div className={styles["navlinks"]}>
          {navlinks.map((navlink) => {
            return (
              <Link
                href={`/${navlink}`}
                className={styles.navlink}
                key={generateUniqueId()}
              >
                {navlink}
              </Link>
            );
          })}
        </div>
        <div className={`${styles["nav-input-box"]} ${styles.rhs}`}>
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
        <CgMenuRightAlt className={`${styles["nav-icon"]} ${styles["menu"]}`} />
      </div>
    </nav>
  );
};

export default Navbar;
