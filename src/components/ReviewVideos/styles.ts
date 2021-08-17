import styled from "styled-components";

export const Container = styled.section`
  div {
    margin-top: 8px;

    div {
      display: flex;
      justify-content: space-between;

      a {
        color: #4abdf1;
      }
    }

    h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors.title};

      @media (min-width: 1024px) {
        font-size: 1.5rem;
      }
    }

    img {
      margin-top: 1rem;

      @media (min-width: 1024px) {
        margin-right: 1rem;
      }
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 10rem;
  }
`;
