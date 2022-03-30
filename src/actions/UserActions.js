import { SET_USER, DELETE_USER } from "./type";

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});
