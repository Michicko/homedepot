import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ children, type, size, path }) => {
  console.log(styles);
  return (
    <>
      {type === "link" && (
        <Link
          to={path}
          className={
            size === "lg"
              ? `${styles.btn} ${styles.lg}`
              : size === "md"
              ? `${styles.btn} ${styles.md}`
              : `${styles.btn} ${styles.sm}`
          }
        >
          {children}
        </Link>
      )}
      {type === "button" && (
        <button
          type="button"
          className={
            size === "lg"
              ? `${styles.btn} ${styles.lg}`
              : size === "md"
              ? `${styles.btn} ${styles.md}`
              : `${styles.btn} ${styles.sm}`
          }
        >
          {children}
        </button>
      )}
      {type === "input" && (
        <input
          type="submit"
          value={children}
          className={
            size === "lg"
              ? `${styles.btn} ${styles.lg}`
              : size === "md"
              ? `${styles.btn} ${styles.md}`
              : `${styles.btn} ${styles.sm}`
          }
        />
      )}
    </>
  );
};

export default Button;
