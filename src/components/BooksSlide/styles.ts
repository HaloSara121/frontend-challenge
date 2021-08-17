import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  margin-top: 1rem;

  .rec.rec-carousel {
    max-width: 10000px;
  }

  .rec.rec-pagination {
    margin: 0;
  }

  .rec.rec-dot {
    box-shadow: 0 0 1px 2px #cccccc;
  }

  .rec.rec-dot_active {
    background: #f23c4f;

    box-shadow: 0 0 1px 2px #be0014;
  }
`;

export const BookCard = styled.div`
  display: flex;

  min-width: 272px;
  max-height: 139px;

  padding: 1.5rem 0 1.5rem 1rem;

  border-radius: 0.5rem;

  background: purple;
  color: #fff;

  div {
    margin-bottom: 1.5rem;
    margin-top: -0.3rem;

    h1 {
      font-family: "Playfair Display";
      font-size: 2rem;
      font-weight: 700;
    }

    p {
      font-size: 1rem;
      line-height: 1rem;
    }
  }

  img {
    margin: auto;
    margin-top: -8px;
    width: 72px;
    height: 111px;
  }

  & + & {
    transform: scale(1.4);
    margin-left: 1.5rem;
  }
`;

export const BookCardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  span {
    margin-top: 1.375rem;
  }

  strong {
    margin-top: 1.375rem;
  }

  svg {
    margin-top: 1.375rem;
  }
`;
