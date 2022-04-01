import { SHOW_MESSAGE, HIDDEN_MESSAGE } from "../actions/type";

const initialState = {
  bottomMessage: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { ...state, bottomMessage: action.payload };
    case HIDDEN_MESSAGE:
      return { ...state, bottomMessage: "" };
    default:
      return { ...state };
  }
};

export default messageReducer;
