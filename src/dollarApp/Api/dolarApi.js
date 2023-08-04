import axios from "axios";

const dolarApiUrl = axios.create({
   baseURL: "https://dolar-api-argentina.vercel.app/v1/dolares",
});

export const getDolarValues = async () => {
   const res = await dolarApiUrl.get("");
   return res.data;
};
