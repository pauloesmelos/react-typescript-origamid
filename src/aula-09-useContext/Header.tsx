import { useEffect } from "react";
import { useUSerGlobalContext } from "./exercicio/UserGlobalContext";

const Header = () => {
  //const { dark } = useUiContext();
  //console.log(dark);

  const { user } = useUSerGlobalContext();
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <header className="w-full bg-black/90">
      <nav className="w-full p-2 max-w-[1300px] mx-auto px-2">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white text-2xl">
            Menu
          </h1>
          <div className="flex items-center gap-5">
            <p className="text-white">
              User: { user && user.nome}
            </p>
            <p className="text-white">
              Logout
            </p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;