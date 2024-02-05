import { useEffect, useState } from "react"
import "./App.css"

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

export function App (){
  const [factUrl, setFactUrl] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Fetchin de datos
  // No se hace el fetch afuera porque se ejecuta cada vez que se renderiza el componente
  
  // Se renderizo infinitamente por que se puso la dependencia fact y cada vez que se hacia el fetchin de datos se renderizaba el componente 

  // useEffect no funciona con async en ese caso envolverlo
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then( data => {
      const {fact} = data
      const firstWord = fact.split(" ")[0]
      const img = `https://cataas.com/cat/says/${firstWord}`
      // Tomar la primera palabra
      setFactUrl(fact)
      setImageUrl(img)

      // Las tres primeras palabras
      // const firstWord = fact.split(" ").slice(0, 3).join(" ")
      // const firstWord = fact.split(" ", 3).join(" ")
    })
  }, [/*Dependencias que cambian su valor*/])


  return (
    <main>
      <h1>App de gato</h1>
      <section>
        {/* renderizado condiciona */}
        {factUrl && <p>{factUrl}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first words for ${factUrl}`}/>}
      </section>
    </main>
  )
}