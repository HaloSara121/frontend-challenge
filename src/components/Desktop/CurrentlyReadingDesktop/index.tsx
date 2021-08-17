import { Container } from "./styles";
import { InfoCard } from "./styles";
import { BiBookBookmark } from "react-icons/bi";

export function CurrentlyReadingDesktop() {
  return (
    <Container>
      <InfoCard>
        <img src="/assets/book2.png" alt="book2" />
        <div>
          <h1>Originals</h1>
          <p>by Adam Grant</p>
          <div>
            <BiBookBookmark />
            <span>
              Chapter <span>2</span> From 9
            </span>
          </div>
        </div>
      </InfoCard>
      <InfoCard>
        <img src="/assets/book2.png" alt="book2" />
        <div>
          <h1>Originals</h1>
          <p>by Adam Grant</p>
          <div>
            <BiBookBookmark />
            <span>
              Chapter <span>2</span> From 9
            </span>
          </div>
        </div>
      </InfoCard>
    </Container>
  );
}
