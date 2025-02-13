import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
    type?: string;
    label?: string;
    id?: string;
}
const Input = ({ type, label, id, ...props }: InputProps) => {
  return (
    <div className='flex flex-col gap-2 mb-4'>
        <label className='font-bold' htmlFor={id}>
            {label}
        </label>
        <input 
            className='border p-1 border-gray-400 w-[200px] rounded-md bg-gray-200' 
            type={type} 
            id={id} 
            {...props}
        />
    </div>
  )
}

export default Input;