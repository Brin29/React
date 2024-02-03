import PropTypes from "prop-types"
// Hoks = añadir funcionalidad a los componentes de react
import { useState } from "react"

// Las props deben ser inmutables
// children es una prop que toma todo lo que se envuelve
// userName = 'unknow' valores por defecto
export function TwitterFollowCard({children, userName = 'unknow', initialIsFollowing}){

  // Retorna un array
  // 1 El valor del estado
  // 2 Lo que permite cambiar el estado (target)
  // useStat(false) toma como parametro el valor por defecto
  // Se pueden pasar props como estados
  const [isFollowing, setIsFollow] = useState(initialIsFollowing)

  // Renderizado condicional
  const text = isFollowing ? "Siguiendo" : "Seguir"
  // Cambiar los estilos
  const buttonClassName = isFollowing 
  ? "tw-followCard-button is-following"
  : "tw-followCard-button"

  // Estado interno
  const handleClick = () => {
    // si se da click cambia el estado
    // setIsFollow es como el target
    setIsFollow(!isFollowing)
  }

  // Mala practica porque esta modificando la prop
  // userName = `@${userName}` 

  // Buena practica
  // const user = `@${userName}`

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
          {children}
          {/* formatUserName es el formatUser definido en App*/}
          <span className='tw-followCSard-infoUserName'>{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {/* {text} <-- Children */}
          <span className="tw-followCard-text" >{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
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

  initialIsFollowing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),

  formatUserName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
  ]),

  children: PropTypes.oneOfType([
    PropTypes.string
  ])
};