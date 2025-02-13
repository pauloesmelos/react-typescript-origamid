import { ReactNode, PropsWithChildren, ComponentProps } from 'react';

type ButtonProps = {
    tamanho?: string;
    children?: ReactNode;
    onClick?: () => void;
}
type ButtonPropsWithChildren = PropsWithChildren<{
    tamanho?: string;
    onClick?: () => void;
}>;
type ButtonPropsWithComponentProps = ComponentProps<'button'> & {
    tamanho?: string;
    onClick?: () => void;
}

const Button = ({ tamanho, children, onClick, ...props }: ButtonPropsWithComponentProps) => {
  return (
    <button 
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:bg-blue-700 duration-200
        cursor-pointer`}
        style={{ fontSize: tamanho }}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button;