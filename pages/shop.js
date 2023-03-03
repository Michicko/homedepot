import Filters from "@/components/Filters";
import Hero from "@/components/Hero";
import styles from "../styles/Shop.module.css";
import { categories, products } from "@/utils/data";
import Sort from "@/components/Sort";
import View from "@/components/View";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
import { generateUniqueId } from "@/utils/funcs";

const Shop = () => {
  const materials = ["wood", "metal", "leather", "plastic", "fabric"];
  const brands = [
    "cosmo",
    "kenneth cobonpue",
    "la forma",
    "lazy life paris",
    "like lodka",
    "roomers",
    "seletti",
  ];
  return (
    <>
      <Hero
        withBg={true}
        withHeading={true}
        heading="Product catalog"
        history={["shop", "all products"]}
      />
      <div className={styles.shop}>
        <div className={styles["shop-container"]}>
          <aside className={styles["shop-filters"]}>
            {/* categories */}
            <h3 className={styles["shop-heading"]}>Categories</h3>
            <Filters name={"categories"} filters={categories} />
            {/* filter by price */}
            <h3 className={`${styles["shop-heading"]}`}>Filter by</h3>
            <div className="price"></div>
            <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
              MATERIALS
            </h3>
            <Filters name={"materials"} filters={materials} />
            <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>BRANDS</h3>
            <Filters name={"brands"} filters={brands} />
            <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>COLORS</h3>
            <div className="colors"></div>
          </aside>
          <main className={styles["shop-content"]}>
            <div className={styles["shop-topbar"]}>
              <Sort />
              <View />
            </div>
            <div className={styles["shop-products"]}>
              {products.map((product) => {
                return <Product product={product} key={generateUniqueId()} />;
              })}
            </div>
          </main>
        </div>
      </div>
      <div className={styles["shop-pagination-box"]}>
        <div className={styles["shop-pagination"]}>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Shop;
