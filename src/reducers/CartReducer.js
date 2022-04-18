import {
  GET_CART,
  SET_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
  DELETE_ITEM_TO_CART,
  SET_ITEMS_TO_CART
} from "../actions/type";

const initialState = {
  list: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_TO_CART:
      return {
        ...state,
        list: action.payload.list,
        count: action.payload.count,
      };
    case SET_ITEM_TO_CART:
      var cartList = [...state.list];
      var index = cartList.findIndex((x) => x.id === action.payload.id);
      let count = index !== -1 ? (cartList[index].count += action.payload.amount) : action.payload.amount;

      if (index === -1) {
        action.payload.count = count;
        cartList.push(action.payload);
      } else {
        cartList[index].count = count;
      }
      count = state.count + action.payload.amount;
      return { ...state, list: cartList, count: count };
    case REMOVE_ITEM_TO_CART:
      var cartList = [...state.list];
      var index = cartList.findIndex((x) => x.id === action.payload);
      if (cartList[index].count > 1) {
        cartList[index].count -= 1;
      } else {
        cartList.splice(index, 1);
      }
      var globalCount = state.count - 1;
      return { ...state, list: cartList, count: globalCount };
    case DELETE_ITEM_TO_CART:
      var cartList = [...state.list];
      var index = cartList.findIndex((x) => x.id === action.payload);
      var globalCount = state.count - cartList[index].count;
      cartList.splice(index, 1);
      
      return { ...state, list: cartList, count: globalCount };
    default:
      return { ...state };
  }
};

export default cartReducer;
