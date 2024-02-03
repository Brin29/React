// Todos los hooks son funciones
// hook useEfect = permite ejecutar codigo arbitrario cuando el componente se monta en el dom y cada vez que cambian las dependencias
import {useEffect, useState} from "react"

// Codigo Arbitrario el codigo que tu quieras bebe


export const Component = () => {
  const [value, setValue] = useState(false)

  // codeToExecute = el codigo a ejecutar
  // listOfDependecies = la lista de las dependencias
  // useEffect(codeToExecute, listOfDependecies)
  useEffect(() => {
    // como minimo se ejecuta una vez
    console.log("El codigo a ejecutar")
  }, [lisOfDependenciesArr])
  
  useEffect(() => {
    //Si no se define el codigo se ejecuta cada vez que se renderize el componente
    console.log("El codigo a ejecutar")
  })
}

// La lista de las dependencias es opcional
