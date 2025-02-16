import { useEffect, useState } from "react";
import useGetProduct from "./useGetProduct";
import useGetProducts from "./useGetProducts";

const URL = "https://data.origamid.dev/produtos";

const Aula08 = () => {
  const [id, setId] = useState("");
  const { data, isLoading } = useGetProducts(URL);
  const { data: product, isLoading: loading } = useGetProduct(URL, id);

  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  if(isLoading && !data) return <p>Carregando produtos...</p>
  return (
    <div className="w-full p-4 flex gap-10">
      <div className="flex flex-col gap-4">
        {data?.map((product) => (
            <button 
                className="w-[200px] px-8 py-2 bg-purple-500 text-white font-medium rounded-md cursor-pointer hover:bg-white hover:text-purple-500
                duration-300" 
                key={product.id}
                onClick={() => setId(product.id)}
            >
                {product.nome}
            </button>
        ))}
      </div>
      <div>
        { loading && (
            <p className="animate-ping text-white text-3xl font-bold">Carregando...</p>
        )}
        {product && (
            <ul className="text-white flex flex-col gap-5">
                <li className="font-bold text-2xl">
                    {product.nome}
                </li>
                <li>
                    {product.descricao}
                </li>
                <li className="text-2xl line-through text-emerald-600">
                    {product.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </li>
                <li className="p-2 bg-white text-purple-500 font-medium rounded-xl w-[80px]">
                    {product.id}
                </li>
                <li>
                    Quantidade em estoque: {product.quantidade}
                </li>
                <li>
                    Produto nacional ? {product.internacional ? "Sim" : "Não"}
                </li>
            </ul>
        )}
      </div>
    </div>
  )
}

export default Aula08;