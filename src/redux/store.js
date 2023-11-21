import { configureStore } from "@reduxjs/toolkit";
import {  contactReducer, persistedContactsReducer } from "./contactSlice";
// import { filterReducer } from "./filterSlice";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { filterReducer } from "./filterSlice";



export const store = configureStore({
    reducer: {
      contacts: contactReducer,
      // filters: filterReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

  export const persistor = persistStore(store);