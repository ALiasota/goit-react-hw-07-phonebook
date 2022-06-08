import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts-slice';

import contactsReducer from './contacts-reducer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
