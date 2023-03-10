import { generateUniqueId } from "@/utils/funcs";
import { useState } from "react";
import styles from "./Filters.module.css";

const Filters = ({ name, filters, noTotal, flexed }) => {
  const [current, setCurrent] = useState("all");
  return (
    <div className={`${styles.filters} ${flexed ? styles.flex : null}`}>
      {["all", ...filters].map((filter) => {
        return (
          <div
            className={
              filter === current && filter !== "all"
                ? `${styles.filter} ${styles.active} ${styles["not-all"]}`
                : filter === current && filter === "all"
                ? `${styles.filter} ${styles.active}`
                : `${styles.filter}`
            }
          >
            <button key={generateUniqueId()} className={styles["filter-btn"]}>
              {filter}
            </button>
            {!noTotal && <span className={styles["filter-total"]}>2</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
