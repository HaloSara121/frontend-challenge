import { Container } from "./styles";
import { InfoCard } from "./styles";
import { BiBookBookmark } from "react-icons/bi";
import Link from 'next/link'

export function CurrentlyReadingDesktop() {
  return (
    <Container>
      <InfoCard>
        <Link href="/books/eLRhDgAAQBAJ">
          <img src="/assets/book2.png" alt="book2" />
        </Link>
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

        <Link href="/books/I-Eyh1B0qLoC">
          <img src="/assets/sereia.jpg" alt="book2" />
        </Link>
        <div>
          <h1>A Sereia</h1>
          <p>by Adam Grant</p>
          <div>
            <BiBookBookmark />
            <span>
              Chapter <span>2</span> From 9
            </span>
          </div>
        </div>

        <Link href="/books/KnRbAAAAMAAJ">
          <img src="/assets/tonka.jpg" alt="book2" />
        </Link>
        <div>
          <h1>A Sereia</h1>
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
