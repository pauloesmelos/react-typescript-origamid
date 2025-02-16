import { useUSerGlobalContext } from "./exercicio/UserGlobalContext";

const Content = () => {
  const { user } = useUSerGlobalContext();

  if(!user) return null;
  return (
    <section className="w-full p-4">
      <div>
        <h1 className="text-3xl font-bold">
          {user.nome}
        </h1>
        <div>
          <h2 className="text-xl font-medium">Preferências</h2>
          <p>Playback: {user.preferencias.playback}</p>
          <p>Qualidade: {user.preferencias.qualidade}</p>
          <p>Volume: {user.preferencias.volume}</p>
        </div>
      </div>
    </section>
  )
}

export default Content;