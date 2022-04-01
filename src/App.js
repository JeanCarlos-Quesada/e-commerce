import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./sources/style.css";

/*Screens*/
import HomePage from "./home/screens/HomePage";
import LoginPage from "./home/screens/LoginPage";
import RegisterUserClient from "./home/screens/RegisterUserClient";
import Catalog from "./Catalog/screens/Catalog";

/*Components*/
import Header from "./components/Header";
import Message from "./components/Message/Index";

const App = () => {
  const messageBottom = useSelector(
    (state) => state.messageReducer.bottomMessage
  );

  return (
    <React.Fragment>
      <BrowserRouter basename="/">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterUserClient />} />
            <Route path="/Catalog" element={<Catalog />} />
          </Routes>
        </div>
      </BrowserRouter>
      {messageBottom !== "" && <Message message={messageBottom} />}
    </React.Fragment>
  );
};

export default App;
