

import React from 'react';
import { StyledDivPrincipal } from './TelaInicialCss';
import { TelaInicialProps } from '../types/interfaces'; 

const TelaInicial: React.FC<TelaInicialProps> = ({ iniciarJogo }) => {
  return (
    <StyledDivPrincipal>
      <h1>Palavra Secreta</h1>
      <p>Clique no botão abaixo para começar a jogar:</p>
      <button onClick={iniciarJogo}>INICIAR JOGO</button>
    </StyledDivPrincipal>
  );
};

export default TelaInicial;
