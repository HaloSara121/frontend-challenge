import { useSearchResult } from "../../hooks/useSearchResult";
import { Container, SearchInputComponent } from "./styles";
import { CgClose } from 'react-icons/cg'

export function SearchInput() {
  const { search, setSearch, setMaxResults } = useSearchResult();

  return (
    <Container>
      <img src="/assets/search.svg" alt="Search" />
      <SearchInputComponent
        placeholder="Search book"
        maxLength={255}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setMaxResults(18)
        }}
      />
      { search &&
        <CgClose size="24 " onClick={() => setSearch('')}/>
      }
    </Container>
  );
}
