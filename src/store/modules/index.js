import { appReducer, appInitialState } from './initApp/reducer';

export const initialState = {
  app: appInitialState,
};

export const rootReducer = (state, action) => {
  const { app } = state;

  return {
    app: appReducer(app, action),
  };
};
