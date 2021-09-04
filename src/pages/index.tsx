import Head from "next/head";
import Link from "next/link";

import { Container, Content, Greeatings, Heading } from "../styles/home";
import { DeskTopHome } from "../layout/components/Desktop/DeskTopHome";
import { NavigationBar } from "../layout/components/Mobile/NavigationBar";
import { SearchInput } from "../common/SearchInput";
import { BooksSlide } from "../common/BooksSlide";
import { CurrentlyReading } from "../common/CurrentlyReading";
import { ReviewVideos } from "../common/ReviewVideos";
import { SearchResult } from "../common/SearchResult";
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
                  Hi, <span>Vinicius Paes</span>👋
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
