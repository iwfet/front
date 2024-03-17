import { useEffect, useState } from "react";
import { NavbarNoHome } from "../component/navbar";
import { http } from "../api";

function formatarData(data) {
  const date = new Date(data);

  const diasSemana = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const meses = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const diaSemana = diasSemana[date.getUTCDay()];
  const dia = date.getUTCDate();
  const mes = meses[date.getUTCMonth()];
  const ano = date.getUTCFullYear();
  const horas = date.getUTCHours().toString().padStart(2, "0");
  const minutos = date.getUTCMinutes().toString().padStart(2, "0");
  const segundos = date.getUTCSeconds().toString().padStart(2, "0");

  return `${diaSemana}, ${dia} ${mes} ${ano}`;
}

const SimulationHistory = () => {
  const [historico, setHistorico] = useState([]);
  useEffect(() => {
    http.get("/ultimas_consultas").then((response) => {
      setHistorico(response.data?.consultas);
    });
  }, []);

  return (
    <>
      <NavbarNoHome />
      <div className="w-screen mx-auto max-w-[1200px] px-9">
        <h2 className="leading-[30px] text-[#505050] text-[20px] mb-[30px] mt-[40px]">
          Simualações anteriores
        </h2>

        {historico?.map((valor) => (
          <>
            <HistoryResult dados={valor} />
          </>
        ))}
      </div>
    </>
  );
};

const HistoryResult = ({ dados }) => {
  console.log(dados);
  return (
    <div className="flex flex-col justify-center items-center gap-2 border-[#dddddd] border-b w-full py-5">
      <ol className="flex justify-between items-center w-full text-[#707070]">
        <li>{dados.cultivo}</li>
        <li>{formatarData(dados.data)}</li>
        <li>{Number(dados.previsao.toFixed(2))} Kg/Ha</li>
      </ol>
      <ol className="flex justify-between items-center w-full text-[#707070]">
        <li> {dados.estado == "PR" ? "Parana" : "Não encontrado"}</li>
        {/* <li className="text-[#00BB71]">#4823</li> */}
      </ol>
    </div>
  );
};

export default SimulationHistory;
