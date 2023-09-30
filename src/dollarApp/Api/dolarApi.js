import axios from "axios";

const dolarApiUrl = axios.create({
  baseURL: "https://api.bluelytics.com.ar/v2/latest",
});

export const getDolarValues = async () => {
  const res = await dolarApiUrl.get("");
  return res.data;
};
