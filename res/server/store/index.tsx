import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import settingsReducer from '../Slice/settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
