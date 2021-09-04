import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${(props) => css`
    position: fixed;
    width: calc(100% - 40px);
    bottom: 0;
    padding: 20px 22px;
    background: ${props.theme.colors.white};
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);

    margin: 0 0 53px 20px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    button {
      border: none;
      background: ${props.theme.colors.white};
      display: flex;
      align-items: center;

      color: ${props.theme.colors.title};
      font-weight: 700;

      svg {
        margin-right: 10px;
        color: #cfcbd2;
      }
    }
  `}
`;
