import utilsStyles from "./Utils.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <div className={utilsStyles["pagination"]}>
      <IoIosArrowBack
        className={`${utilsStyles["pagination-btn"]} ${utilsStyles.prev}`}
      />
      <div className={utilsStyles["pagination-numbers"]}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <IoIosArrowForward
        className={`${utilsStyles["pagination-btn"]} ${utilsStyles.next}`}
      />
    </div>
  );
};

export default Pagination;
