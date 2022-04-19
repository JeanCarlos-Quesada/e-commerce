import axios from "axios";

const useAxios = () => {
  const instance = axios.create({
    baseURL: "https://localhost:44390/api/",
    timeout: 5000,
  });

  const Get = async (query) => {
    let result = await instance.get(query);
    return result.data;
  };

  return {
    Get,
  };
};

export default useAxios;
