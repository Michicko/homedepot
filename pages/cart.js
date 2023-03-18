import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import HeroHistoryLink from "@/components/HeroHistoryLink";
import MobileHero from "@/components/MobileHero";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <Hero
        history={[
          <HeroHistoryLink link={"/shop"} text={"Shop"} />,
          <HeroHistoryLink link={"/cart"} text={"Cart"} current={true} />,
        ]}
      />
      <MobileHero headingLg={"Your cart"} />
      <section className={`${styles["cart-page"]} row`}>
        <div className={styles["cart-total-box"]}>
          <div className={styles["cart-heading-box"]}>
            <h2 className={styles["cart-page-heading"]}>Your cart</h2>
            <p className={styles["cart-total-items"]}>3 items</p>
          </div>
          <div className={styles["cart-total-amount"]}>
            <h5>Total</h5>
            <h3 className={styles["total-amount"]}>$278</h3>
          </div>
        </div>
        <div className={styles["cart-content"]}>
          <ul className={styles["cart-item-list"]}>
            <li className={styles["cart-item"]}>
              <div className={styles["cart-item-image-box"]}>
                <Image
                  src={require("../public/egg-chair-1.png")}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <div className={styles["cart-item-body"]}>
                <h5 className={styles["cart-item-name"]}>Montreal</h5>
                <p className={styles["cart-item-brand"]}>Cosmo</p>
                <div className={styles["cart-item-counter-box"]}>
                  <p>QTY</p>
                  <Counter />
                </div>
                <h5 className={styles["cart-item-price"]}>$142</h5>
                <AiOutlineClose className={styles["cart-item-btn"]} />
              </div>
            </li>
            <li className={styles["cart-item"]}>
              <div className={styles["cart-item-image-box"]}>
                <Image
                  src={require("../public/egg-chair-1.png")}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <div className={styles["cart-item-body"]}>
                <h5 className={styles["cart-item-name"]}>Montreal</h5>
                <p className={styles["cart-item-brand"]}>Cosmo</p>
                <div className={styles["cart-item-counter-box"]}>
                  <p>QTY</p>
                  <Counter />
                </div>
                <h5 className={styles["cart-item-price"]}>$142</h5>
                <AiOutlineClose className={styles["cart-item-btn"]} />
              </div>
            </li>
            <li className={styles["cart-item"]}>
              <div className={styles["cart-item-image-box"]}>
                <Image
                  src={require("../public/egg-chair-1.png")}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <div className={styles["cart-item-body"]}>
                <h5 className={styles["cart-item-name"]}>Montreal</h5>
                <p className={styles["cart-item-brand"]}>Cosmo</p>
                <div className={styles["cart-item-counter-box"]}>
                  <p>QTY</p>
                  <Counter />
                </div>
                <h5 className={styles["cart-item-price"]}>$142</h5>
                <AiOutlineClose className={styles["cart-item-btn"]} />
              </div>
            </li>
            <li className={styles["cart-item"]}>
              <div className={styles["cart-item-image-box"]}>
                <Image
                  src={require("../public/egg-chair-1.png")}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <div className={styles["cart-item-body"]}>
                <h5 className={styles["cart-item-name"]}>Montreal</h5>
                <p className={styles["cart-item-brand"]}>Cosmo</p>
                <div className={styles["cart-item-counter-box"]}>
                  <p>QTY</p>
                  <Counter />
                </div>
                <h5 className={styles["cart-item-price"]}>$142</h5>
                <AiOutlineClose className={styles["cart-item-btn"]} />
              </div>
            </li>
            <li className={styles["cart-item"]}>
              <div className={styles["cart-item-image-box"]}>
                <Image
                  src={require("../public/egg-chair-1.png")}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <div className={styles["cart-item-body"]}>
                <h5 className={styles["cart-item-name"]}>Montreal</h5>
                <p className={styles["cart-item-brand"]}>Cosmo</p>
                <div className={styles["cart-item-counter-box"]}>
                  <p>QTY</p>
                  <Counter />
                </div>
                <h5 className={styles["cart-item-price"]}>$142</h5>
                <AiOutlineClose className={styles["cart-item-btn"]} />
              </div>
            </li>
            <li className={styles["cart-item"]}>
              <div className={styles["cart-item-image-box"]}>
                <Image
                  src={require("../public/egg-chair-1.png")}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <div className={styles["cart-item-body"]}>
                <h5 className={styles["cart-item-name"]}>Montreal</h5>
                <p className={styles["cart-item-brand"]}>Cosmo</p>
                <div className={styles["cart-item-counter-box"]}>
                  <p>QTY</p>
                  <Counter />
                </div>
                <h5 className={styles["cart-item-price"]}>$142</h5>
                <AiOutlineClose className={styles["cart-item-btn"]} />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles["cart-btns-box"]}>
          <Link href={"/shop"} className="btn outline dark-txt lg">
            continue to shopping
          </Link>
          <Link className="btn primary-btn lg" href={"/checkout"}>
            proceed to checkout
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
