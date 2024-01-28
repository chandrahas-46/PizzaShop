import { configureStore } from '@reduxjs/toolkit';
import { orderReducer } from './Redux/Reducers/orderReducers';

export const store =  configureStore({
  reducer: {
    orderReducer,
  },
});
