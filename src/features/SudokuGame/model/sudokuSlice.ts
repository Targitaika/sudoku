import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SudokuState {
  board: number[][]; // Игровое поле, представленное в виде матрицы 9x9
  status: "idle" | "solving" | "solved"; // Состояние игры
}

const initialState: SudokuState = {
  board: Array(9).fill(Array(9).fill(0)), // Начальное состояние: пустая сетка
  status: "idle", // Игра ожидает действий
};

export const sudokuSlice = createSlice({
  name: "sudoku",
  initialState,
  reducers: {
    setCell: (
      state,
      action: PayloadAction<{ row: number; col: number; value: number }>,
    ) => {
      const { row, col, value } = action.payload;
      state.board[row][col] = value; // Установка значения в ячейку
    },
    resetBoard: (state) => {
      state.board = initialState.board; // Сброс игрового поля
      state.status = "idle"; // Сброс состояния игры
    },
  },
});
