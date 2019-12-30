
import types from './types';
/**
 * @description action to initialize and hence startup the app for use
 * @returns {{ type: string }} action type without payload
 */
export const initApp = () => ({
  type: types.INIT_APP,
});
