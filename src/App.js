import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./sources/style.css";

/*Screens*/
import HomePage from "./home/screens/HomePage";

/*Components*/
import Header from "./components/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
};

export default App;
