import {
  DELETE_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
  SET_ITEM_TO_CART,
} from "../actions/type";

export const logLocalStorage = (store) => (next) => (action) => {
  next(action);

  try {
    let actionType = action.action.type;

    if (
      actionType === SET_ITEM_TO_CART ||
      actionType === REMOVE_ITEM_TO_CART ||
      actionType === DELETE_ITEM_TO_CART
    ) {
      let storeAux = store.getState();
      let value = storeAux.computedStates[storeAux.currentStateIndex].state.cartReducer;
      window.localStorage.setItem("cart", JSON.stringify(value));
    }
  } catch (err) {
    console.error(err);
  }
};
