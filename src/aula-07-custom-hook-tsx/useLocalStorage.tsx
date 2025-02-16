import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useLocalStorage = (key: string, value: string): [string,Dispatch<SetStateAction<string>>] => {
  const [state, setState] = useState(() => {
    const localStorage = window.localStorage.getItem(key);
    return localStorage ? localStorage : value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state ? state: value);
  }, [state]);

  return [state, setState];
}

export default useLocalStorage;
