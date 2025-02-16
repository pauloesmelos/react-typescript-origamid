import { useState } from 'react';
import Exercicio1 from './aula-10-useReducer/exercicio/Exercicio1';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Exercicio1 />
    </>
  )
}

export default App;