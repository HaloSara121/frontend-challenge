import styled, { css } from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 1rem;
  column-gap: 0.875rem;
  flex-direction: column;
  margin-top: 2.3rem;
  width: 90%;
  overflow-y: auto;
  height: 72vh;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  button {
    margin: auto;
    padding: 1rem ;

    border: none;
    border-radius: .5rem;

    background: lightgoldenrodyellow;
    color: var(--title);
  }
`;

export const Card = styled.article`
  ${(props) => css`
    display: flex;
    flex-direction: column;
    width: 95%;
    padding-bottom: 1rem;
    a {
      display: flex;
      justify-content: center;
      flex-direction: column;
      img {
        width: 100%;
        height: 9.56rem;
      }
      h2 {
        margin-top: 0.56rem;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 14px;
        color: ${props.theme.colors.textPrimary};
      }
      h3 {
        margin-top: 0.31rem;
        font-size: 0.625rem;
        line-height: 12px;
        font-weight: 900;
        color: ${props.theme.colors.textPrimary};
      }
    }
  `}
`;
