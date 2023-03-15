import Hero from "@/components/Hero";
import HeroHistoryLink from "@/components/HeroHistoryLink";
import styles from "../../styles/ProductPage.module.css";
import { products } from "@/utils/data";
import ImageSlider from "@/components/ImageSlider";
import { useState } from "react";
import Counter from "@/components/Counter";
import Link from "next/link";
import Slider from "@/components/Slider";
import MobileHero from "@/components/MobileHero";
import CustomSelect from "@/components/CustomSelect";
import Colors from "@/components/Colors";

const ProductPage = () => {
  const product = products[0];
  const { slug, name, productOptions, brand, size, price, stock, category } =
    product;
  const [currentOption, setCurrentOption] = useState(product.productOptions[0]);
  const currentColor = currentOption.color;
  const images = productOptions.map((option) => {
    return {
      id: option.id,
      imageLink: option.image,
    };
  });
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const showMoreProductInfo = () => {
    setShowMoreInfo(true);
  };
  const showLessProductInfo = () => {
    setShowMoreInfo(false);
  };

  return (
    <>
      <Hero
        withBg={false}
        withHeading={false}
        history={[
          <HeroHistoryLink link={"/shop"} text={"Shop"} />,
          <HeroHistoryLink link={"/shop"} text={"All products"} />,
          <HeroHistoryLink
            link={`/shop/${slug}`}
            text={name.slice(0, 1).toUpperCase() + name.slice(1)}
            current={true}
          />,
        ]}
      />
      <MobileHero
        headingLg={name.slice(0, 1).toUpperCase() + name.slice(1)}
        headingSm={brand.slice(0, 1).toUpperCase() + brand.slice(1)}
        selector={
          <CustomSelect
            name={"Colors"}
            withSmHeading={true}
            options={
              <>
                <h3 className={"filter-heading mgb-2"}>COLORS</h3>
                <Colors />
              </>
            }
          />
        }
      />
      <section className={`${styles["product-page"]} row`}>
        <div className={styles["product-img-section"]}>
          <ImageSlider images={images} />
        </div>
        <div className={styles["product-info-section"]}>
          <h3 className={styles["product-name"]}>
            {name.slice(0, 1).toUpperCase() + name.slice(1)}, {currentColor}
          </h3>
          <p className={styles["product-brand"]}>
            {brand.slice(0, 1).toUpperCase() + brand.slice(1)}
          </p>
          <h4 className={styles["product-price"]}>${price}</h4>
          <div
            className={
              showMoreInfo
                ? `${styles["product-desc-box"]} ${styles.show}`
                : styles["product-desc-box"]
            }
          >
            <div className={styles["product-size-box"]}>
              {Object.entries(size).map((item) => {
                return (
                  <p>
                    <span>{item[0].slice(0, 1).toUpperCase()}</span> -{" "}
                    <span>{item[1]}</span>
                  </p>
                );
              })}
            </div>
            <p className={styles["product-desc"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              culpa eius dicta eaque perferendis ipsam assumenda odit ducimus
              suscipit quas. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed, earum similique fuga minima obcaecati delectus ab. Ut
              iure dolores id.
            </p>
          </div>
          <div className={styles["product-counter-box"]}>
            <p>Qty</p>
            <Counter />
          </div>
          <Link
            className={`${styles["product-cart-btn"]} btn primary-btn lg`}
            href={"/cart"}
          >
            Add to cart
          </Link>
          <button
            className={`${styles["product-wishlist-btn"]} btn outline dark-txt lg`}
          >
            Add to wishlist
          </button>
          {showMoreInfo ? (
            <button
              className={styles["more-info-btn"]}
              onClick={showLessProductInfo}
            >
              See less information
            </button>
          ) : (
            <button
              className={styles["more-info-btn"]}
              onClick={showMoreProductInfo}
            >
              See more information
            </button>
          )}
        </div>
      </section>
      {/* recommended products */}
      <section className={`${styles["recommended"]} row`}>
        <h2 className="secondary-heading center-txt mgb-2">
          Recommended products
        </h2>
        <div className={styles["recommended-products"]}>
          <Slider products={products} />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
