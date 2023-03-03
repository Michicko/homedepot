import Link from "next/link";
import styles from "./Footer.module.css";
import { GrFacebookOption } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer-copy"]}>
        &copy; copyrights Homedepot {new Date().getFullYear()}
      </p>
      <div className={styles["footer-links"]}>
        <Link href={"/shop"} className={styles["footer-link"]}>
          products
        </Link>
        <Link href={"/shop"} className={styles["footer-link"]}>
          popular
        </Link>
        <Link href={"/sale"} className={styles["footer-link"]}>
          sale
        </Link>
        <Link href={"/about"} className={styles["footer-link"]}>
          about
        </Link>
        <Link href={"/contact"} className={styles["footer-link"]}>
          contact
        </Link>
      </div>
      <div className={styles["footer-socials"]}>
        <button className={`${styles["footer-btn"]} ${styles.face}`}>
          <GrFacebookOption className={styles["footer-icon"]} />
        </button>
        <button className={`${styles["footer-btn"]} ${styles.linkd}`}>
          <TfiLinkedin className={styles["footer-icon"]} />
        </button>
        <button className={`${styles["footer-btn"]} ${styles.tele}`}>
          <FaTelegramPlane className={styles["footer-icon"]} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
