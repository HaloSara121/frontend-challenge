import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { useTheme } from "../hooks/useTheme";
import { NavigationBar } from "../components/Mobile/NavigationBar";
import {
  Container,
  ProfileImageContainer,
  OptionsContainer,
  SwitchContainer,
} from "../styles/profile";

import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { Header } from "../components/Desktop/Header";

export default function Profile() {
  const { width } = useWindowDimensions();

  const isMobile = width > 1024 ? false : true;
  const { colors, title } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();

  return (
    <>
      {!isMobile && <Header />}

      <Container>
        <div>
          <ProfileImageContainer>
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="#2c2c2e" />
            </svg>
            <strong>Change profile picutere</strong>
          </ProfileImageContainer>

          <OptionsContainer>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="User name" />
          </OptionsContainer>
        </div>
        <SwitchContainer>
          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.redTitle}
            onColor="#00173D"
          />
        </SwitchContainer>
      </Container>
      {isMobile && <NavigationBar activeItem={3} />}
    </>
  );
}
