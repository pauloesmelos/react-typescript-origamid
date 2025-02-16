import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Preferences = {
    playback: number,
    volume: number,
    qualidade: "baixa" | "media" | "alta"
}
interface User {
    id: number,
    nome: string,
    idade: number,
    aulas: number,
    cursos: number ,
    preferencias: Preferences
}

const URL = "https://data.origamid.dev/usuarios";

const getUser = async (id: string): Promise<User> => {
    return await axios.get(`${URL}/${id}`)
    .then(user => user.data)
    .catch(erro => console.log(erro));
}
const useGetUser = (id: string) => {
  const { data, isLoading, isError } = useQuery<User>({
    queryKey: [`use-get-user-${id}`],
    queryFn: () => getUser(id),
    refetchOnWindowFocus: false,
    enabled: !!id
  })
  return { data, isLoading, isError };
}

export default useGetUser;