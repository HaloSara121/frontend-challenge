import { useSearchResult } from "../../../hooks/useSearchResult";
import { BooksSlide } from "../../BooksSlide";
import { ReviewVideos } from "../../ReviewVideos";
import { SearchResult } from "../../SearchResult";
import { CurrentlyReadingDesktop } from "../CurrentlyReadingDesktop";
import { Header } from "../Header";
import { Container } from "./styles";

export function DeskTopHome() {
  const { search } = useSearchResult();
  return (
    <>
      <Header />
      <Container>
        {search ? (
          <SearchResult />
        ) : (
          <>
            <BooksSlide />
            <CurrentlyReadingDesktop />
            <ReviewVideos />
          </>
        )}
      </Container>
    </>
  );
}
