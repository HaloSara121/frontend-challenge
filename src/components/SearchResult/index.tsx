import { Container, Card } from "./styles";
import Link from "next/link";
import { useSearchResult } from "../../hooks/useSearchResult";
import { ToastContainer } from "react-toastify";

export function SearchResult() {
  const { books, maxResults, setMaxResults } = useSearchResult();

  return (
    <Container>
        {books?.map((book) => (
          <Card key={book.id}>
            <Link href={`books/${book.id}`}>
              <a>
                <img
                  width={105}
                  height={153}
                  src={
                    book.volumeInfo?.imageLinks?.thumbnail
                      ? book.volumeInfo?.imageLinks?.thumbnail
                      : "noImage"
                  }
                  alt={book.volumeInfo.title}
                />
                <h2>{book.volumeInfo.title}</h2>
                <h3>{`by ${book.volumeInfo.authors}`}</h3>
              </a>
            </Link>
          </Card>
        ))}
      <button onClick={() => setMaxResults(maxResults + 6)} type="button">Show more</button>
      <ToastContainer />
    </Container>
  );
}
