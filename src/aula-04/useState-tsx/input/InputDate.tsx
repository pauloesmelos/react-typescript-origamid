import { Dispatch, SetStateAction } from "react";
type InputDateProps = {
  label: string,
  state: string,
  setState: Dispatch<SetStateAction<string>>,
  id: string,
  name: string
}
const InputDate = ({ label, state, setState, id, ...props }: InputDateProps) => {
  return (
    <div className="px-4 flex items-center gap-4 mt-4">
        <label className="font-bold" htmlFor={id}>
          {label}
        </label>
        <input
          className="bg-gray-200 px-12 py-2 border border-neutral-400 rounded-md"
          type="date" 
          value={state} 
          onChange={(e) => setState(e.target.value)} 
          id={id} 
          {...props}
        />
    </div>
  )
}

export default InputDate;