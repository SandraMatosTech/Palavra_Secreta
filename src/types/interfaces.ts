
export interface TelaInicialProps {
  iniciarJogo: () => void;
}

export interface FimJogoProps {
  reiniciarJogo: () => void;
  pontuacao: number; 
}

export interface JogoProps {
  verificarLetra: (letra: string) => void;
  palavraEscolhida: string;
  categoriaEscolhida: string; 
  letras: string[]; 
  letrasAdivinhadas: string[]; 
  letrasErradas: string[]; 
  tentativas: number; 
  pontuacao: number;
}

export interface PalavrasProps {
  carro: string[];
  fruta: string[];
  corpo: string[];
  computador: string[];
  animal: string[];
  comida: string[];
  casa: string[];
  esporte: string[];
  música: string[];
  viagem: string[];
}
