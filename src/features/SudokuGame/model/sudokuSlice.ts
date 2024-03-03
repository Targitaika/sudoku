import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TGameStatus } from "../../../constants/mainConstants";

interface SudokuState {
  board: number[][]; // Игровое поле, представленное в виде матрицы 9x9
  status: TGameStatus; // Состояние игры
  selectedCell: { row: number | null; col: number | null }; // Выбранная ячейка
}

const initialState: SudokuState = {
  board: Array(9).fill(Array(9).fill(0)), // Начальное состояние: пустая сетка
  status: "idle", // Игра ожидает действий
  selectedCell: { row: null, col: null }, // Ячейка не выбрана
};

export const sudokuSlice = createSlice({
  name: "sudoku",
  initialState,
  reducers: {
    selectCell: (
      state,
      action: PayloadAction<{ row: number; col: number }>,
    ) => {
      state.selectedCell = action.payload;
    },
    setCell: (state, action: PayloadAction<number>) => {
      const { row, col } = state.selectedCell;
      if (row !== null && col !== null) {
        state.board[row][col] = action.payload;
      }
    },
    resetBoard: (state) => {
      state.board = initialState.board; // Сброс игрового поля
      state.status = "idle"; // Сброс состояния игры
    },
  },
});
