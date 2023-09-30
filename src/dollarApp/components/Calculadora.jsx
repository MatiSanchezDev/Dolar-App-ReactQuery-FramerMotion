import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetApiDolar } from "../hooks/useGetApiDolar";
import { Error } from "./Error";
import { Loader } from "./Loader";

export const Calculadora = () => {
   const { data, isFetching, isError } = useGetApiDolar();
   const [dolarInput, setDolarInput] = useState(1);

   if(isError) return <Error />

   const onInputChange = (e) => {
      const inputValue = e.target.value;
      if (inputValue > 0) {
         setDolarInput(e.target.value);
      }
   };

   const calculadora = (dolarAct, dolarInput) => {
      const inputUser = Number(dolarInput);
      const dolarOficial = dolarAct.oficial.value_buy;
      const calDolarOficial = dolarOficial * inputUser;
      const impPais = (inputUser * dolarOficial * 30) / 100;
      const retencion = (inputUser * dolarOficial * 45) / 100;
      const totalCal = calDolarOficial + impPais + retencion;
      return (
         <div className="animate-fade-down animate-once animate-duration-[900ms] animate-delay-[600ms]">
            <span className="absolute bg-[#3c60de] w-80 sm:w-96 h-[165px] rounded-xl translate-x-1.5 translate-y-2.5" />
            <div className="relative font-dolar text-md md:text-lg flex flex-col w-80 sm:w-96 h-[169px] border-2 p-4 rounded-xl bg-white border-[#3c60de]">
               <div className="flex justify-between items-center">
                  <h3 className="mr-2">Costo en pesos:</h3>
                  <span className="">$ {calDolarOficial.toFixed(2)}</span>
               </div>
               <div className="flex justify-between items-center p-1">
                  <h3 className="">Imp. Pais 30%:</h3>
                  <span>$ {impPais.toFixed(2)}</span>
               </div>
               <div className="flex justify-between items-center p-1">
                  <h3 className="">Retenciones 45%:</h3>
                  <span>$ {retencion.toFixed(2)}</span>
               </div>
               <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl">Total:</h3>
                  <span className="text-xl md:text-2xl">
                     $ {totalCal.toFixed(2)}
                  </span>
               </div>
            </div>
         </div>
      );
   };

   return (
      <>
         <Link
            to={"/"}
            className="text-lg relative top-4 left-4 font-dolar underline decoration-2"
         >
            Volver al inicio
         </Link>
         {isFetching && <Loader />}
         <div className="flex flex-col justify-center items-center h-full w-screen relative top-20">
            <img
               src="coin.png"
               alt=""
               className="w-28 animate-pulse animate-fade-left animate-infinite"
            />
            <h1 className="font-dolar text-5xl md:text-7xl animate-fade-left">
               Calcular Dolar
            </h1>
            <h4 className="text-xl sm:text-2xl font-semi font-dolarFont mt-2 mb-6 animate-fade-left">
               Calculadora de "Dólar Tarjeta / Solidario"
            </h4>
            <div className="animate-fade-down animate-once animate-duration-[900ms] animate-delay-[400ms]">
               <span className="absolute bg-[#3c60de] w-80 sm:w-[383px] h-[70px] rounded-xl translate-x-1.5 translate-y-2.5" />
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
                  className="relative bg-white w-80 sm:w-96 border-2 border-[#3c60de] flex justify-center py-3 rounded-xl"
               >
                  <select
                     name="tipoCambio"
                     className="w-14 h-12 mr-3 rounded-lg font-dolar text-lg pl-1 focus:outline-none"
                  >
                     <option value="usd">US</option>
                     <option disabled>AR</option>
                  </select>
                  <input
                     type="number"
                     className="relative mr-3 p-2 w-56 rounded-lg font-dolar text-lg focus:outline-none border border-[#3c60de] focus:border-[#3c60de]"
                     name="numero"
                     onChange={onInputChange}
                     placeholder="$ ---"
                  />
                  {/* <button
                  type="submit"
                  onChange={() => {}}
                  className="border p-2 bg-white rounded-lg font-dolar text-lg"
               >
                  Calcular
               </button> */}
               </form>
            </div>
            <div className="mt-8">
               {dolarInput ? data && calculadora(data, dolarInput) : ""}
            </div>
         </div>
      </>
   );
};
