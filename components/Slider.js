import styles from "./Slider.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CgFormatSlash } from "react-icons/cg";
import Product from "./Product";
import { generateUniqueId } from "@/utils/funcs";

const Slider = ({ products }) => {
  return (
    <div className={styles.slider}>
      <div className={styles["slider-ctrls"]}>
        <IoIosArrowBack className={styles["slider-btn"]} />
        <CgFormatSlash className={`${styles["slider-btn"]} ${styles.slash}`} />
        <IoIosArrowForward className={styles["slider-btn"]} />
      </div>
      <div className={styles["slider-inner"]}>
        <div className={styles.slides}>
          {products.map((product) => {
            return <Product product={product} key={generateUniqueId()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
