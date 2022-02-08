import { configureStore } from '@reduxjs/toolkit';
import requestsSlice from './request';

export default configureStore({
  reducer: {
    requests: requestsSlice,
  },
});
