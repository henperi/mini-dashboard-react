import { initApp } from '../modules/initApp/actions';

export const initialiseStore = (dispatch) => {
  const token = localStorage.getItem('authToken');

  if (token) {
    dispatch(initApp());
  }
};
