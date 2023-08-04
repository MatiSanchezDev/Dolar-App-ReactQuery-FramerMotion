import { Link } from "react-router-dom";
import { useGetApiDolar } from "../hooks/useGetApiDolar";

export const DolarValue = () => {
   const { data } = useGetApiDolar();

   const formatoDate = (fecha) => {
      const formatoDate = new Date(fecha);
      const fechaActualizada = formatoDate.toLocaleString().substring(0, 15);
      return fechaActualizada;
   };

   const tituloFormat = (titulo) => {
      if (
         titulo === "Contado con liquidación" ||
         titulo === "Solidario (Turista)"
      ) {
         return (
            <h1 className="text-center text-xl text-[#5f7ff5]">
               Dolar {titulo}
            </h1>
         );
      } else {
         return (
            <h1 className="text-center text-2xl text-[#5f7ff5]">
               Dolar {titulo}
            </h1>
         );
      }
   };

   return (
      <>
         <Link
            to={"/"}
            className="text-lg relative top-4 left-4 font-dolar underline decoration-2"
         >
            Volver al inicio
         </Link>
         <div className="flex flex-col justify-center items-center m-5">
            <h1 className="text-5rcxl md:text-7xl font-dolar mt-6 text-black animate-fade-left">
               Dolar Hoy
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-12">
               {data?.map((dolar) => (
                  <div
                     key={dolar.nombre}
                     className="group animate-fade-down animate-once animate-duration-[900ms] animate-delay-[400ms]"
                  >
                     <span className="absolute bg-[#5f7ff5] w-60 h-36 translate-x-2 translate-y-2 rounded-2xl " />
                     <div className="relative w-60 h-36 rounded-2xl overflow-hidden font-dolar bg-[#fff7ef] group-hover:translate-x-1 group-hover:translate-y-1 duration-200 ease-in-out">
                        <div className="flex justify-center items-center w-full h-14 m-2">
                           {tituloFormat(dolar.nombre)}
                        </div>
                        <div className="flex justify-center items-center gap-12 mt-1 mb-4">
                           <div className="flex flex-col items-center">
                              <h4 className="text-[#b0c631]">Compra</h4>
                              <p className="text-xl">
                                 $
                                 {dolar.compra
                                    ? `${dolar.compra.toFixed(2)}`
                                    : " ---"}
                              </p>
                           </div>
                           <div className="flex flex-col items-center">
                              <h4 className="text-[#b0c631]">Venta</h4>
                              <p className="text-xl ">
                                 ${dolar.venta.toFixed(2)}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="flex flex-col justify-center items-center mt-7">
               <h2 className="text-2xl md:text-4xl font-dolar mt-6 text-black animate-fade-left animate-duration-[900ms] animate-delay-[500ms]">
                  Última actualización
               </h2>
               <h3 className="text-xl md:text-2xl font-dolar text-[#5f7ff5] animate-fade-left animate-duration-[900ms] animate-delay-[600ms] mt-2">
                  {formatoDate(
                     data?.map(
                        ({ fechaActualizacion }) => fechaActualizacion,
                     )[0],
                  )}
               </h3>
            </div>
         </div>
      </>
   );
};
