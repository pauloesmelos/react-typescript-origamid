import { useReducer } from "react";
import InputLogin from "./InputLogin";

type State = {
    email: string;
    senha: string;
}
type Action = {type: "setEmail"; payload: string} | {type: "setSenha"; payload: string}

// action é o que passamos no dispatch/setState
const handleReducer = (state: State, action: Action) => {
    if(action.type === "setEmail") {
        return {
            ...state,
            email: action.payload
        }
    }
    else if(action.type === "setSenha") {
        return {
            ...state,
            senha: action.payload
        }
    }
    else return state;
}

const Exercicio1 = () => {
  // 1) Crie um componente de input e coloque no App (email e senha) - com tsx e interfaces
  // 2) utilize o useReducer para manipular o estado dos inputs
  // 3) exibe o resultado dinâmico num <p></p> conforme o usuário digita nos inputs
  // DICA: comece fazendo a tipagem 

  const initialState = {
    email: "",
    senha: ""
  }
  const [state, setState] = useReducer(handleReducer, initialState);
  return (
    <div className="p-2">
      <h1 className="font-bold text-3xl">Formulário</h1>
      <div>
        <p>Email: {state.email}</p>
        <p>Senha: {state.senha}</p>
      </div>
      <form className="flex flex-col gap-5 w-[200px]">
        <InputLogin 
            label="Email" 
            type="email" 
            id="email"
            value={state.email}
            onChange={({ target }) => setState({
                type: "setEmail",
                payload: target.value
            })}
        />
        <InputLogin 
            label="Senha" 
            type="password" 
            id="senha"
            value={state.senha}
            onChange={({ target }) => setState({
                type: "setSenha",
                payload: target.value
            })}
        />
        <button className="bg-green-700 text-white font-medium rounded-md cursor-pointer px-6 py-2">
            Login
        </button>
      </form>
    </div>
  )
}

export default Exercicio1;