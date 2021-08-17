import styled from "styled-components";

export const Container = styled.form`
  height: 3rem;
  display: flex;
  align-items: center;
  margin: 3.5rem 1.5rem 2.2rem;
  padding-right: 10px;
  background: ${(props) => props.theme.colors.inputBackground};
  border-radius: 0.6rem;
  font-weight: 400;
  line-height: 3rem;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.12);
  img {
    width: 1rem;
    margin: 1rem;
  }

  svg:hover{
    transform: scale(1.2);
  }

  @media (min-width: 1024px) {
    width: 400px;
    margin: 2.2rem 1.25rem 1.6rem 18.75rem;
  }

`;

export const SearchInputComponent = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 0 0.6rem 0.6rem 0;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;
