// import { useState } from 'react'

// useRef => permite crear referencias mutables que persiste durante todo el ciclo de vida de un componente
// Ha diferencia del useEffect que cada vez que cambia renderiza el componente useRef no
// import { useRef } from 'react'
import './App.css'
import { MoviesComponent } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch (){
  const [search, updateSearch] = useState("")
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    // Valida si es el primer input del usuario
    if (isFirstInput.current) {
      isFirstInput.current = search === ""
      return
    }
    if (search === ""){
      setError("No se puede buscar una pelicula vacia")
      return
    }
    if (search.match(/^\d+$/)){
      setError("No se puede buscar una pelicula con un numero")
      return
    }

    if (search.length < 3){
      setError("La búsqueda debe tener al menos 3 caracteres")
      return
    }

    setError(null)
  },  [search])

  return {search, updateSearch, error}
}


function App() {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies, loading, getMovies} = useMovies({search, sort})
  // Forma controlada React lo controla
  // const [query, setQuery] = useState("")
  // const inputRef = useRef()


  // const counter = useRef(0) // persiste entre renders
  // counter.current++
  // console.log(counter.current)

  // let i = 0
  // i++
  // console.log(i)
  // Con el hook useRef

  // const handleSubmit = (event) => {
  //   // Para acceder a la referencia se debe acceder desde la propiedad current
  //   // Recuperar el elemento del DOM
  //   event.preventDefault()
  //   const value = inputRef.current.value
  //   console.log(value)
  // }

  // De forma nativa
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   const fields = new FormData(event.target)
  //   const query = fields.get('query')
  //   console.log(query)
  // }

  // Recuperar todas las referencias
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const fields = Object.fromEntries(new window.FormData(event.target))
  //   console.log(fields)
  // }

  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log("search", search)
      getMovies({search})
  }, 300)

  , [getMovies]
  )

  // Forma no controlada se gestiona el formulario atravez del DOM
  const handleSubmit = (event) => {
    event.preventDefault()
    // const {query} = Object.fromEntries(new window.FormData(event.target))
    getMovies({ search })
  }

  const handleSort = () =>{
    setSort(!sort)
  }

  // Controlada
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)

    // const newQuery = event.target.value
    // // No hace un espacio vacio
    // if (newQuery.startsWith(" ")) return
    // const newQuery = event.target.value
    // validaciones
    // Aqui es asincrono y llega tarde
    // if (newQuery === ""){
    //   setError("No se puede buscar una pelicula vacia")
    //   return
    // }
    // if (newQuery.match(/^\d+$/)){
    //   setError("No se puede buscar una pelicula con un numero")
    //   return
    // }

    // if (newQuery.length < 3){
    //   setError("La búsqueda debe tener al menos 3 caracteres")
    //   return
    // }
  }

  return (
    <div className='page'>  
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix...'/>
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:"red"}}>{error}</p>}
      </header>
      
      <main>
        {
          loading ? <p> Cargando...</p> : null
        }
        <MoviesComponent movies={movies}/>
      </main>
    </div>
  )
}


export default App
