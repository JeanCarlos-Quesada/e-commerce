import useAxios from "./useAxios";

const useProduct = () => {
  const { Get } = useAxios();

  const GetAll = async () => {
    let result = await Get("Product/GetAll");
    return result;
  };

  const GetMostPopular = async () => {
    let result = await Get("Product/GetMostPopular");
    return result;
  };

  const GetOne = async (id) => {
    let result = await Get(`Product/GetOne?id=${id}`);
    return result;
  };

  return {
    GetAll,
    GetMostPopular,
    GetOne,
  };
};

export default useProduct;
