import { ComponentProps } from "react";
type InputLoginProps = ComponentProps<"input"> & {
    label: string;
    type: "email" | "password" | "text";
    id: string;
}
const InputLogin = ({ label, type, id, ...props }: InputLoginProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label 
        className="font-bold" 
        htmlFor={id}
      >
        {label}
      </label>
      <input 
        className="p-2 border bg-neutral-100 rounded-md" 
        type={type} 
        id={id} 
        name={id}
        {...props}
      />
    </div>
  )
}

export default InputLogin;