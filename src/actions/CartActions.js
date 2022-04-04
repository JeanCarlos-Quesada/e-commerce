import { DELETE_ITEM_TO_CART, GET_CART, REMOVE_ITEM_TO_CART, SET_ITEM_TO_CART } from "./type";

export const setItemToCart = (payload) => ({
  type: SET_ITEM_TO_CART,
  payload,
});

export const removeItemToCart = (payload) => ({
  type: REMOVE_ITEM_TO_CART,
  payload,
});

export const deleteItemToCart = (payload) => ({
  type: DELETE_ITEM_TO_CART,
  payload,
});

export const getCart = (payload) => ({
    type: GET_CART,
    payload,
  });
