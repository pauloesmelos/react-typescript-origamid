import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Produto {
    id: string,
    nome: string,
    preco: number,
    quantidade: number,
    descricao: string,
    internacional: boolean,
}

const getProduct = async (URL: string, ID: string): Promise<Produto> => {
    return await axios.get(`${URL}/${ID}/`)
    .then(product => product.data)
    .catch(erro => console.log(erro));
}
const useGetProduct = (URL: string, ID: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`get-product-${ID}`],
    queryFn: () => getProduct(URL, ID),
    enabled: !!URL && !!ID,
    refetchOnWindowFocus: false
  })
  return { data, isLoading, isError }
}

export default useGetProduct;