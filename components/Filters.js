import { generateUniqueId } from "@/utils/funcs";
import { useState } from "react";
import styles from "./Filters.module.css";

const Filters = ({ name, filters }) => {
  const [current, setCurrent] = useState("all");
  return (
    <div className={styles.filters}>
      {["all", ...filters].map((filter) => {
        return (
          <div
            className={
              filter === current
                ? `${styles.filter} ${styles.active}`
                : `${styles.filter}`
            }
          >
            <button key={generateUniqueId()} className={styles["filter-btn"]}>
              {filter}
            </button>
            <span className={styles["filter-total"]}>2</span>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
