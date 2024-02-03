import PropTypes from "prop-types"

export const saveGameToStorage = ({ board, turn }) => {
    // guardar partida
    // Para que el localStorage lo guarde como cadena de texto
    window.localStorage.setItem("board", JSON.stringify(board))
    window.localStorage.setItem("turn", turn)
}

export const restGameToStorage = () => {
  // Reseteo del Juego
  window.localStorage.removeItem("board")
  window.localStorage.removeItem("turn")
}

saveGameToStorage.propTypes = {
  board: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.func
  ]),
  
  turn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.func
  ]) 
}