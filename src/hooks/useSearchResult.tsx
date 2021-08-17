import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
import { BookType } from "../types/Book";

import 'react-toastify/dist/ReactToastify.css';

const SearchResultContext = createContext({} as SearchResultContextData);

type SearchResultContextData = {
  search: string;
  setSearch: (searchValue: any) => void;
  books: BookType[];
  setBooks: (bookValue: BookType[]) => void;
  maxResults: number;
  setMaxResults: (maxResults: number) => void;
};

interface SearchResultProviderProps {
  children: ReactNode;
}

export function SearchResultProvider({ children }: SearchResultProviderProps) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<BookType[]>([]);
  const [maxResults, setMaxResults] = useState<number>(18)

  useEffect(() => {
    getBooks()

  }, [search]);

  useEffect(() => {
    getMoreBooks()
    
  }, [maxResults])

  async function getMoreBooks() {
    if (search) {
      try {
        const res = await api.get(`volumes?q=${search}&maxResults=${maxResults}`);

        setBooks(res.data.items);
      } catch {
        toast.warning('No more books to show!')
      }
    }
  }

  async function getBooks() {
    if (search) {
      const res = await api.get(`volumes?q=${search}&maxResults=${maxResults}`);

      setBooks(res.data.items);
    }
  }

  return (
    <SearchResultContext.Provider
      value={{ search, setSearch, books, setBooks, maxResults, setMaxResults }}
    >
      {children}
    </SearchResultContext.Provider>
  );
}

export const useSearchResult = () => useContext(SearchResultContext);
