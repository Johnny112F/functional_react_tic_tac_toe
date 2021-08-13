import { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  
  const winner = calculateWinner(board);

  const handleClick = i => {
    const boardCopy = [...board];
    console.log(boardCopy);
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : '0';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  // const renderMoves = () => {
  //   history.map((_step, move) => {
  //     const destination = move ? `Go to move#${move}` : `Go to start`;
  //     return (
  //       <li key={move}>
  //         <button onClick={() => setBoard(Array(9).fill(null))}>
  //           Start Game
  //         </button>
  //       </li>
  //     )
  //   });
    
    return (
      <>
        <Board squares={board} handleClick={handleClick} />
        <div>
          <p>
            {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
          </p>
        </div>
      </>
    )
  }

  export default Game;