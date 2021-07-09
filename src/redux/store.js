import { configureStore } from '@reduxjs/toolkit';

import reducers from "./gitHub/reducers";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';



const packagesPersistConfig = {
  key: 'packages',
  storage,
  whitelist: ['selectedPackagesList'],
};


export const store = configureStore({
  reducer: {
   packages: persistReducer(packagesPersistConfig,reducers),
  },
});
export const persistor = persistStore(store);
