import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import Link from 'next/link'

import { SearchInput } from "../../../../common/SearchInput";
import { useTheme } from "../../../../hooks/useTheme";
import { Container, SwitchContainer } from "./styles";


export function Header() {
  return (
    <Container>
      <div>
        <SearchInput />
        <nav>
          <ul>
            <Link href="/">
              <a>
                <li>Home</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Library</li>
              </a>
            </Link>
            <Link href="/profile">
              <a>
                <li>Profile</li>
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
