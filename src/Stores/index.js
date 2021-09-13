import { combineReducers } from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { encryptTransform } from 'redux-persist-transform-encrypt';

import customers from './CustomerReducers';

const reducers = combineReducers({
  customers,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  transforms: [
    encryptTransform({
      secretKey: 'APP_STORAGE_KEY',
      onError: function (error) {
        console.log('persist error: ', error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    middlewares.push();
    return middlewares;
  },
});

const persistor = persistStore(store);

export { store, persistor };
