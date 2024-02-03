import { useState} from 'react';
import './App.css'
import confetti from 'canvas-confetti';
import { Square } from './components/Square.jsx';
import { TURNS} from './Constant.js';
import { checkWinner, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import { saveGameToStorage, restGameToStorage } from './logic/storage/index.js';

export default function App() {
  // Creando el estado
  // Los useState deben estar en el cuerpo del componente
  const [board, setBoard] = useState(() => {
    // Se pone la constante adentro porque si se pone afuera se renderiza por cada cambio y hace mas lento la aplicacion
    const boardFromStorage = window.localStorage.getItem("board")
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }) 

  // De quien es el turno
  const [turn, setTurn] = useState(() => {
    // Si tengo algo en el storage si no TURNS.X
    const turnFromStorage = window.localStorage.getItem("turn")
    // ?? si es null o undefined
    return turnFromStorage ?? TURNS.X
  })

  //null no ganador // false empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    restGameToStorage()
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
    // Guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
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
  
  // Dependencias = elmentos que permite que una aplicacion se ejecute de manera fluida
  // vacio le esta diciendo que no se fije en nada
  // useEffect(() => {
  //     // Guardar partida
  //     saveGameToStorage({
  //       board: newBoard,
  //       turn: newTurn
  //     })
  // }, [])

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