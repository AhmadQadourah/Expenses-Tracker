import {configureStore} from '@reduxjs/toolkit'
import expenses from './reducers/expenses';


export default configureStore({
  reducer: {
    expenses: expenses,
  },
});