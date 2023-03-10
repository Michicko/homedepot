import Hero from "@/components/Hero";
import HeroHistoryLink from "@/components/HeroHistoryLink";
import styles from "../../styles/ProductPage.module.css";

const ProductPage = () => {
  return (
    <div className={styles["product-page"]}>
      <Hero
        withBg={false}
        withHeading={false}
        history={[
          <HeroHistoryLink link={"/shop"} text={"Shop"} />,
          <HeroHistoryLink link={"/shop"} text={"All products"} />,
          <HeroHistoryLink
            link={"/shop/montreal-chair"}
            text={"Montreal chair"}
            current={true}
          />,
        ]}
      />
    </div>
  );
};

export default ProductPage;
