import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { useState } from "react";
import { http } from "../api";

const Home = () => {
  const [estado, setEstado] = useState("");
  const [grao, setGrao] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleNavigation = () => {
    if (estado && grao) {
      http
        .post("/previsao", {
          estado: estado,
          cultivo: grao,
        })
        .then((response) => {
          navigate("/resultado", {
            state: { data: response?.data, estado, grao },
          });
        });
    } else {
      setError("Por selecione um grão e um estado");
    }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-[340px] mx-auto">
        <h2 className="text-[24px] leading-[36px] text-center mt-[100px] mb-[35px] text-[#505050]">
          Simulação de planteio
        </h2>
        <div className="flex flex-col justify-center items-center max-w-[399px] gap-7">
          <FormControl fullWidth className="rounded-[12px]">
            <InputLabel id="demo-simple-select-label">
              Selecione seu estado
            </InputLabel>
            <Select
              onChange={(e) => {
                setEstado(String(e.target.value));
              }}
              className="rounded-[12px] focus:border-[#00BB71] outline-none focus:border"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Selecione seu estado"
              // onChange={handleChange}
            >
              <MenuItem value="PR">Parana</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Selecione um grão
            </InputLabel>
            <Select
              onChange={(e) => {
                setGrao(String(e.target.value));
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Selecione um grão"
              // onChange={handleChange}
            >
              <MenuItem value="Arroz Integral">Arroz</MenuItem>
            </Select>
          </FormControl>
          {error && (
            <span className="mt-1 text-xs font-semibold italic text-red-500">
              {error}
            </span>
          )}
          <button
            className="w-[349px] rounded-full bg-[#00BB71] py-3 text-white"
            onClick={handleNavigation}
          >
            Simular agora
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
