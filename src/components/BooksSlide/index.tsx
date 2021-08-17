import { BiBarChartSquare } from "react-icons/bi";
import { Container, BookCard, BookCardFooter } from "./styles";
import Carousel from "react-elastic-carousel";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
// import { BookCardAnimated } from './BookCardAnimated';

const breakPoints = [{ width: 374, itensToShow: 1 }];

export function BooksSlide() {
  const { width } = useWindowDimensions();
  const isMobile = width > 1024 ? false : true;

  return (
    <Container>
      <Carousel
        breakPoints={breakPoints}
        isRTL={false}
        enableMouseSwipe={false}
        showArrows={isMobile ? false : true}
        itemsToShow={isMobile ? 1 : 3}
      >
        {/* {<BookCardAnimated>} */}
        <BookCard>
          <div>
            <div>
              <h1>Hooked</h1>
              <p>Nir Eyal</p>
            </div>
            <BookCardFooter>
              <BiBarChartSquare size="20" />
              <strong>120+</strong>
              <span>Read Now</span>
            </BookCardFooter>
          </div>
          <img src="/assets/book.png" alt="Book" />
        </BookCard>
        {/* {</BookCardAnimated>} */}
        {/* {<BookCardAnimated>} */}
        <BookCard>
          <div>
            <div>
              <h1>Originals</h1>
              <p>Adam Grant</p>
            </div>
            <BookCardFooter>
              <BiBarChartSquare size="20" />
              <strong>60+</strong>
              <span>Read Now</span>
            </BookCardFooter>
          </div>
          <img src="/assets/book2.png" alt="Book" />
        </BookCard>
        {/* {</BookCardAnimated>} */}
        <BookCard>
          <div>
            <div>
              <h1>Originals</h1>
              <p>Adam Grant</p>
            </div>
            <BookCardFooter>
              <BiBarChartSquare size="20" />
              <strong>60+</strong>
              <span>Read Now</span>
            </BookCardFooter>
          </div>
          <img src="/assets/book2.png" alt="Book" />
        </BookCard>
        <BookCard>
          <div>
            <div>
              <h1>Originals</h1>
              <p>Adam Grant</p>
            </div>
            <BookCardFooter>
              <BiBarChartSquare size="20" />
              <strong>60+</strong>
              <span>Read Now</span>
            </BookCardFooter>
          </div>
          <img src="/assets/book2.png" alt="Book" />
        </BookCard>
      </Carousel>
    </Container>
  );
}
