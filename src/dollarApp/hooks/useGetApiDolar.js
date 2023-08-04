import { useQuery } from "@tanstack/react-query";
import { getDolarValues } from "../Api/dolarApi";

export const useGetApiDolar = () => {
   const { data } = useQuery(["dolar"], getDolarValues);

   return {
      data,
   };
};
