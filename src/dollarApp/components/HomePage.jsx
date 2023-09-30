import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-screen w-full">
        <img
          className="w-36 animate-bounce animate-infinite"
          src="coin.png"
          alt=""
        />
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-black font-bold font-dolarFont mb-4 animate-fade-left">
          Tu Dolar App
        </h1>
        <h3 className="text-2xl md:text-3xl text-black font-semi font-dolarFont mb-10 animate-fade-left animate-once animate-duration-[900ms] animate-delay-300">
          ¡Mirá la cotización del Dolar y el Euro!
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
        <span className="absolute font-dolar flex items-center justify-center bottom-2">
          <svg
            aria-label="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-1"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <a
            className="underline"
            href="https://github.com/MatiSanchezDev"
            rel="noopener noreferrer"
            target="_blank"
          >
            © 2023 - MattDev
          </a>
        </span>
      </div>
    </>
  );
};
