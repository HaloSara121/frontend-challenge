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
import { api } from "../services/api";
import { SearchResult } from "../components/SearchResult";
import { BookType } from "../types/Book";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useSearchResult } from "../hooks/useSearchResult";

export default function Home() {
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

                <BooksSlide />
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

// export const getStaticPaths: GetStaticPaths = async () => {
//   return{
//     paths: [],
//     fallback: 'blocking'
//   }
// }

// export const getStaticProps: GetStaticProps = async () => {

//   return {
//     props: {
//     }
//   }
// }
