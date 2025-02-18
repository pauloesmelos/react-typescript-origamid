import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Parcelas = number | null;
type Pagamento = "boleto" | "cartao" | "pix"
interface Venda {
    id: string,
    nome: string,
    preco: number,
    status: string,
    pagamento: Pagamento,
    parcelas: Parcelas,
    data: string
}

const getVendas = async (inicio: string, final: string): Promise<Array<Venda>> => {
    return await axios.get(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
    .then(vendas => vendas.data)
    .catch(erro => console.log(erro));
}
const useGetVendas = (start: string, end: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-vendas"],
    queryFn: () => getVendas(start, end),
    refetchOnWindowFocus: false,
    enabled: !!start && !!end
  })
  return { data, isLoading };
}

export default useGetVendas;