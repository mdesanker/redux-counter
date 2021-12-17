import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    clear(state) {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, increase, clear } = counterSlice.actions;

export default counterSlice.reducer;
