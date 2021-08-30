import { CgClose } from 'react-icons/cg'
import { useState } from "react";

import { useDebounce } from '../../hooks/useDebounce'
import { useSearchResult } from "../../hooks/useSearchResult";
import { Container, SearchInputComponent } from "./styles";

export function SearchInput() {
  const { setSearch, setMaxResults } = useSearchResult();

  const [displayValue, setDisplayValue] = useState("");
  const debouncedChange = useDebounce(setSearch, 500);
  const setMaxResultsDebounce = useDebounce(setMaxResults, 500)

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
    setMaxResultsDebounce(18)
  }

  return (
    <Container>
      <img src="/assets/search.svg" alt="Search" />
      <SearchInputComponent
        placeholder="Search book"
        maxLength={255}
        value={displayValue}
        onChange={handleChange}
      />
      { displayValue &&
        <CgClose size="24" onClick={() => {
          setDisplayValue('')
          setSearch('')
        }}/>
      }
    </Container>
  );
}
