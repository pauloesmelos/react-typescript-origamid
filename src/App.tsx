import { useState } from 'react';
import Aula06 from './aula-06/useRef-tsx/Aula06';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Aula06 />
    </>
  )
}

export default App;