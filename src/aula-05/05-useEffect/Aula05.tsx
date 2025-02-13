import { useEffect } from "react";

const Aula05 = () => {
  // Aula 05) o retorno no useEffect deve ser obrigatoriamente outra função
  useEffect(() => {
    console.log("montou");
    return () => {
        console.log("desmontou");
    }
  }, []);
  return (
    <div>Effect</div>
  )
}

export default Aula05;