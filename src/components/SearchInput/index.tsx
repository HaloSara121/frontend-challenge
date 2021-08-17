import { useSearchResult } from "../../hooks/useSearchResult";
import { Container, SearchInputComponent } from "./styles";

export function SearchInput() {
  const { search, setSearch } = useSearchResult();
  return (
    <Container>
      <img src="/assets/search.svg" alt="Search" />
      <SearchInputComponent
        placeholder="Search book"
        maxLength={255}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
}
