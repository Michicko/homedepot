import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import styles from "./CustomSelect.module.css";
import { toggleCustomSelect } from "../features/pageSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomSelect = ({ name, options }) => {
  const dispatch = useDispatch();
  const openSelector = useSelector((state) => state.page.customSelectOpened);

  const openCloseSelect = () => {
    dispatch(toggleCustomSelect());
  };

  return (
    <div className={styles.customSelect}>
      <div className={styles["customSelect-top"]}>
        <h4>{name}</h4>
        {openSelector && (
          <RiArrowUpSLine
            className={styles["customSelect-icon"]}
            onClick={openCloseSelect}
          />
        )}
        {!openSelector && (
          <RiArrowDownSLine
            className={styles["customSelect-icon"]}
            onClick={openCloseSelect}
          />
        )}
      </div>
      <div
        className={
          openSelector
            ? `${styles["customSelect-options"]} ${styles.open}`
            : `${styles["customSelect-options"]}`
        }
      >
        {options}
      </div>
    </div>
  );
};

export default CustomSelect;
