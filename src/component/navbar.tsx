import Logo from "./../../public/logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-screen items-center flex justify-center h-auto py-2">
      <img src={Logo} alt="logo img" />
    </div>
  );
};

export const NavbarNoHome = () => {
  return (
    <div className="w-screen shadow-lg">
      <div className=" mx-auto items-center flex justify-between h-auto py-2 max-w-[1200px] px-9">
        <div className="flex justify-center items-center gap-8">
          <img src={Logo} alt="logo img" />
          <ul className="lg:flex justify-center items-center gap-5 text-[#505050] hidden">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              {" "}
              <Link to="/chat">
                Flora <span className="text-[#00BB71]">IA</span>
              </Link>
            </li>
            <Link to="/historico-de-simulação">
              <a>Historico de simulações</a>
            </Link>

            <Link to="/seja-premium">
              <a>Seja premium</a>
            </Link>
          </ul>
        </div>

        <Link
          className="w-[180px] rounded-full bg-[#00BB71] py-2 text-white flex justify-center"
          to="/"
        >
          Simular agora
        </Link>
      </div>
      <ul className="lg:hidden justify-center text-sm py-5 items-center gap-5 text-[#505050] flex">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          {" "}
          <Link to="/chat">
            Flora <span className="text-[#00BB71]">IA</span>
          </Link>
        </li>
        <Link to="/historico-de-simulação">
          <a>Historico de simulações</a>
        </Link>

        <li>
          <a>Seja premium</a>
        </li>
      </ul>
    </div>
  );
};
