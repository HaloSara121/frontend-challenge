import { motion, useElementScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BiBarChartSquare } from "react-icons/bi";
import { BookCard, BookCardFooter } from "./styles";

export function MobileBooksSlide(){
  const containerDivRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useElementScroll(containerDivRef)

  const card1Scale = useTransform(scrollXProgress,
    [0, 0.250],
    [1, .9]
  )
  const card1Bg = useTransform(scrollXProgress,
    [0, 0.250],
    ["#00173D", "#800080"]
  )
  const card2Scale = useTransform(scrollXProgress,
    [0, 0.250, 0.360, 0.500],
    [.9, 1, 1, .9]
  )
  const card2Bg = useTransform(scrollXProgress,
    [0, 0.250, 0.360, 0.500],
    ["#800080", "#00173D", "#00173D", "#800080"]
  )
  const card3Scale = useTransform(scrollXProgress,
    [0.500, 0.650, 0.750, 1],
    [.9, 1, 1, .9]
  )
  const card3Bg = useTransform(scrollXProgress,
    [0.500, 0.650, 0.750, 1],
    ["#800080", "#00173D", "#00173D", "#800080"]
  )
  const card4Scale = useTransform(scrollXProgress,
    [0.750, 1],
    [.9, 1]
  )
  const card4Bg = useTransform(scrollXProgress,
    [0.750, 1],
    ["#800080", "#00173D"]
  )

  return (
    <motion.div
      className="mobileContainer"
      ref={containerDivRef}
    >
      <BookCard
        href="/books/dsz5AwAAQBAJ"
        style={{
          scale: card1Scale,
          backgroundColor: card1Bg
        }}
      >
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
      <BookCard
        href="/books/eLRhDgAAQBAJ"
        style={{
          scale: card2Scale,
          backgroundColor: card2Bg
        }}
      >
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
      <BookCard
        href="/books/KnRbAAAAMAAJ"
        style={{
          scale: card3Scale,
          backgroundColor: card3Bg
        }}
      >
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
      <BookCard
        href="/books/I-Eyh1B0qLoC"
        style={{
          scale: card4Scale,
          backgroundColor: card4Bg
        }}
      >
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
    </motion.div>
  )
}