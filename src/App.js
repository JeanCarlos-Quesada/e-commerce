import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import "./sources/style.css";

/*Screens*/
import HomePage from "./home/screens/HomePage";
import LoginPage from "./home/screens/LoginPage";
import RegisterUserClient from "./home/screens/RegisterUserClient";

/*Components*/
import Header from "./components/Header";

/*Reducers*/
import cartReducer from "./reducers/CartReducer";
import userReducer from "./reducers/UserReducer";

const App = () => {
  const rootReducer = combineReducers({ cartReducer, userReducer });

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/Register' element={<RegisterUserClient />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
