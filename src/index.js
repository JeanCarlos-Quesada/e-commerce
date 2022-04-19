import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logLocalStorage } from "./middleware/LocalStorage.";

/*Reducers*/
import cartReducer from "./reducers/CartReducer";
import userReducer from "./reducers/UserReducer";
import utilitiesReducer from "./reducers/UtilitiesReducer";
import App from "./App";

const rootReducer = combineReducers({
  cartReducer,
  userReducer,
  utilitiesReducer,
});

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logLocalStorage)
);

const store = createStore(rootReducer, composeEnhancers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
