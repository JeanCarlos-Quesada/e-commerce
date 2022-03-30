import { DELETE_USER, SET_USER } from "../actions/type";

const initialState = {
  user: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case DELETE_USER:
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};

export default userReducer;
