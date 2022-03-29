import { GET_CART, SET_ITEM_TO_CART } from "../actions/type";

const initialState = {
  list: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return { ...state };
    case SET_ITEM_TO_CART:
      let cartList = [...state.list];
      cartList.push(action.payload);
      return { ...state, list: cartList };
    default:
      return { ...state };
  }
};

export default cartReducer;
