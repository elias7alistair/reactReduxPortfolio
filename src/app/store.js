import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/projectSlice'

export default configureStore({
  reducer
});
