import styles from "./Section.module.css";
import { BsDash } from "react-icons/bs";

const Section = ({ children, heading }) => {
  return (
    <section className={styles.section}>
      <div className={styles["section-container"]}>
        <h3 className={styles["section-heading"]}>
          <BsDash className={styles["section-heading-icon"]} />
          {heading}
        </h3>
        <div className={styles["section-content"]}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
