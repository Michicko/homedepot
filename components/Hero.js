import { useRouter } from "next/router";
import styles from "./Hero.module.css";
import { CgFormatSlash } from "react-icons/cg";
import { generateUniqueId } from "@/utils/funcs";
import React from "react";

const Hero = ({ withBg, withHeading, heading, history }) => {
  const router = useRouter();
  return (
    <header
      className={withBg ? `${styles.hero} ${styles.withBg}` : styles.hero}
    >
      {withHeading && <h2 className={styles["hero-heading"]}>{heading}</h2>}
      <div className={styles["hero-history"]}>
        {history.map((link, i) => {
          if (i === history.length - 1) {
            return (
              <React.Fragment key={generateUniqueId()}>{link}</React.Fragment>
            );
          }
          return (
            <div
              className={styles["history-link-container"]}
              key={generateUniqueId()}
            >
              {link}
              <CgFormatSlash className={styles["history-icon"]} />
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Hero;
