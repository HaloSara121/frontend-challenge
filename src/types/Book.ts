export type BookType = {
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
  };
  id: string;
};
