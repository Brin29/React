import './App.css'

export function App (){
  // Estilos en react
  // <article style={{display: "flex", alignItems: "center" ,color: "#fff"}}>
  
  // Para añadir clases se debe de usar className: class es una palabra reservada
  return (
    <article>
      <header>
        <img src="https://unavatar.io/michaelbjordan" alt="Avatar"/>
        <div>
          <strong>Nombre</strong>
          <span>Cuenta</span>
        </div>
      </header>
      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  )
}