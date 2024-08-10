import { FimJogoProps } from "src/types/interfaces";
import "./FimJogoCss";
import { StyledDivFimJogo } from "./FimJogoCss";

export const FimJogo: React.FC<FimJogoProps> = ({ reiniciarJogo, pontuacao }) => {
  return (
    <StyledDivFimJogo>
      <h1>Fim do jogo</h1>
      <h2>
        A sua pontuação foi: <span>{pontuacao}</span>
      </h2>
      <button onClick={reiniciarJogo}>Resetar Jogo</button>
    </StyledDivFimJogo>
  );
};
