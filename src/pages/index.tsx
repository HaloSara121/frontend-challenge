import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { Container, Content, Greeatings, Heading } from "../styles/home";
import { DeskTopHome } from "../components/Desktop/DeskTopHome";
import { NavigationBar } from "../components/Mobile/NavigationBar";
import { SearchInput } from "../components/SearchInput";
import { BooksSlide } from "../components/BooksSlide";
import { CurrentlyReading } from "../components/CurrentlyReading";
import { ReviewVideos } from "../components/ReviewVideos";
import { SearchResult } from "../components/SearchResult";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useSearchResult } from "../hooks/useSearchResult";
import { api } from "../services/api";
import { GetStaticProps } from "next";

export default function Home({cardBooks}) {
  const { search } = useSearchResult();
  const { width } = useWindowDimensions();

  const isMobile = width > 1024 ? false : true;

  return (
    <>
      <Head>
        <title>Home | FotonBooks</title>
      </Head>
      {isMobile ? (
        <Container>
          <SearchInput />

          {search ? (
            <SearchResult />
          ) : (
            <Content>
              <Greeatings>
                <h1>
                  Hi, <span>Fotontech</span>👋
                </h1>
              </Greeatings>

              <section>
                <Heading>
                  <h2>Discover new book</h2>
                  <Link href="/search">
                    <a>More</a>
                  </Link>
                </Heading>

                <BooksSlide books={cardBooks} />
              </section>
              <section>
                <Heading>
                  <h2>Currently reading</h2>
                  <Link href="/">
                    <a>All</a>
                  </Link>
                </Heading>

                <CurrentlyReading />
              </section>

              <ReviewVideos />
            </Content>
          )}

          <NavigationBar activeItem={1} />
        </Container>
      ) : (
        <DeskTopHome />
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const book1 = await api
      .get(`https://www.googleapis.com/books/v1/volumes/dsz5AwAAQBAJ`)
      .then((res) => res.data);

  const book2 = await api
      .get(`https://www.googleapis.com/books/v1/volumes/eLRhDgAAQBAJ`)
      .then((res) => res.data);

  const book3 = await api
      .get(`https://www.googleapis.com/books/v1/volumes/zDJTAAAAMAAJ`)
      .then((res) => res.data);

  const book4 = await api
      .get(`https://www.googleapis.com/books/v1/volumes/3J3WAAAAMAAJ`)
      .then((res) => res.data);

  return {
    props: {
      cardBooks: [
        book1,
        book2,
        book3,
        book4,
      ]
    }
  }
}
