import { useState } from 'react';
import './App.css'
import confetti from 'canvas-confetti';
import { Square } from './components/Square.jsx';
import { TURNS} from './Constant.js';
import { checkWinner, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';

export default function App() {
  // Creando el estado
  const [board, setBoard] = useState(Array(9).fill(null))

  // De quien es el turno
  const [turn, setTurn] = useState(TURNS.X)

  //null no ganador // false empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }



  const updateBoard = (index) => {
    // no sobrescribir el board
    if (board[index] || winner) return

    // Actualizacion el tablero
    const newBoard = [...board]
    newBoard[index] = turn // x u o
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    // Acceder al estado anterior y al nuevo estado
    if (newWinner){
      confetti()
      // La actualizacion de los estados en React son asincronos
      setWinner(newWinner)
    }
    // Empate
    else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>{"Empezar de nuevo"}</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return(
              // El index en este caso es un identificador unco
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        {/* Hace que el componente Square cambie */}
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {/*Renderizado condicional*/}
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}