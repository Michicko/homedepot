import Image from "next/image";
import { useState } from "react";
import styles from "./ImageSlide.module.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const handleClick = (i) => {
    setCurrentIndex(i);
  };

  return (
    <div className={styles["image-slider"]}>
      <div className={styles["slider-disp"]}>
        <div className={styles["slider-disp-inner"]}>
          <Image
            src={require(`../public/${currentImage.imageLink}`)}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
      <div className={styles["image-slides-box"]}>
        <div className={styles["image-slides"]}>
          {images.map((img, i) => {
            return (
              <div
                className={
                  currentIndex === i
                    ? `${styles["image-slide"]} ${styles.active}`
                    : styles["image-slide"]
                }
                onClick={() => handleClick(i)}
              >
                <Image
                  src={require(`../public/${img.imageLink}`)}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
            );
          })}
        </div>
        <div className={styles["mobile-img-slides"]}>
          {images.map((img, i) => {
            return (
              <button
                className={
                  currentIndex === i
                    ? `${styles["mobile-img-slide"]} ${styles.active}`
                    : styles["mobile-img-slide"]
                }
                onClick={() => handleClick(i)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
