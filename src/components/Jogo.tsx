import React, { useRef, useState } from 'react';
import { JogoProps } from '../types/interfaces';
import { StyledDivPrincipalJogo } from './JogoCss';

const Jogo: React.FC<JogoProps> = ({
  verificarLetra,
  palavraEscolhida,
  categoriaEscolhida,
  letras,
  letrasAdivinhadas,
  letrasErradas,
  tentativas,
  pontuacao,
}) => {
  const [letraSelecionada, setLetraSelecionada] = useState("");
  const letraInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (letraSelecionada) {
      verificarLetra(letraSelecionada);
      setLetraSelecionada("");
      letraInputRef.current?.focus();
    }
  };

  return (
    <StyledDivPrincipalJogo>
      <p className="pontos">
        <span>Pontuação: {pontuacao}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="dica">
        Dica sobre a palavra: <span>{categoriaEscolhida}</span>
      </h3>
      <p>Você ainda tem {tentativas} tentativas</p>
      <div className="containerPalavra">
        {letras.map((letra, i) => (
          letrasAdivinhadas.includes(letra)
            ? (<span key={i} className='letra'>{letra}</span>)
            : (<span key={i} className='blankSquare'></span>)
        ))}
      </div>
      <div className="containerLetra">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letra"
            maxLength={1}
            required
            onChange={(e) => setLetraSelecionada(e.target.value)}
            value={letraSelecionada}
            ref={letraInputRef}
          />
          <button type="submit">Jogar!</button>
        </form>
      </div>
      <div className="letrasErradasContainer">
        <p>Letras já utilizadas:
          {letrasErradas.map((letra, i) => (
            <span key={i}>{letra},</span>
          ))}
        </p>
      </div>
    </StyledDivPrincipalJogo>
  );
};

export default Jogo;
