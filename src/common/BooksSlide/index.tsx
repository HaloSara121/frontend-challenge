import { BiBarChartSquare } from "react-icons/bi";
import { Container, BookCard, BookCardFooter } from "./styles";
import Carousel from "react-elastic-carousel";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { MobileBooksSlide } from "../../layout/components/Mobile/BooksSlide";

const breakPoints = [{ width: 374, itensToShow: 1 }];

export function BooksSlide() {
  const { width } = useWindowDimensions();
  const isMobile = width > 1024 ? false : true;

  return (
    <Container>
      { !isMobile ? (
          <Carousel
            breakPoints={breakPoints}
            isRTL={false}
            enableMouseSwipe={false}
            showArrows={isMobile ? false : true}
            itemsToShow={isMobile ? 1 : 3}
          >
            <BookCard href="/books/dsz5AwAAQBAJ">
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
            <BookCard href="/books/eLRhDgAAQBAJ">
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
            <BookCard href="/books/KnRbAAAAMAAJ">
              <div>
                <div>
                  <h1>Tonka</h1>
                  <p>Ryan G. Van Cleave</p>
                </div>
                <BookCardFooter>
                  <BiBarChartSquare size="20" />
                  <strong>140+</strong>
                  <span>Read Now</span>
                </BookCardFooter>
              </div>
              <img src="/assets/tonka.jpg" alt="Book" />
            </BookCard>
            <BookCard href="/books/I-Eyh1B0qLoC">
              <div>
                <div>
                  <h1>A Sereia</h1>
                  <p>Rhys Hughes</p>
                </div>
                <BookCardFooter>
                  <BiBarChartSquare size="20" />
                  <strong>30+</strong>
                  <span>Read Now</span>
                </BookCardFooter>
              </div>
              <img src="/assets/sereia.jpg" alt="Book" />
            </BookCard>
          </Carousel>
        ) : (
          <MobileBooksSlide />
        )
      }
    </Container>
  );
}
