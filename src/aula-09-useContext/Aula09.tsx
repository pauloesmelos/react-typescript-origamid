import Content from "./Content";
import Header from "./Header";

const Aula09 = () => {
  // Exercício 01)

  //Utilize a API: https://data.origamid.dev/usuarios/1
  //1 - Crie um UserContext
  //2 - Use o useFetch dentro do UserContext para esportar data, loading e error
  //3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
  //4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx

  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default Aula09;