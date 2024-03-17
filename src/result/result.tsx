import { City } from "../component/result/city";
import { Temp } from "../component/result/temp";
import { Prev } from "../component/result/prev";
import { Umit } from "../component/result/umit";
import { NavbarNoHome } from "../component/navbar";
import { useLocation } from "react-router";

const Result = () => {
  const location = useLocation();
  const state = location?.state;
  console.log(state);
  return (
    <>
      <NavbarNoHome />
      <div className="w-screen max-w-[1200px] px-9 mx-auto my-[46px]">
        <div>
          <h2 className="leading-[30px] text-[#505050] text-[20px]">
            Resultado da simulação
          </h2>
          <span className="text-[#A8A8A8] text-[#14px]">#1213</span>
        </div>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-start lg:justify-around w-full mt-[30px] gap-10 lg:gap-0">
          <City state={state?.estado} />
          <Temp state={state?.data?.temperatura} />
          <Umit state={state?.data?.umidade} />
          <Prev state={state?.data?.previsao} />
        </div>
      </div>
    </>
  );
};

export default Result;
