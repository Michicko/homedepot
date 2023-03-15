import { BiPlus, BiMinus } from "react-icons/bi";
import styles from "./Counter.module.css";

const Counter = () => {
  return (
    <div className={styles.counter}>
      <BiMinus className={`${styles["counter-btn"]} ${styles.dec}`} />
      <input
        type="number"
        name="count"
        id="count"
        className={styles["counter-count"]}
        // value={1}
      />
      <BiPlus className={`${styles["counter-btn"]} ${styles.inc}`} />
    </div>
  );
};

export default Counter;
