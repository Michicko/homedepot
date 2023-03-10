import Link from "next/link";
import styles from "./Hero.module.css";

const HeroHistoryLink = ({ link, text, current }) => {
  return (
    <Link
      href={link}
      className={
        current
          ? `${styles["history-link"]} ${styles.active}`
          : `${styles["history-link"]}`
      }
    >
      {text}
    </Link>
  );
};

export default HeroHistoryLink;
