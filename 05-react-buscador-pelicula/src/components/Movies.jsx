export function ListOfMovies ({movies}) {
  return( 
    <ul>
      {
        movies.map( movie => (
          // Esta atado a como funciona la Api se debe evitar a que eso ocurra
<<<<<<< HEAD
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
=======
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
>>>>>>> 91fbc0c3cf2922a434d27b0b8f3f84971924e59c
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