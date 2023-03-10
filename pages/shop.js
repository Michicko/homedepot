import Filters from "@/components/Filters";
import Hero from "@/components/Hero";
import styles from "../styles/Shop.module.css";
import { categories, products } from "@/utils/data";
import Sort from "@/components/Sort";
import View from "@/components/View";
import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
import { generateUniqueId } from "@/utils/funcs";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "@/features/pageSlice";
import MobileHero from "@/components/MobileHero";
import CustomSelect from "@/components/CustomSelect";
import Colors from "@/components/Colors";
import RangeSlider from "@/components/RangeSlider";

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
  const dispatch = useDispatch();
  const view = useSelector((state) => state.page.view);

  const changeUiView = (type) => {
    dispatch(changeView(type));
  };

  const prices = [120, 250, 100, 400, 550, 780, 350, 440, 230];

  return (
    <>
      <Hero
        withBg={true}
        withHeading={true}
        heading="Product catalog"
        history={["shop", "all products"]}
      />
      <MobileHero
        headingLg={"Armchairs"}
        selector={
          <CustomSelect
            name={"Filters"}
            options={
              <>
                <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                  CATEGORIES
                </h3>
                <Filters
                  name={"category"}
                  filters={categories}
                  noTotal={true}
                  flexed={true}
                />
                <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                  PRICE
                </h3>
                {/* price */}
                <RangeSlider
                  min={Math.min(...prices)}
                  max={Math.max(...prices)}
                  onChange={({ min, max }) => {
                    // console.log(min, max);
                    // set price from
                    // set price to
                  }}
                />
                <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                  MATERIALS
                </h3>
                <Filters
                  name={"material"}
                  filters={materials}
                  noTotal={true}
                  flexed={true}
                />
                <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                  BRANDS
                </h3>
                <Filters
                  name={"brand"}
                  filters={brands}
                  noTotal={true}
                  flexed={true}
                />
                <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                  COLORS
                </h3>
                <Colors />
              </>
            }
          />
        }
      />
      <div className={styles.shop}>
        <div className={styles["shop-container"]}>
          <aside className={styles["shop-filters"]}>
            {/* categories */}
            <div>
              <h3 className={styles["shop-heading"]}>Categories</h3>
              <Filters name={"category"} filters={categories} />
            </div>
            {/* filter by price */}
            <h3 className={`${styles["shop-heading"]}`}>Filter by</h3>
            <div>
              <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                PRICE
              </h3>
              {/* price */}
              <RangeSlider
                min={Math.min(...prices)}
                max={Math.max(...prices)}
                onChange={({ min, max }) => {
                  // console.log(min, max);
                  // set price from
                  // set price to
                }}
              />
            </div>
            <div>
              <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                MATERIALS
              </h3>
              <Filters name={"material"} filters={materials} />
            </div>
            <div>
              <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                BRANDS
              </h3>
              <Filters name={"brand"} filters={brands} />
            </div>
            <div>
              <h3 className={`${styles["shop-heading"]} ${styles.sm}`}>
                COLORS
              </h3>
              <Colors />
            </div>
          </aside>
          <main className={styles["shop-content"]}>
            <div className={styles["shop-topbar"]}>
              <Sort />
              <View view={view} changeUiView={changeUiView} />
            </div>
            <div className={`${styles["shop-products"]} ${styles[view]}`}>
              {products.map((product) => {
                return (
                  <Product
                    product={product}
                    key={generateUniqueId()}
                    view={view}
                  />
                );
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
