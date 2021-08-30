import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-left: -1.5rem;
  margin-top: 1rem;
`;

export const InfoCard = styled.a`
  width: 331px;
  max-height: 100px;

  display: flex;
  align-items: center;

  box-shadow: 0px 3px 45px 0px #798d431d;

  border-radius: 0 0.5rem 0.5rem 0;

  ${(props) => css`
    background: ${props.theme.colors.infoCard};

    background-image: 
      url("/assets/rectangle.svg"),
      url("/assets/oval.svg"), 
      url("/assets/oval-card2.svg");

    background-repeat: no-repeat;

    background-position: 107% 65%, 110% -100% , 75% -7%;

    img {
      width: 91px;
      height: 136px;

      margin-left: 1.5rem;
    }

    & > div {
      width: 100%;

      margin-left: 1rem;

      h1 {
        font-family: "playfair display";
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 2rem;
        color: ${props.theme.colors.infoCardText};
      }

      p {
        font-family: "Roboto" sans-serif;

        color: ${props.theme.colors.infoCardText};
      }

      & > div {
        display: flex;
        align-items: center;

        margin-top: 1.8rem;

        & > span {
          margin-left: 0.5rem;

          font-size: 0.6rem;
          font-weight: 700;
          line-height: 0.7rem;

          & > span {
            color: ${props.theme.colors.redTitle};
          }
        }
      }
    }
  `}
`;
