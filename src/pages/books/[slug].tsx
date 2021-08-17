import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { NavigationBooks } from "../../components/Mobile/NavigationBooks";
import { api } from "../../services/api";
import { BookType } from "../../types/Book";
import { ContainerHeader, ContainerContent } from "../../styles/bookDetails";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface BooksProps {
  book: BookType;
}

export default function Books({ book }: BooksProps) {
  const { width } = useWindowDimensions();

  const isMobile = width > 1024 ? false : true;

  return (
    <>
      <ContainerHeader>
        <div>
          <Link href="/">
            <BiArrowBack size="20" />
          </Link>

          <img src={book.volumeInfo.imageLinks?.thumbnail} />
          <ul>
            <li>Read</li>
            <li>Listen</li>
            <li>Share</li>
          </ul>
        </div>
      </ContainerHeader>

      <ContainerContent>
        <h1>
          <strong>{book.volumeInfo.title}</strong> : {book.volumeInfo.subtitle}
        </h1>
        <h3>{book.volumeInfo.authors}</h3>

        <p
          dangerouslySetInnerHTML={{
            __html: book.volumeInfo.description,
          }}
        />
      </ContainerContent>

      {isMobile && <NavigationBooks />}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;

  const book = await api
    .get(`https://www.googleapis.com/books/v1/volumes/${params.slug}`)
    .then((res) => res.data);

  return {
    props: {
      book,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
