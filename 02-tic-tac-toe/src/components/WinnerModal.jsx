import PropTypes from "prop-types"
import { Square } from "./Square"

export function WinnerModal ({winner, resetGame}) {
  if (winner === null) return null

  const winnerText = winner === false ? "Empate" : "Gano:"

  return (
        <section className='winner'>
          <div className='text'>
            <h2>{winnerText}</h2>

            <header className='win'>
              <Square>{winner}</Square>
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )
  }

WinnerModal.propTypes = {
    winner:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.func
    ]),
    
    resetGame: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.func
    ]), 
}  
