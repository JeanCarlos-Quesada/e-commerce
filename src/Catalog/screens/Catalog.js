import React from "react";
import { useDispatch } from "react-redux";

/*Components*/
import Filters from "../components/Filters/Index";
import ProductList from "../components/ProductList/Index";

/*Hooks*/
import useProduct from "../../hooks/useProduct";

/*Redux*/
import { showLoading, hiddenLoading } from "../../actions/UtilitiesActions";

const Catalog = () => {
  const dispatch = useDispatch();
  const { GetAll } = useProduct();

  const [title, saveTitle] = React.useState("All");
  const [state, saveState] = React.useState({
    categories: [
      {
        id: "0",
        name: "All",
      },
      {
        id: "1",
        name: "Sport",
      },
      {
        id: "2",
        name: "Casual",
      },
      {
        id: "3",
        name: "Formal",
      },
    ],
    products: [],
    filterProducts: [],
  });

  React.useEffect(() => {
    dispatch(showLoading());
    GetAll().then((products) => {
      /*save data in redux*/
      state.products = products;
      state.filterProducts = products;

      saveState({ ...state });
      dispatch(hiddenLoading());
    });
  }, []);

  return (
    <React.Fragment>
      <Filters state={state} saveState={saveState} saveTitle={saveTitle} />
      <ProductList products={state.filterProducts} title={title} />
    </React.Fragment>
  );
};

export default Catalog;
