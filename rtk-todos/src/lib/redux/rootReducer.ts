/* Instruments */
import { todoApi, authApi } from './services';


export const reducer = {
  [todoApi.reducerPath]: todoApi.reducer,
  [authApi.reducerPath]: authApi.reducer
};
