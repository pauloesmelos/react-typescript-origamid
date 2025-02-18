import { Dispatch, SetStateAction } from "react";

type PropsExercicio = {
    total: number;
    setTotal: Dispatch<SetStateAction<number>>
}
const Exercicio1 = ({ total, setTotal}: PropsExercicio) => {
  return (
    <button onClick={() => setTotal(t => t + 1)}>
        Incrementar {total}
    </button>
  )
}

export default Exercicio1