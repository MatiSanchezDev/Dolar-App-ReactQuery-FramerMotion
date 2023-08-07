import { useQuery } from "@tanstack/react-query";
import { getDolarValues } from "../Api/dolarApi";

export const useGetApiDolar = () => {
   const { data, isLoading, isFetching } = useQuery(["dolar"], getDolarValues);

   return {
      data,
      isLoading,
      isFetching,
   };
};
