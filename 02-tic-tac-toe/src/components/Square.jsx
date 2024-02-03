import PropTypes from "prop-types"

export const Square = ({children, isSelected ,updateBoard, index}) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

Square.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.func
  ]),
  
  updateBoard: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.func
  ]), 

  isSelected: PropTypes.oneOfType([
    PropTypes.any
  ]), 

  index: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.func
  ])
}