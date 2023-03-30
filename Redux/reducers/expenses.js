import {createSlice} from '@reduxjs/toolkit'

const expensesSlice =createSlice({
    name: 'expenses',
    initialState:{
        ids :[],
    },
    reducers:{
      setIds: (state,action)=>{
    
      state.ids= [...ids,action.payload]
        }
    }

})


export const {
setIds,
}=expensesSlice.actions;

export default expensesSlice.reducer