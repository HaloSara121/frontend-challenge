import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState, ReactNode } from "react";
import { api } from "../services/api";
import { BookType } from "../types/Book";

const SearchResultContext = createContext({} as SearchResultContextData);

type SearchResultContextData = {
  search: string;
  setSearch: (searchValue: any) => void;
  books: BookType[];
  setBooks: (bookValue: BookType[]) => void;
};

interface SearchResultProviderProps {
  children: ReactNode;
}

export function SearchResultProvider({ children }: SearchResultProviderProps) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    getBooks();
  }, [search]);

  async function getBooks() {
    if (search) {
      const res = await api.get(`volumes?q=${search}`);

      setBooks(res.data.items);
    }
  }

  return (
    <SearchResultContext.Provider
      value={{ search, setSearch, books, setBooks }}
    >
      {children}
    </SearchResultContext.Provider>
  );
}

export const useSearchResult = () => useContext(SearchResultContext);
