import { Link } from "react-router-dom";

export const HomePage = () => {
   return (
      <div className="flex flex-col justify-center items-center h-screen w-screen">
         <h1 className="text-5xl md:text-7xl lg:text-8xl text-black font-bold font-dolarFont mb-4 animate-fade-left">
            Tu Dolar App
         </h1>
         <h3 className="text-2xl md:text-3xl text-black font-semi font-dolarFont mb-10 animate-fade-left animate-once animate-duration-[900ms] animate-delay-300">
            ¡Mirá la contización del Dolar!
         </h3>
         <div className="flex justify-center items-center gap-6 md:gap-20">
            <Link
               to={"/dolar"}
               className="group relative inline-block focus:outline-none animate-fade-down animate-once animate-duration-[900ms] animate-delay-[400ms]"
            >
               <span className="absolute inset-0 border border-black bg-black rounded-md" />
               <span className="text-md md:text-xl font-dolarFont font-bold text-black block border-2 border-black px-10 py-3 bg-[#fff7ef] transition-transform active:border-black active:bg-gray-200 -translate-x-1.5 -translate-y-1.5 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 rounded-md">
                  Ver Dolar
               </span>
            </Link>
            <Link
               to={"/calcular"}
               className="group relative inline-block focus:outline-none animate-fade-down animate-once animate-duration-[900ms] animate-delay-[400ms]"
            >
               <span className="absolute inset-0 border border-black bg-black rounded-md" />
               <span className="text-md md:text-xl font-dolarFont font-bold text-black block border-2 border-black px-10 py-3 bg-[#fff7ef] transition-transform active:border-black active:bg-gray-200 -translate-x-1.5 -translate-y-1.5 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 rounded-md">
                  Calculadora
               </span>
            </Link>
         </div>
      </div>
   );
};
