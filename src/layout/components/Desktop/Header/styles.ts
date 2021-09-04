import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.header};

  margin-bottom: 70px;

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin-top: 0.8rem;
  }

  nav {
    display: flex;
    align-items: center;
    margin-top: 0.625rem;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    li {
      cursor: pointer;
      font-family: Poppins;
      font-weight: 600;
      font-size: 1.25rem;
      list-style-type: none;

      padding: 5px;
      border-radius: 5px;

      transition: filter 0.2s;

      &:hover {
        color: black;
        background-color: ${(props) => props.theme.colors.infoCardText};
      }
    }
  }
`;


export const SwitchContainer = styled.div`

  transition: filter 0.2s;

  .react-switch-handle{
    width: 5px;
    height: 5px;
  }
`;