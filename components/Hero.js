import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Hero.module.css";
import { CgFormatSlash } from "react-icons/cg";

const Hero = ({ withBg, withHeading, heading, history }) => {
  const router = useRouter();
  console.log(router);
  return (
    <header
      className={withBg ? `${styles.hero} ${styles.withBg}` : styles.hero}
    >
      {withHeading && <h2 className={styles["hero-heading"]}>{heading}</h2>}
      <div className={styles["hero-history"]}>
        {history.map((item, i) => {
          if (i === history.length - 1)
            return (
              <Link
                href={`/${item === "all products" ? "shop" : item}`}
                className={`${styles["history-link"]} ${styles.active}`}
              >
                {item}
              </Link>
            );
          return (
            <div className={styles["history-link-container"]}>
              <Link
                href={`/${item === "all products" ? "shop" : item}`}
                className={styles["history-link"]}
              >
                {item}
              </Link>
              <CgFormatSlash className={styles["history-icon"]} />
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Hero;
