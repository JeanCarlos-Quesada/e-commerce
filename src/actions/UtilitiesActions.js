import { SHOW_MESSAGE, HIDDEN_MESSAGE, SHOW_LOADING, HIDDEN_LOADING } from "./type";

export const showMessage = (payload) => ({
  type: SHOW_MESSAGE,
  payload,
});

export const hiddenMessage = () => ({
  type: HIDDEN_MESSAGE,
  payload: '',
});

export const showLoading = () => ({
  type: SHOW_LOADING,
  payload: true,
});

export const hiddenLoading = () => ({
  type: HIDDEN_LOADING,
  payload: true,
});

