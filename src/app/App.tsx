import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import { Board } from "../features/SudokuGame/components/Board";
import { NumberSelector } from "../features/SudokuGame/components/NumberSelector";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>Ultimate Sudoku</header>
        <Board />
        <br />
        <NumberSelector />
      </div>
    </Provider>
  );
}

export default App;
