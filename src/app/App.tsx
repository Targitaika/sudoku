import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import { Board } from "../features/SudokuGame/components/Board";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>Ultimate Sudoku</header>
        <Board />
      </div>
    </Provider>
  );
}

export default App;
