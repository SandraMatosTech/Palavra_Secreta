import styled from 'styled-components';

export const StyledDivPrincipalJogo = styled.div`
  /* Estilo padrão */
  h1 {
    font-size: 2.5em;
    text-align: center;
  }

  span {
    font-weight: bold;
  }

  .dica {
    span {
      color: #ecfa00;
    }
  }

  .containerPalavra {
    margin: 1.5em;
    padding: 1.5em;
    border: 20px solid #ecfa00;
    display: flex;
    gap: 8px; 
    flex-wrap: wrap; 
    justify-content: center; 
  }

  .letra, .blankSquare {
    font-size: 70px;
    line-height: 1.5;
    border: 3px solid #000;
    height: 100px;
    width: 100px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin-bottom: 2em;
    color: #ECFA00;
    text-align: center; 
  }

  .containerLetra {
    input {
      height: 50px;
      width: 50px;
      font-size: 2em;
      text-align: center;
      margin-right: 1em;
    }

    p {
      margin-bottom: 1.2em;
      text-align: center; 
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap; 
    }
  }

  button {
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.8em; 
    }

    .containerPalavra {
      margin: 1em;
      padding: 1em;
      border-width: 10px; 
    }

    .letra, .blankSquare {
      font-size: 50px; 
      height: 70px;
      width: 70px;
    }

    p {
      margin-bottom: 1.5em; 
    }

    .containerLetra {
      input {
        height: 40px;
        width: 40px;
        font-size: 1.5em; 
        margin-right: 0.5em;
      }
    }
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    h1 {
      font-size: 2.2em; 
    }

    .containerPalavra {
      margin: 1.2em;
      padding: 1.2em;
      border-width: 15px; 
    }

    .letra, .blankSquare {
      font-size: 60px; 
      height: 85px;
      width: 85px;
    }

    p {
      margin-bottom: 1.8em; 
    }

    .containerLetra {
      input {
        height: 45px;
        width: 45px;
        font-size: 1.8em; 
        margin-right: 0.8em;
      }
    }
  }
  
`;
