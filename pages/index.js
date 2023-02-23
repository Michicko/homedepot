import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["header__img-section"]}>
          <h3 className={styles["header-logo"]}>homedepot.</h3>
        </div>
        <div className={styles["header__text-section"]}>
          <h1 className="primary-heading">New interior collection</h1>
          <p className="lead">
            <span>A competent interior design will squeeze a rich</span>
            <span>inner world into even the most limited room size</span>
          </p>
          <Link href="/shop" className="btn primary-btn">
            Shop
          </Link>
        </div>
      </header>
      <main></main>
    </>
  );
}
