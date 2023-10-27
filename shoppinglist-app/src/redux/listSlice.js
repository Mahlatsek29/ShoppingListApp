import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    addList: (state, action) => {
      const newList = {
        id: action.payload.id,
        name: action.payload.name // Added a missing colon (:) here
      };
      state.push(newList);
    },
    deleteList: (state, action) => { // Added an arrow (=>) here
      return state.filter(item => item.id !== action.payload.id); // Fixed the filter function
    }
  }
});

export const { addList, deleteList } = listSlice.actions;

export default listSlice.reducer;
