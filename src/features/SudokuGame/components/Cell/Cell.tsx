import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { sudokuSlice } from "../../model";
import "./styles.css";

interface CellProps {
  row: number;
  col: number;
  value: number;
}

export const Cell = ({ row, col, value }: CellProps) => {
  const dispatch = useDispatch();
  const { selectedCell } = useSelector((state: RootState) => state.sudoku);
  const isSelected = selectedCell.row === row && selectedCell.col === col;
  const isHighlighted = selectedCell.row === row || selectedCell.col === col;

  const handleClick = () => {
    dispatch(sudokuSlice.actions.selectCell({ row, col }));
  };
  const classNames = `cell${isSelected ? " cell_selected" : isHighlighted ? " cell_highlighted" : ""}`;
  return (
    <div onClick={handleClick} className={classNames}>
      {value !== 0 ? value : ""}
    </div>
  );
};

//
//
// import React from "react";
// import "./styles.css";
// interface ICell {
//   value: number;
//   row: number;
//   col: number;
//   handleClick: (row: number, coll: number) => void;
// }
// export function Cell({ value, handleClick, row, col }: ICell) {
//   return (
//     <div className={"cell"} onClick={() => handleClick(row, col)}>
//       {value}
//     </div>
//   );
// }
//
