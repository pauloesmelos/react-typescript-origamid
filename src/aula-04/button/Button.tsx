import { Dispatch, SetStateAction } from "react";

interface ButtonProps {
    cont: number,
    setCont: Dispatch<SetStateAction<number>>
}
const Button = ({ cont, setCont }: ButtonProps) => {
  return (
    <button onClick={() => setCont(cont + 1)}>
        Adicionar
    </button>
  )
}

export default Button;