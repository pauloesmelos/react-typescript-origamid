import { useState } from 'react';
import Aula02 from './aula-02/02-interfaces-e-tipos/Aula02';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Aula02 />
    </>
  )
}

export default App;