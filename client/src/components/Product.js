import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <Article className="product">
      <div className="product__img-box">
        <img
          src={`${require("../assets/imgs/egg-chair.png")}`}
          alt=""
          className="product__img"
        />
      </div>
      <div className="product__body">
        <h4 className="product__name">AJ Eb</h4>
        <div className="product__price-box">
          <h5 className="product__price">85</h5>
          <h5 className="product__price old">90</h5>
        </div>
      </div>
    </Article>
  );
};

export default Product;
const Article = styled.article`
  width: 20rem;
  height: 30rem;
  display: grid;
  grid-template-columns: 20rem;
  grid-template-rows: 23rem 5rem;
  grid-row-gap: 2rem;

  .product {
    &__img-box {
      width: 100%;
      height: 100%;
      background: var(--primary-color);
    }

    &__img {
      height: 100%;
      width: 100%;
    }

    &__name {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--dark-color);
      text-transform: capitalize;
    }

    &__body {
      display: flex;
      flex-direction: column;
      padding-left: 6rem;

      & > *:first-child {
        margin-bottom: 1rem;
      }
    }

    &__price-box {
      display: flex;
      align-items: center;

      & > *:first-child {
        margin-right: 2rem;
      }
    }

    &__price {
      font-size: 1.4rem;
      font-weight: 500;
      display: flex;
      align-items: center;

      &::before {
        display: block;
        content: "$";
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--dark-color);
        padding-right: 0.2rem;
      }

      &.old,
      &.old::before {
        color: rgba(60, 60, 60, 0.8);
        text-decoration: line-through;
      }
    }
  }
`;
