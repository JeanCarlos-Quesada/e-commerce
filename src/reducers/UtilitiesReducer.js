import {
  SHOW_MESSAGE,
  HIDDEN_MESSAGE,
  SHOW_LOADING,
  HIDDEN_LOADING,
} from "../actions/type";

const initialState = {
  bottomMessage: "",
  loading: false,
};

const utilitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { ...state, bottomMessage: action.payload };
    case HIDDEN_MESSAGE:
      return { ...state, bottomMessage: "" };
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDDEN_LOADING:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default utilitiesReducer;
