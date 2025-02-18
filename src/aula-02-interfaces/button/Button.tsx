import { ComponentProps, MouseEventHandler } from 'react';

type ButtonProps = ComponentProps<'button'>;
const Button = ({ children }: ButtonProps) => {
  // Aula 02) Eventos
  const handleClick: MouseEventHandler = (event) => {
    console.log(event.pageX);
  }
  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}

export default Button;