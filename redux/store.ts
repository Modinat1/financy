import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './features/HeaderSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer, 
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
