import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  height: 400px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  a {
    svg {
      margin: 3.125rem 0 0 0.9375rem;
    }
  }

  @media (min-width: 1024px) {
    a {
      svg {
        height: 25px;
        width: 25px;

        transition: background-color 0.2s;
        transition: border-radius 0.2s;
        transition: opacity 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.colors.inputBackground};
          border-radius: 0.625rem;
          opacity: 70%;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 1.25rem;
`;

export const OptionsContainer = styled.div`
  width: 90%;

  input {
    border: none;
    height: 3rem;
    width: 100%;
    padding: 0 1rem;
    border-radius: 0.6rem;
    margin-top: 0.625rem;
    background-color: ${(props) => props.theme.colors.inputBackground};

    &::placeholder {
      color: ${(props) => props.theme.colors.placeholder};
    }
  }
`;

export const SwitchContainer = styled.div`
  margin: 30px 260px 20px 0;

  transition: filter 0.2s;

  @media (min-width: 1024px) {
    margin: 1.875rem 56.25rem 1.25rem 0;
  }
`;
