import responsiveMovies from "../mocks/with-results.json"
// import withoutResults from "../mocks/no-results.json"

// Custom Hooks
export function useMovies (){
  const moviesResult = responsiveMovies.Search

  // Evitar que este atado a la API
  const mappedMovies = moviesResult?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return {moviesResult: mappedMovies}
}