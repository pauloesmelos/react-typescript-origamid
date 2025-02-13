import { useState, useEffect } from "react";
import Button from "../button/Button";
import InputDate from "./input/InputDate";
import useGetVendas from "./hooks/useGetVendas";
import Vendas from "./vendas/Vendas";

interface User {
    nome: string,
    profissao: string,
    cpf: number
}

const Aula04 = () => {
  // Aula 04) useState tsx
  const [data, setData] = useState<null | User>(null);
  const [cont, setCont] = useState<number>(0);

  const getUser = () => {
    return {
        nome: 'Paulo',
        profissao: 'dev frontend',
        cpf: 109596040
    }
  }
  useEffect(() => {
    setData(getUser());
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  // Exercício 1) 
  //Interface da API: https://data.origamid.dev/vendas/
/*<!-- Essa API possui dados de hoje até 90 dias atrás -->

  1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
  3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
  4 - Crie 3 estados reativos em App.tsx: data, inicio, final
  5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
  6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
  7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado */
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showVendas, setShowVendas] = useState(false);
  const { data: vendas, isLoading } = useGetVendas(startDate, endDate);

  const handleClearData = (): void => {
    setShowVendas(false);
    setStartDate("");
    setEndDate("");
  }

  useEffect(() => {
    if(vendas) {
        setShowVendas(true);
    }
    else {
        setShowVendas(false);
    }
  }, [vendas]);
  useEffect(() => {
    if(startDate && endDate) {
        setShowVendas(true);
    }
  }, [startDate, endDate]);

  if(isLoading) return <p>Loading...</p>
  return (
    <div>
        <p>Total: {cont}</p>
        <Button cont={cont} setCont={setCont} />
        {/* Exercício 1) */}
        <InputDate 
            label="Início" 
            state={startDate}
            setState={setStartDate}
            id="inicio"
            name="inicio"
        />
        <InputDate 
            label="Final" 
            state={endDate} 
            setState={setEndDate}
            id="final"
            name="final"
        />
        <button 
            onClick={handleClearData} 
            className="ml-16 mt-4 p-2 bg-rose-500 text-white font-medium rounded-md cursor-pointer"
        >
            Limpar dados
        </button>
        { showVendas && vendas && <Vendas vendas={vendas} /> }
    </div>
  )
}

export default Aula04;