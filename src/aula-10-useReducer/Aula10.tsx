import { useReducer } from "react";
import Input from "./Input";
 
type State = {
  email: string;
  senha: string; 
}
//type Action = {
//  type: "setEmail" | "setSenha";
//  payload: string;
//}
type Action = { type: "setEmail", payload: string} | { type: "setSenha", payload: string } | { type: "setMaiorIdade", payload: boolean }

//state = fixo e criado no momento da definição do estado no useReducer
const handleReducer = (state: State, action: Action) => { // state = {email: "", senha: ""} action = argumento passado no dispatch {type: "setName"}
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
const Aula10 = () => {
  const [state, dispatch] = useReducer(handleReducer, {
    email: "",
    senha: ""
  });

  
  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl fontbold">Formulário</h1>
        <p>Email: {state.email}</p>
        <p>Senha: {state.senha}</p>
      </div>
      <div className="mt-10">
        <form className="flex flex-col gap-4 w-[200px]">
            <Input 
                label="Email" 
                id="email" 
                type="email"
                value={state.email}
                onChange={({ target }) => dispatch({
                  type: "setEmail",
                  payload: target.value
                })}
            />
            <Input 
                label="Senha" 
                id="password" 
                type="password"
                value={state.senha}
                onChange={({ target }) => dispatch({
                  type: "setSenha",
                  payload: target.value
                })}
            />
            <button type="submit" className="px-8 py-2 bg-emerald-600 text-white font-medium rounded-md cursor-pointer">
                Login
            </button>
        </form>
      </div>
    </div>
  )
}

export default Aula10;