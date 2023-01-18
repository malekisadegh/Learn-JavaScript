import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import cartReducer from './cart-slice';
import agpReducer from './agp-slice';
import notificationReducer from './notification.slice';
import storage from 'reduxjs-toolkit-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

const rootReducer: any = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  notify: notificationReducer,
  agp: agpReducer,
});

const persistConfig: any = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  //blacklist: ['notify'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = configureStore({
  reducer: persistedReducer,
  devTools: process.env['MODE'] === 'development',
  middleware: [thunk],
});

export const persistor = persistStore(store);
