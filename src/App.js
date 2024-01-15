import React, { useState } from 'react'
import "./App.css"
import Board from "./components/Board";

function App() { 
  const [history, setHistory] = useState([
    {squares : Array(9).fill(null)}
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  
  const current_squares = history[stepNumber].squares;
  
  const [xIsNext, setXIsNext] = useState(true);
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6], 
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;

  }
  const winner = calculateWinner(current_squares);
  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  }else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick =(i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newSquares = history[stepNumber].squares.slice();
    
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    // setXIsNext(!xIsNext);  //중복으로 할 경우 한번만 처리가 된다.
    setXIsNext(prev => !prev);
    setHistory([...newHistory, {squares : newSquares}]);
    setStepNumber(stepNumber => stepNumber + 1);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button 
        className='move-button'
        onClick={() => jumpTo(move)}>
        {desc}
        </button>
      </li>
    )
// JSX Key 속성    
// 리액트에서 요소의 리스트를 나열할 때는 Key를 넣어줘야합니다.
// 키는 React가 변경, 추가 또는 제거된 항목을 식별하는 데 도움이 됩니다. 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 합니다.
  });

  return (
    <div className="game">
      <div className="game-board">
      <Board 
      squares={current_squares}
      handleClick={handleClick}/>
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol style={{listStyle:'none'}}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
