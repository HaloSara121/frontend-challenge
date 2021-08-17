import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      placeholder: string;
      link: string;
      title: string;
      circle: string;
      circlebackground: string;
      white: string;
      redTitle: string;
      inputBackground: string;
      textPrimary: string;
      backgroundButton: string;
      infoCard: string;
      infoCardText: string;
      isActiveNavBar: string;
      header: string;
    };
  }
}
