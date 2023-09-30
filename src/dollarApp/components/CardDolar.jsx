export const CardDolar = ({data, cardName}) => {
  return (
    <div className="group animate-fade-down animate-once animate-duration-[900ms] animate-delay-[400ms]">
                     <span className="absolute bg-[#3c60de] w-60 h-36 translate-x-2 translate-y-2 rounded-2xl " />
                     <div className="relative w-60 h-36 rounded-2xl border-2 border-[#3c60de] overflow-hidden font-dolar bg-[#fff7ef] group-hover:translate-x-1 group-hover:translate-y-1 duration-200 ease-in-out">
                        <div className="flex justify-center items-center w-full h-14 m-2">
                           <h1 className="text-center text-2xl text-[#293d83]">
                           {cardName}
                           </h1>
                        </div>
                        <div className="flex justify-center items-center gap-12 mb-4">
                           <div className="flex flex-col items-center">
                              <h4 className="text-[#ceaa32]">Compra</h4>
                              <p className="text-xl">
                                 ${data.value_buy}
                              </p>
                           </div>
                           <div className="flex flex-col items-center">
                              <h4 className="text-[#ceaa32]">Venta</h4>
                              <p className="text-xl ">
                                 ${data.value_sell}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
  )
}