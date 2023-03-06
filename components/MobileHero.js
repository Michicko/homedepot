import { useRouter } from "next/router";
import utilsStyles from "./Utils.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import styles from "./Hero.module.css";

const MobileHero = ({ pageHeading, selector }) => {
  const router = useRouter();
  return (
    <div className={styles.mobileHero}>
      <MdArrowBackIosNew
        className={utilsStyles.backBtn}
        onClick={() => router.back()}
      />
      {pageHeading}
      {selector}
    </div>
  );
};

export default MobileHero;
