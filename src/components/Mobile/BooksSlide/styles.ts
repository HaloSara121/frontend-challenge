import styled from "styled-components";
import { motion } from "framer-motion";


export const BookCard = styled(motion.a)`
  display: flex;
  min-width: 272px;
  max-height: 139px;
  padding: 1.5rem 0 1.5rem 1rem;
  border-radius: 0.5rem;
  
  background-color: purple;
  
  color: #fff;
  
  background-image: 
    url("/assets/path.svg"),
    url("/assets/rectangle.svg"),
    url("/assets/oval-card.svg"), 
    url("/assets/oval-card2.svg");
  
  background-repeat: no-repeat;
  background-position: 67% 1%, 52% 75%, 1% 88%, 49% 10%;

  transform: scale(.9);

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
    border-radius: 6px;
  }
  & + & {
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