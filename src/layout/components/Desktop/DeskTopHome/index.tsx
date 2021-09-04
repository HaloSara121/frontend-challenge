import { useSearchResult } from "../../../../hooks/useSearchResult";
import { BooksSlide } from "../../../../common/BooksSlide";
import { ReviewVideos } from "../../../../common/ReviewVideos";
import { SearchResult } from "../../../../common/SearchResult";
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
