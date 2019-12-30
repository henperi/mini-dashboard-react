import React, { useEffect } from 'react';

import { Provider } from './store';
import { asyncHelper } from './store/utils/asyncUtil';
import { rootReducer, initialState } from './store/modules';
import { initialiseStore } from './store/utils/authUtil';

import './styles/responsive.scss';
import './app.scss';
import { Routes } from './routes';

/**
 * @description Profile Application with the routes and store
 * @returns {JSX.Element} jsx
 */
const App = () => {
  const [state, dispatchBase] = React.useReducer(rootReducer, initialState);
  const dispatch = React.useCallback(asyncHelper(dispatchBase, state), [dispatchBase]);

  useEffect(() => {
    initialiseStore(dispatch);
  }, [dispatch]);

  return (
    <React.StrictMode>
      <Provider state={state} dispatch={dispatch}>
        <Routes />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
