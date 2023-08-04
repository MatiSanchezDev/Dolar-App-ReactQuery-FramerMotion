import { Link } from "react-router-dom";

export const Calculadora = () => {
   return (
      <>
         <Link
            to={"/"}
            className="text-lg relative top-4 left-4 font-dolar underline decoration-2"
         >
            Volver al inicio
         </Link>
      </>
   );
};
