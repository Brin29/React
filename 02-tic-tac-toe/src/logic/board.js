import { WINNER_COMBOS } from "../Constant.js"

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) 
    {
      return boardToCheck[a]
    }
  }
    // si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
  // si todas las posiciones son diferente de null
  return newBoard.every((square) => square !== null)
}