import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

/*Reducers*/
import cartReducer from "./reducers/CartReducer";
import userReducer from "./reducers/UserReducer";
import messageReducer from "./reducers/MessagesReducer";
import App from "./App";

const rootReducer = combineReducers({
  cartReducer,
  userReducer,
  messageReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
