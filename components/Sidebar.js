import styles from "./Sidebar.module.css";
import { navlinks } from "@/utils/links";
import Link from "next/link";
import { useRouter } from "next/router";
import { generateUniqueId } from "@/utils/funcs";

const Sidebar = ({ isSidebarOpened }) => {
  const { route } = useRouter();
  return (
    <aside
      className={
        isSidebarOpened
          ? `${styles.sidebar} ${styles.open}`
          : `${styles.sidebar}`
      }
    >
      <div className={styles["sidebar-container"]}>
        <Link href="/" className={styles["sidebar-logo"]}>
          hd.
        </Link>
        <div className={styles["sidebar-links"]}>
          {navlinks.map((navlink) => {
            return (
              <Link
                href={`/${navlink}`}
                className={
                  route === `/${navlink}`
                    ? `${styles["sidebar-link"]} ${styles.active}`
                    : `${styles["sidebar-link"]}`
                }
                key={generateUniqueId()}
              >
                {navlink}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
