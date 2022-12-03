import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },

    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { decrement, increment } = todosSlice.actions;
export default todosSlice.reducer;
