import Link from "next/link";

import { SearchInput } from "../../SearchInput";
import { Container } from "./styles";

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
