type Parcelas = number | null;
type Pagamento = "boleto" | "cartao" | "pix";
interface Venda {
    id: string,
    nome: string,
    preco: number,
    status: string,
    pagamento: Pagamento,
    parcelas: Parcelas,
    data: string
};
type VendasProps = {
    vendas: Array<Venda>
}
const Vendas = ({ vendas }: VendasProps) => {
  console.log(vendas);

  return (
    <div className="px-10 flex flex-col gap-5 mt-5">
     {vendas.map((venda, index) => (
        <div key={index * Math.random()} className="p-2 border-2 hover:scale-[1.02] hover:bg-neutral-100 cursor-pointer duration-300">
            <h1 className="text-xl font-bold text-neutral-600">
                {venda.nome}
            </h1>
            <p>
                {venda.status}
            </p>
        </div>
     ))}
    </div>
  )
}

export default Vendas;