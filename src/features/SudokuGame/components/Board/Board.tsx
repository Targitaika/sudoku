import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { Cell } from "../Cell";
import "./styles.css";

export const Board = () => {
  const board = useSelector((state: RootState) => state.sudoku.board);

  return (
    <div className={"board"}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={cell}
          />
        )),
      )}
    </div>
  );
};
