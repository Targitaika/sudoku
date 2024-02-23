import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../app/store";
import { sudokuSlice } from "../../model";
import { Cell } from "../Cell";

export const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector((state: RootState) => state.sudoku.board);

  const handleCellClick = (row: number, col: number) => {
    // Логика для определения, какое значение установить в ячейку
    const newValue = 1; // Пример
    dispatch(sudokuSlice.actions.setCell({ row, col, value: newValue }));
  };

  const renderRow = (rows: number[], row: number) => {
    return (
      <div style={{ display: "flex" }}>
        {rows.map((cell, col) => (
          <Cell
            handleClick={handleCellClick}
            key={col}
            value={cell}
            row={row}
            col={col}
          />
        ))}
      </div>
    );
  };
  const renderBoard = (board: number[][]) => {
    return board.map((rows, row) => renderRow(rows, row));
  };

  return <div>{renderBoard(board)}</div>;
};
