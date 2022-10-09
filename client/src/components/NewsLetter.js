import styled from "styled-components";
import Button from "./Button";
import Container from "./Container";

const NewsLetter = () => {
  return (
    <Wrapper>
      <Container>
        <div className="newsletter">
          <div className="newsletter__text-box">
            <h2>Newletter</h2>
            <p>
              Register now with our newsletter and
              <span>get the latest updates available</span>
            </p>
          </div>
          <div className="newsletter__form-box">
            <form>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="input n"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input e"
              />
              <Button type="input" size="sm">
                send
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default NewsLetter;

const Wrapper = styled.section`
  width: 100%;
  min-height: 30rem;
  padding: 8rem 0;

  @media only screen and (max-width: 34.5rem) {
    padding: 4rem 0;
  }
  h2 {
    font-size: 3.5vmax;
    font-weight: 700;
    color: var(--dark-color);
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--dark-color);

    span {
      display: block;
    }
  }

  .newsletter {
    width: 100%;
    /* background: lightblue; */

    display: grid;
    grid-template-columns: 50% 50%;

    @media only screen and (max-width: 56.5rem) {
      padding-left: 0;
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
      grid-row-gap: 4rem;
    }

    &__text-box {
      padding-left: 10rem;

      @media only screen and (max-width: 62.5rem) {
        padding-left: 5rem;
      }
      @media only screen and (max-width: 56.5rem) {
        padding-left: 0;
      }
    }

    form {
      display: grid;
      grid-template-columns: 30rem 8rem;
      grid-template-areas:
        "n n"
        "e b";
      grid-row-gap: 2rem;
      grid-column-gap: 2rem;

      @media only screen and (max-width: 62.5rem) {
        grid-template-columns: 25rem 8rem;
      }
      @media only screen and (max-width: 56.5rem) {
        grid-template-columns: 35rem 8rem;
      }
      @media only screen and (max-width: 34.5rem) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .n {
        grid-area: n;
      }
      .e {
        grid-area: e;
      }
      & > *:last-child {
        grid-area: b;
      }
    }
  }

  .input {
    height: 4rem;
    padding: 0 0.8rem;
    outline: none;
    border: 2px solid var(--primary-color);
    width: 30rem;

    @media only screen and (max-width: 62.5rem) {
      width: 25rem;
    }
    @media only screen and (max-width: 56.5rem) {
      width: 35rem;
    }

    @media only screen and (max-width: 34.5rem) {
      width: 80%;
    }
  }
`;
