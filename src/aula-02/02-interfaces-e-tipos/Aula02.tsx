import { useState, useEffect, ChangeEventHandler } from "react";
import Button from "../button/Button";
import Exercicio1 from "../button/Exercicio1";

const Aula02 = () => {
  // Aula 02) É importante utilizar o VS CODE pra anotar certos elementos, por exemplo o state e setState abaixo
  // Exercício 01) Anote to tipo das propriedades de Button.tsx
  const [total, setTotal] = useState(0);

  // Prompts
  // tsx: Qual a interface de um evento onChange
  // tsx: Qual a interface de uma função de callback em onMouseEnter
  const [value, setValue] = useState("");
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  }
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
        <Button>
            Login
        </Button>
        {/* Exercício 1) */}
        <p>Total: {total}</p>
        <Exercicio1 total={total} setTotal={setTotal} />
        <input className="p-2 border" type="email" onChange={handleOnChange} />
    </div>
  )
}

export default Aula02;