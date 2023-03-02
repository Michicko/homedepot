import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Section from "@/components/Section";
import { categories, products } from "@/utils/data";
import Slider from "@/components/Slider";
import Image from "next/image";
import { generateUniqueId } from "@/utils/funcs";
import articles from "@/utils/articles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Home() {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const article = articles[currentArticleIndex];

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
      <main>
        {/* products section */}
        <Section heading={"Sale off"}>
          <Slider products={products} />
        </Section>
        {/* Category section */}
        <Section heading={"Popular"}>
          <div className={styles.categories}>
            {categories.map((category) => {
              return (
                <Link
                  href={`/shop?category=${category}`}
                  key={generateUniqueId()}
                  className={`${styles.category} ${styles[category]}`}
                >
                  <Image
                    src={require(`../public/${category}.jpg`)}
                    alt={`${category} category`}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    className={styles["category-img"]}
                  />
                  <h4 className={styles["category-name"]}>{category}</h4>
                </Link>
              );
            })}
          </div>
        </Section>
        {/* Articles */}
        <Section heading={"Interior Styles"}>
          <div className={styles["articles-box"]}>
            <div className={styles["article-img-box"]}>
              <Image
                src={require(`../public/${article.image}`)}
                alt={`${article.design}`}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className={styles["article-img"]}
              />
            </div>
            <div className={styles["article-text-box"]}>
              <h3 className={styles["article-title"]}>{article.design}</h3>
              <div className={styles["article-texts"]}>
                {article.text
                  .split("\n")
                  .splice(0, 2)
                  .map((text) => {
                    return <p className={styles["article-text"]}>{text}</p>;
                  })}
              </div>
              <Link
                href={`/articles/${article.slug}`}
                className={styles["article-link"]}
              >
                more details
              </Link>
              <div className={styles["articles-ctrls"]}>
                <IoIosArrowBack className={styles["article-btn"]} />
                <div className={styles["pagination"]}>
                  <span className={styles["currentIndex"]}>1</span>
                  <sup className={styles["article-total"]}>/6</sup>
                </div>
                <IoIosArrowForward className={styles["article-btn"]} />
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
