import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./sources/style.css";

/*Screens*/
import HomePage from "./home/screens/HomePage";
import LoginPage from "./home/screens/LoginPage";

/*Components*/
import Header from "./components/Header";

/*Reducers*/
import cartReducer from "./reducers/CartReducer";

const App = () => {
  const store = createStore(
    cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Header />
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
