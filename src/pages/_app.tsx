import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { ThemeContextProvider } from "../hooks/useTheme";
import { SearchResultProvider } from "../hooks/useSearchResult";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <SearchResultProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </SearchResultProvider>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
