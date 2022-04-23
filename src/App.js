import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./sources/style.css";

/*Screens*/
import HomePage from "./home/screens/HomePage";
import LoginPage from "./home/screens/LoginPage";
import RegisterUserClient from "./home/screens/RegisterUserClient";
import Catalog from "./Catalog/screens/Catalog";
import ProductDetails from "./Catalog/screens/ProductDetails/ProductDetails";
import Cart from "./Catalog/screens/Cart";

/*Components*/
import Header from "./components/Header";
import Message from "./components/Message/Index";
import Loading from "./components/Loading/Loading";

/*Hooks*/
import useLocalStorage from "./hooks/useLocalStorage";

/*Redux*/
import { setItemsToCart } from "./actions/CartActions";
import { setUser } from "./actions/UserActions";

const App = () => {
  const { getItem } = useLocalStorage();
  const dispatch = useDispatch();

  const messageBottom = useSelector((state) => state.utilitiesReducer.bottomMessage);
  const loading = useSelector((state) => state.utilitiesReducer.loading);
  let cart = useSelector((state) => state.cartReducer);
  let user = useSelector((state) => state.userReducer.user);
  console.log("🚀 ~ file: App.js ~ line 35 ~ App ~ user", user)

  React.useEffect(() => {
    if (cart.list.length === 0) {
      let storageCart = JSON.parse(getItem("cart"));
      if(storageCart !== null){
        dispatch(setItemsToCart(storageCart));
      }
    }

    if (user === null) {
      let storageUser = JSON.parse(getItem("user"));
      if(storageUser !== undefined && storageUser !== null && storageUser.user !== null){
        dispatch(setUser(storageUser.user));
      }
    }
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter basename='/'>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/Register' element={<RegisterUserClient />} />
            <Route path='/Catalog' element={<Catalog />} />
            <Route path='/Catalog/Product' element={<ProductDetails />} />
            <Route path='/Catalog/Cart' element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
      {messageBottom !== "" && <Message message={messageBottom} />}
      {loading && <Loading/>}
    </React.Fragment>
  );
};

export default App;
