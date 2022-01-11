import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducers from './gitHub/reducers';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';

const packagesPersistConfig = {
  key: 'packages',
  storage,
  whitelist: ['selectedPackagesList'],
};

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    packages: persistReducer(packagesPersistConfig, reducers),
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
