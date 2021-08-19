import { configureStore } from '@reduxjs/toolkit';
import mailSlice from '../features/mail/mailSlice';
import navbarSlice from '../features/navbar/navbarSlice';

export const store = configureStore({
  reducer: {
   
    navbar: navbarSlice,
    mails: mailSlice
  },
});
