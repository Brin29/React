import PropTypes from "prop-types"

export function TwitterFollowCard({formatUserName, userName, name, isFollowing}){
  // Insertar el @
  // const addAt = (userName) => `@${userName}`
  // Estilos en react
  // <article style={{display: "flex", alignItems: "center" ,color: "#fff"}}>
  
  // Para añadir clases se debe de usar className: class es una palabra reservada
  // Iterar sobre texto existen dos formas
  // Creando una variable
  const avatar = `https://unavatar.io/${userName}`

  // Directamente
  // src={`https://unavatar.io/${name}`} 

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar' 
          src={avatar} 
          alt="Avatar"/>
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          {/* formatUserName es el formatUser definido en App*/}
          <span className='tw-followCSard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>{isFollowing}</button>
      </aside>
    </article>
  )
}

TwitterFollowCard.propTypes = {
  userName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]), 

  isFollowing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),

  formatUserName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.func,
  ]),
};