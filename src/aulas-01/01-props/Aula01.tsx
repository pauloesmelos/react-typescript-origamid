import { useState } from 'react';
import Button from '../button/Button';
import Input from './input/Input';

const Aula01 = () => {
  // Aula 01) É preciso anotar as props que um componente recebe
  // no componente button é criado a anotaçã de duas formas diferentes
 
    // Exercício 01)
    //1 - Crie um componente Input
    //2 - Ele deve retornar <label> e <input>, dentro de uma <div>
    //3 - Recebe uma propriedade chamada label
    //4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>
    //5 - Permita o uso de qualquer propriedade de input no componente Input.
    ///6 - Adicione 1rem de na <div>
  const [date, setDate] = useState("");
  const onClick = () => {
    console.log("Clicou no botão");
  }
  // Prompt
  // 1) tsx: Qual o tipo da propriedade `children` em React
  // Pode ser CompoentProps (mais completo), ReactNode e PropsWithChildren

  return (
    <div>
        <h1 className="text-3xl font-semibold text-blue-600">
            Inicío da sua viagem: {date}
        </h1>
        <Button onClick={onClick} tamanho="2rem" id="button-principal" aria-label="button-01">
            Clique aqui
        </Button>
        <Input 
            type="email" 
            label="Digite seu e-mail" 
            name="email" 
            id="email"  
            placeholder="Seu melhor e-mail"
        />
        <Input 
            type="password" 
            label="Digite sua senha" 
            name="password" 
            id="password"  
            placeholder="Sua melhor senha"
        />
        <Input 
            type="date" 
            label="Data de partida" 
            name="date" 
            id="date"
            value={date}
            onChange={({ target }) => setDate(target.value)}
        />
        <Input 
            type="time" 
            label="Horário de partida" 
            name="time" 
            id="time"  
        />
    </div>
  )
}

export default Aula01;