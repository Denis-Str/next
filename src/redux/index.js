import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './services';

export default configureStore({
  reducer: {
    services: servicesReducer,
  },
})
