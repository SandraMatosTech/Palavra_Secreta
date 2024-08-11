import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import TelaInicial from "./components/TelaInicial";
import { listaPalavras } from "./data/palavras";
import { FimJogo } from "./components/FimJogo";
import Jogo from "./components/Jogo";
import { PalavrasProps } from "./types/interfaces"; 

type Estagio = {
  id: number;
  name: string;
};

const estagio: Estagio[] = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

type Categoria = keyof PalavrasProps;

function App() {
  const [estagioJogo, setEstagioJogo] = useState<string>(estagio[0].name);
  const [palavras] = useState<PalavrasProps>(listaPalavras);
  const [palavraEscolhida, setPalavraEscolhida] = useState<string>("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState<Categoria | undefined>(undefined); 
  const [letras, setLetras] = useState<string[]>([]);
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [tentativas, setTentativas] = useState<number>(3);
  const [pontuacao, setPontuacao] = useState<number>(0);

  const escolhendoPalavraECategoria = useCallback(() => {
    const categorias = Object.keys(palavras) as Categoria[];
    const categoria = categorias[Math.floor(Math.random() * categorias.length)];
    const palavra =
      palavras[categoria][
        Math.floor(Math.random() * palavras[categoria].length)
      ];
    return { palavra, categoria };
  }, [palavras]);

  const iniciarJogo = useCallback(() => {
    limpaLetraEstagio();
    setEstagioJogo(estagio[1].name);
    const { palavra, categoria } = escolhendoPalavraECategoria();
    console.log(palavra, categoria);
  
    const letraPalavra = palavra.split("").map((l) => l.toLowerCase());

    setPalavraEscolhida(palavra);
    setCategoriaEscolhida(categoria);
    setLetras(letraPalavra);
  }, [escolhendoPalavraECategoria]);
  
  const verificarLetra = (letra: string) => {
    const letraNormal = letra.toLowerCase();
    if (
      letrasAdivinhadas.includes(letraNormal) ||
      letrasErradas.includes(letraNormal)
    ) {
      return;
    }
    if (letras.includes(letraNormal)) {
      setLetrasAdivinhadas((atualLetraAdivinhada) => [
        ...atualLetraAdivinhada,
        letraNormal,
      ]);
    } else {
      setLetrasErradas((atualLetraErrada) => [
        ...atualLetraErrada,
        letraNormal,
      ]);
      setTentativas((atualTentativa) => atualTentativa - 1);
    }
  };

  const limpaLetraEstagio = () => {
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
  };

  useEffect(() => {
    if (tentativas <= 0) {
      limpaLetraEstagio();
      setEstagioJogo(estagio[2].name);
    }
  }, [tentativas]);

  useEffect(() => {
    if (categoriaEscolhida) { 
      const letrasUnicas = [...new Set(letras)];
      if (letrasAdivinhadas.length === letrasUnicas.length && estagioJogo === "game") {
        setPontuacao((atualPontuacao) => atualPontuacao + 100);
        iniciarJogo();
      }
    }
  }, [letrasAdivinhadas, letras, iniciarJogo, estagioJogo, categoriaEscolhida]);
  
  const reiniciarJogo = () => {
    setPontuacao(0);
    setTentativas(3);
    setEstagioJogo(estagio[0].name);
  };

  return (
    <div className="App">
      {estagioJogo === "start" && <TelaInicial iniciarJogo={iniciarJogo} />}
      {estagioJogo === "game" && (
        <Jogo
          verificarLetra={verificarLetra}
          palavraEscolhida={palavraEscolhida}
          categoriaEscolhida={categoriaEscolhida || ''} 
          letras={letras}
          letrasAdivinhadas={letrasAdivinhadas}
          letrasErradas={letrasErradas}
          tentativas={tentativas}
          pontuacao={pontuacao}
        />
      )}
      {estagioJogo === "end" && (
        <FimJogo reiniciarJogo={reiniciarJogo} pontuacao={pontuacao} />
      )}
    </div>
  );
}

export default App;
