import styled from 'styled-components';

export const Container = styled.div`
  section{
    display: flex;
    flex-direction: column;

    margin: 1rem 0;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0 1.5rem; 
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  a{
    color: var(--link)
  }
`

export const Greeatings = styled.section`
  h1{
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;

    margin-top: -.5rem;

    span{
      color: var(--red-title);
    }
  }
`