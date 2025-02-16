import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
    label: string;
    type: string;
    id: string;
}

const Input = ({ label, type, id, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-bold">{label}</label>
      <input 
        className="border border-neutral-200 p-1 rounded-md" 
        type={type} 
        name={id} 
        id={id} 
        {...props}
      />
    </div>
  )
}

export default Input;