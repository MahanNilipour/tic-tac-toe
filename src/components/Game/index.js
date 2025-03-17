// dependency module imports
import React, { useState } from "react";

// Component imports
import NameInputs from "./NameInputs";
import PlayerTracker from "./PlayerTracker";
import Board from "./Board";
import calculateResult from "../../helpers/calculateResult";
import Result from "./Result";

// helper imports

const initialBoard = Array(9).fill(null);

const Game = () => {
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [namesConfirmed, setNamesConfirmed] = useState(false);
  const [activePlayer, setActivePlayer] = useState(Math.random() < 0.5 ? 1 : 2);
  const [board, setBoard] = useState(initialBoard);
  const [gameResult, setGameResult] = useState(null);

  const handleClickCell = (index) => {
    if (board[index] || gameResult) return;
    const symbol = activePlayer === 1 ? "X" : "O";
    const newBoard = [...board];
    newBoard[index] = symbol;
    setBoard(newBoard);
    const result = calculateResult(newBoard);

    if (result === 1 || result === 2) {
      setGameResult(result);
    } else if (result === 3) {
      setGameResult(3);
    }
    if (result === 0) {
      setActivePlayer(activePlayer === 1 ? 2 : 1);
    }
  };
  return (
    <>
      {!namesConfirmed && (
        <NameInputs
          player1Name={player1Name}
          setPlayer1Name={setPlayer1Name}
          player2Name={player2Name}
          setPlayer2Name={setPlayer2Name}
          namesConfirmed={namesConfirmed}
          setNamesConfirmed={setNamesConfirmed}
        />
      )}
      {namesConfirmed && (
        <PlayerTracker
          player1Name={player1Name}
          player2Name={player2Name}
          activePlayer={activePlayer}
        />
      )}
      {namesConfirmed && (
        <Board board={board} handleClickCell={handleClickCell} />
      )}

      {gameResult && (
        <Result
          player1Name={player1Name}
          player2Name={player2Name}
          result={gameResult}
        />
      )}
    </>
  );
};

export default Game;
