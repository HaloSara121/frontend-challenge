import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { useTheme } from "../hooks/useTheme";
import Head from "next/head";
import {
  Container,
  ProfileImageContainer,
  OptionsContainer,
  SwitchContainer,
} from "../styles/profile";

import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { Header } from "../layout/components/Desktop/Header";
import { NavigationBar } from "../layout/components/Mobile/NavigationBar";
import { CgProfile } from "react-icons/cg";

export default function Profile() {
  const { width } = useWindowDimensions();

  const isMobile = width > 1024 ? false : true;
  const { colors, title } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Profile | FotonBooks</title>
      </Head>
      {!isMobile && <Header />}

      <Container>
        <div>
          <ProfileImageContainer>
            <CgProfile size="80" />
            <strong>Change profile picture</strong>
          </ProfileImageContainer>

          <OptionsContainer>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
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