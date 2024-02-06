// import { useState } from 'react'
import './App.css'
import { MoviesComponent } from './components/Movies'
import responsiveMovies from "./mocks/with-results.json"
import withoutResults from "./mocks/no-results.json"


function App() {
  const moviesResult = responsiveMovies.Search

  return (
    <div className='page'>  
    <header>
      <h1>Buscador de Peliculas</h1>
      <form className='form'>
        <input placeholder='Avengers, Star Wars, The Matrix...'/>
        <button type='submit'>Buscar</button>
      </form>
    </header>
    <main>
      <MoviesComponent movies={moviesResult}/>
    </main>
    </div>
  )
}

export default App
