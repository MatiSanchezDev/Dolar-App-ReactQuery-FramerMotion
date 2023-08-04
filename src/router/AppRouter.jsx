import { Route, Routes } from "react-router-dom";
import { CalculadoraPage, DolarPage, Home } from "../dollarApp/pages";

export const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/dolar" element={<DolarPage />} />
         <Route path="/calcular" element={<CalculadoraPage />} />
      </Routes>
   );
};
