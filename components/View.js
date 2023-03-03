import { RiLayoutGridFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import utilsStyles from "./Utils.module.css";

const View = () => {
  return (
    <div className={utilsStyles.views}>
      <h4 className={utilsStyles["utils-heading"]}>View:</h4>
      <div className={utilsStyles["views-btns"]}>
        <RiLayoutGridFill className={utilsStyles["views-icon"]} />
        <GiHamburgerMenu className={utilsStyles["views-icon"]} />
      </div>
    </div>
  );
};

export default View;
