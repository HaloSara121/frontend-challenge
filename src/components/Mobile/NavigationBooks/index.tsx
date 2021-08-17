import { Container } from "./styles";
import { BsBook } from "react-icons/bs";
import { FiHeadphones, FiShare } from "react-icons/fi";

export function NavigationBooks() {
  return (
    <Container>
      <div>
        <button type="button">
          <BsBook size="21" />
          Read
        </button>
        <button type="button">
          <FiHeadphones size="21" />
          Listen
        </button>
        <button type="button">
          <FiShare size="21" />
          Share
        </button>
      </div>
    </Container>
  );
}
