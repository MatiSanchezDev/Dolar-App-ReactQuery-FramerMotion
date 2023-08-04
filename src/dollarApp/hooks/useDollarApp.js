import { useSelector } from "react-redux";

export const useDollarApp = () => {
   const dolarActual = useSelector((state) => state.dollarApp);
   return {
      dolarActual,
   };
};
