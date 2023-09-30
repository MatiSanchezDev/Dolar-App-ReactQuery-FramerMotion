import { useNavigate } from "react-router-dom";

export const Error = () => {
    const navigate = useNavigate()
  return (
    <>
    <span className="text-lg relative top-4 left-4 font-dolar underline decoration-2 cursor-pointer" onClick={() => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }}>
            Volver al inicio
    </span>
        <div className="w-full h-screen flex flex-col justify-center items-center pb-80">
            <h1 className="block text-xl md:text-3xl lg:text-5xl font-dolar mt-6 text-black animate-fade-left">Cargando actualización del Dolar</h1>
            <h2 className="block text-lg md:text-2xl lg:text-4xl font-dolar mt-6 text-black animate-fade-left">Por favor vuelva más tarde</h2>
        </div>
    </>
  )
}
