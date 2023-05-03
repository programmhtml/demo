import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/counter/CounterSlice.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})