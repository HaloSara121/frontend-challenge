import { BiBarChartSquare } from "react-icons/bi";
import { BookCard, BookCardFooter } from "./styles";
import { BookType } from "../../types/Book";
import Link from "next/link";



interface BooksSlideProps{
  books: BookType[]
}

export function CarouselCard({books}: BooksSlideProps){
  return (
    <>
      {books?.map(book => (
        <BookCard key={book.id}>
          <Link href={`/book/${book.id}`}>
            <>
              <div>
                <div>
                  <h1>{book.volumeInfo.title}</h1>
                  <p>{book.volumeInfo.authors}</p>
                </div>
                <BookCardFooter>
                  <BiBarChartSquare size="20" />
                  <strong>120+</strong>
                  <span>Read Now</span>
                </BookCardFooter>
              </div>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book" />
            </>
          </Link>
        </BookCard>    
        ))
      }
    </>
  )
}