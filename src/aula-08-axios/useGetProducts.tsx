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

const getProducts = async (URL: string): Promise<Array<Produto>> => {
    return await axios.get(URL)
    .then(products => products.data)
    .catch(erro => console.log(erro));
}
const useGetProducts = (URL: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-products"],
    queryFn: () => getProducts(URL),
    refetchOnWindowFocus: false,
    enabled: !!URL
  })
  return { data, isLoading, isError };
}

export default useGetProducts;