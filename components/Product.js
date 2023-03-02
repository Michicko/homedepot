import { getDiscount } from "@/utils/funcs";
import Image from "next/image";
import Link from "next/link";
import img from "../public/wide-chair-2.png";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  const { slug, name, price, image, discount } = product;
  return (
    <Link href={`/shop/${slug}`} className={styles.product}>
      <div className={styles["product-img-box"]}>
        <Image src={img} height={170} width={140} />
      </div>
      <div className={styles["product-body"]}>
        <h3 className={styles["product-name"]}>Aj Eb</h3>
        <p className={`${styles["product-price"]}`}>
          ${discount ? getDiscount(10, 15) : 20}
          {discount && <span className={styles.dash}>$20</span>}
        </p>
      </div>
      {discount > 0 ? (
        <span className={styles["product-discount"]}>10%</span>
      ) : null}
    </Link>
  );
};

export default Product;
