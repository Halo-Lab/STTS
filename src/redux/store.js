import {configureStore} from '@reduxjs/toolkit';

import reducers from "./gitHub/reducers";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {persistReducer, persistStore} from 'redux-persist';
import dndReducer from "./gitHub/dndReducer";


const packagesPersistConfig = {
    key: 'packages',
    storage,
    whitelist: ['selectedPackagesList'],
};
const dndPersistConfig = {
    key: 'dnd',
    storage,
    whitelist: ['dndList'],
};

export const store = configureStore({
    reducer: {
        packages: persistReducer(packagesPersistConfig, reducers),
        dnd: persistReducer(dndPersistConfig, dndReducer),
    },
});
export const persistor = persistStore(store);
