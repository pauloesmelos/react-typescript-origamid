import { useState, useEffect, ChangeEventHandler } from "react";

type LabelProps = {
    label: string;
}
const Checkbox = ({ label }: LabelProps) => {
  const [check, setCheck] = useState(false);
  const [accept, setAccept] = useState("");
  // se invés de passarmos uma callback usar uma arrow function, o TS infere o tipo do evento siznho
  const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCheck(event.target.checked);
  }
  useEffect(() => {
    console.log(check);
  }, [check]);

  return (
    <div className={`p-2 border-2 ${check ? "border-emerald-500" : "border-rose-500"}`}>
        <label className="px-2 flex items-center gap-2">
            <input 
                type="checkbox" 
                checked={check} 
                onChange={handleChangeCheckbox} 
            />
            {label}
        </label>
        {/* exemplo prático: se invés de passarmos uma callback usar uma arrow function, o TS infere o tipo do evento siznho  */}
        <input type="text" value={accept} onChange={(event) => setAccept(event.target.value)} />
    </div>
  )
}

export default Checkbox;