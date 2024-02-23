import React from "react";
import "./styles.css";
interface ICell {
  value: number;
  row: number;
  col: number;
  handleClick: (row: number, coll: number) => void;
}
export function Cell({ value, handleClick, row, col }: ICell) {
  return (
    <div className={"cell"} onClick={() => handleClick(row, col)}>
      {value}
    </div>
  );
}
