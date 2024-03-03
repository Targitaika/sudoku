import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { sudokuSlice } from "../../model";

export const NumberSelector = () => {
  const dispatch = useDispatch();

  const handleClick = (number: number) => {
    dispatch(sudokuSlice.actions.setCell(number));
  };

  return (
    <div className={"NumberSelector"}>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
        <div
          key={number}
          onClick={() => handleClick(number)}
          className={"NumberSelector__item"}
        >
          {number}
        </div>
      ))}
    </div>
  );
};
