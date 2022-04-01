import { SHOW_MESSAGE, HIDDEN_MESSAGE } from "./type";

export const showMessage = (payload) => ({
  type: SHOW_MESSAGE,
  payload,
});

export const hiddenMessage = () => ({
  type: HIDDEN_MESSAGE,
  payload: '',
});
