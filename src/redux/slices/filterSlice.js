import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: {
    name: 'вес', 
    sort:'weight',
  },
};


const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action){
      console.log('action setCategoryId', action)
      state.categoryId = action.payload;

    }
  }
});
export const {setCategoryId} = filterSlice.actions;
export default filterSlice.reducer;