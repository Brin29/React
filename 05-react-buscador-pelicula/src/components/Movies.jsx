export function ListOfMovies ({movies}) {
  return( 
    <ul>
      {
        movies.map( movie => (
          // Esta atado a como funciona la Api se debe evitar a que eso ocurra
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

export function NoMoviesResults (){
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function MoviesComponent ({movies}){
  // Tiene peliculas
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies}/>
      : <NoMoviesResults/>
  )
  }


ListOfMovies.propTypes
MoviesComponent.propTypes