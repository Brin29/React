import {useEffect, useState} from "react"



// Seguir el puntero
// Detectar la posicion del raton en la pantalla
  const FollowMouse = () => {
    // Buena practica inicializar el estado con el tipo de dato que va a utilizar
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})

    // que se ejecute este hook cada vez que cambie el enabled
    // Aqui controlamos los eventos para que no se renderizen
    useEffect(() => {
      console.log("effect", {enabled})
      const handleMove = (event) => {
        // clients posicion del puntero en la pantalla
        const {clientX, clientY} = event
        setPosition({x: clientX, y: clientY})
      }
      // No se puede tener un hook dentro de un condicional
      if(enabled){
        // evento cuando el pointer se mueve
        // Asi descative el button sigue mostrandose
        window.addEventListener("pointermove", handleMove)
      }
  
      // se ejecuta cuando deja de aparecer el componente y cuando cambia la dependencia
  
      // getEventListeners(window) para ver que eventos estan suscritos
      return () => {
        window.removeEventListener("pointermove", handleMove)
      } // Clean useEffect
    }, [enabled])

    useEffect(() => {
      document.body.classList.toggle("no-cursor", enabled)

      return () => {
        document.body.classList.remove("no-cursor")
      }
    }, [enabled])

    return (
      <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -15,
        top: -15,
        width: 40,
        height: 40,
        transform: `transLate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={() => setEnabled(!enabled)}>
      {enabled ? "Desactivar" : "Activar"} seguir puntero</button>
      </>
    )
  }


  // window.addEventListener()  <-- se va a ejecutar cuando se renderiza el componente
  function App() {
    const [mounted, setMounted] = useState(true)

  return (
    <main>
      {/* estado que recibe si mounted es false elimina el componente FollowMouse */}
      {mounted && <FollowMouse/>}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMoues component
      </button>
    </main>
  )
}
// Porque cuando se renderiza se ejecuta el efecto se limpia y ejecuta otra vez el efecto
// El mode estricto del main.jsx hace con los efectos ejecuta el efecto el cleanup y otra vez el efecto para asegurarse que funcione bien el efecto

export default App
