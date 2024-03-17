import { Route, BrowserRouter, Routes } from "react-router-dom";

import App from "./App";
import Home from "./home/home";
import Chat from "./chat/chat";
import Result from "./result/result";
import SimulationHistory from "./simulationHistory/simulationHistory";
import { Planos } from "./planos";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/historico-de-simulação"
            element={<SimulationHistory />}
          />
          <Route path="/resultado" element={<Result />} />
          <Route path="/seja-premium" element={<Planos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
