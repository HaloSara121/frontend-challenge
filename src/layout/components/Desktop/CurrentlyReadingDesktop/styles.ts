import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: -1.5rem;
  margin-top: 5.5rem;

`;

export const InfoCard = styled.div`
  width: 993px;
  max-height: 100px;

  display: flex;
  align-items: center;

  margin: auto;

  box-shadow: 0px 3px 45px 0px #798d431d;

  border-radius: 0.5rem;

  
  ${(props) => css`
    background: ${props.theme.colors.infoCard};
  
    background-image: 
      url("/assets/rectangle.svg"),
      url("/assets/oval.svg"), 
      url("/assets/oval-card2.svg");

    background-repeat: no-repeat;

    background-position: 30% 65%, 60% -100% , 90% -7%;

    img { 
      width: 91px;
      height: 136px;
      
      margin-left: 1.5rem;

      border-radius: 5px;

      &:hover {
        transform: scale(1.2);
      }
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

        color: ${props.theme.colors.infoCardText};

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
