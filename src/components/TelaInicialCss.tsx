import styled from 'styled-components';

export const StyledDivPrincipal = styled.div`
  h1 {
    font-size: 3.5em;
    text-align: center; 
  }

  p {
    margin-bottom: 2em;
    color: #ECFA00;
    text-align: center; 
  }

  button {
  }

  
  @media (max-width: 600px) {
    h1 {
      font-size: 2.5em; 
    }

    p {
      margin-bottom: 1.5em; 
    }
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    h1 {
      font-size: 3em; 
    }

    p {
      margin-bottom: 1.8em; 
    }
  }
`;
