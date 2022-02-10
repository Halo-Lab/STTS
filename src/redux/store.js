import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducers from './gitHub/reducers';
import reducersHints from './hints/reducers';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';

const packagesPersistConfig = {
  key: 'packages',
  storage,
  whitelist: ['selectedPackagesList'],
};

const hintsPersistConfig = {
  key: 'hints',
  storage
};

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    packages: persistReducer(packagesPersistConfig, reducers),
    hints: persistReducer(hintsPersistConfig, reducersHints)
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
