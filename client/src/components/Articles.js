import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";
import HeadingContainer from "./HeadingContainer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Articles = () => {
  return (
    <Wrapper>
      <HeadingContainer>
        <Heading type="section">Interior styles</Heading>
      </HeadingContainer>
      <Container>
        <article className="article">
          <figure className="article__img-box">
            <img
              src={`${require("../assets/imgs/scandinavian.jpg")}`}
              alt=""
              className="article-img"
            />
          </figure>
          <div className="article__text-box">
            <div className="article__main-content">
              <h5 className="article__title">Scandinavian style</h5>
              <div className="article__texts">
                <p className="article__text">
                  The Scandinavian-style interior is simple and light.
                </p>
                <p className="article__text">
                  This is a bright and free space, solid and reliable pieces of
                  furniture, cozy textiles and descreet decor. Designers use it
                  not only for design of urban apartmnents, but also for
                  surburban cottages. Extremely comfortable, but at the same
                  time modest design - the hallmark of scandinavian style.
                </p>
              </div>
              <Link className="article__link" to={`/articles/articleId`}>
                more details
              </Link>
            </div>
            <div className="article__ctrls">
              <IoIosArrowBack className="article__ctrl prev" />
              <div className="article__ctrls-sep">
                <span>1</span>
                <sup>/6</sup>
              </div>
              <IoIosArrowForward className="article__ctrl next" />
            </div>
          </div>
        </article>
      </Container>
    </Wrapper>
  );
};

export default Articles;
const Wrapper = styled.section`
  width: 100%;
  min-height: 40rem;

  .article {
    width: 100%;
    height: 35rem;
    display: grid;
    grid-template-columns: 50% 50%;

    @media only screen and (max-width: 48.75rem) {
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
    }

    &__img-box {
      width: 100%;
      height: 100%;

      @media only screen and (max-width: 48.75rem) {
        height: 30rem;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }

    &__text-box {
      height: 100%;
      width: 100%;
      padding-left: 8rem;
      padding-top: 3rem;
      padding-bottom: 1rem;
      padding-right: 4rem;
      background: rgba(237, 237, 239, 0.4);
      @media only screen and (max-width: 48.75rem) {
        min-height: 30rem;
      }

      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 75rem) {
        padding-left: 5rem;
        padding-right: 3rem;
      }
      @media only screen and (max-width: 63.25rem) {
        padding-left: 4rem;
        padding-right: 2rem;
      }

      @media only screen and (max-width: 48.75rem) {
        padding: 2rem;
      }
    }

    &__main-content {
      margin-bottom: auto;

      & > *:not(:last-child) {
        margin-bottom: 3rem;

        @media only screen and (max-width: 75rem) {
          margin-bottom: 2rem;
        }
      }

      @media only screen and (max-width: 34.5rem) {
        margin-bottom: 3rem;
      }
    }

    &__title {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--dark-color);
    }

    &__text {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.5;
      color: var(--dark-color);

      @media only screen and (max-width: 63.25rem) {
        font-size: 1.4rem;
        line-height: 1.3;
      }

      @media only screen and (max-width: 48.75rem) {
        font-size: 1.5rem;
        line-height: 1.5;
      }
    }

    &__link {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.5;
      color: var(--dark-color);
    }

    &__ctrls {
      display: flex;
      align-items: center;
    }

    &__ctrl {
      height: 1.8rem;
      width: 1.8rem;
      color: var(--dark-color);
    }

    &__ctrls-sep {
      span,
      sup {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--dark-color);
      }

      sup {
        font-size: 1.2rem;
        font-weight: 500;
        color: rgba(60, 60, 60, 0.6);
      }
    }
  }
`;
