import { GET_CART, SET_ITEM_TO_CART } from "./type";

export const setItemToCart = (payload) => ({
  type: SET_ITEM_TO_CART,
  payload,
});

export const getCart = (payload) => ({
    type: GET_CART,
    payload,
  });
