import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { CalculadoraPage, DolarPage, Home } from "../dollarApp/pages";

export const AppRouter = () => {
   const location = useLocation();
   return (
      <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/dolar" element={<DolarPage />} />
            <Route path="/calcular" element={<CalculadoraPage />} />
         </Routes>
      </AnimatePresence>
   );
};
