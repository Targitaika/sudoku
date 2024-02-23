// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { sudokuSlice } from "../features/SudokuGame/model";

export const store = configureStore({
  reducer: {
    sudoku: sudokuSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
