import styled from "styled-components";
import Container from "./Container";
import banner from "../assets/imgs/banner.jpg";
import Heading from "./Heading";
import Button from "./Button";

const Header = () => {
  return (
    <Wrapper>
      <div className="bg"></div>
      <h5 className="logo">homedepot.</h5>
      <Container>
        <div className="box">
          <div className="box-inner">
            <Heading type="primary">New interior collection</Heading>
            <p className="lead">
              A competent interior design will squeeze a rich
              <span>inner world into even the most limited room size</span>
            </p>
            <Button type="link" path="/shop" size="lg">
              Shop
            </Button>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: calc(100vh - 7rem);
  background-color: var(--primary-color);

  @media only screen and (max-width: 32rem) {
    height: calc(100vh - 6rem);
  }

  .bg {
    height: 100%;
    width: 100%;
    background: url(${banner});
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    @media only screen and (max-width: 43.75rem) {
      height: calc(60vh - 7rem);
      background-position: center;
      background-size: contain;
    }

    @media only screen and (max-width: 32rem) {
      height: calc(60vh - 6rem);
    }

    /* z-index: -1; */

    /* 
    @media only screen and (max-width: 43.75rem) {
      height: calc(60vh - 7rem);
      background-position: center;
      background-size: contain;
    }

    @media only screen and (max-width: 32rem) {
      position: relative;
    } */
  }

  .box {
    position: relative;
    height: calc(100vh - 7rem);
    width: 100%;
    @media only screen and (max-width: 43.75rem) {
      position: absolute;
      height: 40vh;
      bottom: 0;
      left: 0;
      background: var(--white-color);
      padding: 0 4rem;
    }
    @media only screen and (max-width: 32rem) {
      padding: 0 2rem;
    }

    .box-inner {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 300;

      @media only screen and (max-width: 43.75rem) {
        position: relative;
      }

      & > *:first-child {
        margin-bottom: 1.5rem;

        @media only screen and (max-width: 32rem) {
          /* margin-bottom: 1rem; */
        }
      }
    }
  }

  .logo {
    margin-right: 8rem;
    font-size: 1.6rem;
    font-weight: 800;
    text-decoration: none;
    color: var(--dark-color);
    display: none;

    @media only screen and (max-width: 32rem) {
      display: block;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .lead {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--dark-color);
    line-height: 1.5;
    margin-bottom: 5rem;

    @media only screen and (max-width: 32rem) {
      margin-bottom: 3rem;
      font-size: 1.3rem;
    }

    span {
      display: block;

      @media only screen and (max-width: 32rem) {
        display: inline;
      }
    }
  }
`;
