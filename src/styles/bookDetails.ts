import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  height: 349px;

  div {
    background-color: ${(props) => props.theme.colors.circlebackground};
    height: 282px;
    border-radius: 0 0 140px 0;
    background-image: url("/assets/oval-1.svg"), url("/assets/oval-4.svg"),
      url("/assets/oval-2.svg"), url("/assets/oval-3.svg"),
      url("/assets/oval-5.svg");
    background-repeat: no-repeat;
    background-position: 125% -20%, 74% 95%, 72% 34%, 22% 53%, 11% 47%;
  }

  svg {
    margin-top: 2rem;
    margin-left: 2.0625rem;
    margin-right: 9rem;
    font-weight: bold;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    svg {
      height: 25px;
      width: 25px;

      transition: background-color 0.2s;
      transition: border-radius 0.2s;
      transition: opacity 0.2s;

      &:hover {
        background-color: ${(props) => props.theme.colors.inputBackground};
        border-radius: 0.625rem;
        opacity: 70%;
      }
    }
  }

  img {
    margin: 0px 0.9375rem 1.9375rem 8.125rem;
  }

  ul {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    margin-right: 20px;

    li {
      list-style-type: none;
      font-size: 1.25rem;
      cursor: pointer;

      transition: filter 0.2s;

      &:hover {
        filter: opacity(80%);
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;

    div {
      display: flex;
      justify-content: center;
    }

    img {
      margin: 1.25rem auto;
    }
  }
`;

export const ContainerContent = styled.section`
  width: 100%;
  max-width: 343px;

  margin: 0 auto;

  h1 {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.title};
    margin-bottom: 0.4375rem;

    strong {
      font-weight: 600;
    }
  }

  h3 {
    margin-bottom: 0.6rem;
    color: ${(props) => props.theme.colors.redTitle};
  }

  p {
    color: ${(props) => props.theme.colors.textPrimary};
    opacity: 80%;
    margin-bottom: 10rem;

    line-height: 1.5rem;

    & + p {
      margin-top: 1rem;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;
