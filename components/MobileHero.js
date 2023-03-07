import { useRouter } from "next/router";
import utilsStyles from "./Utils.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import styles from "./Hero.module.css";

const MobileHero = ({ headingSm, headingLg, selector }) => {
  const router = useRouter();
  return (
    <div className={styles.mobileHero}>
      <MdArrowBackIosNew
        className={utilsStyles.backBtn}
        onClick={() => router.back()}
      />
      <div className="">
        <h3 className={styles["mobileHero-heading-lg"]}>{headingLg}</h3>
        <h5 className={styles["mobileHero-heading-sm"]}>{headingSm}</h5>
      </div>
      {selector}
    </div>
  );
};

export default MobileHero;
