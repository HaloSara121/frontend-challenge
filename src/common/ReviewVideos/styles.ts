import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 8px;
    
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
      width: 335px;
      height: 187px;
      margin-top: 1rem;

      border-radius: 8px;

      &:hover {
        transform: scale(1.1);
      }

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
