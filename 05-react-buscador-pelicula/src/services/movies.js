const API_KEY = `c48ac99f`

export const searchMovies = async ({search}) => {
  if (search === "") return null

  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)

    const json = await response.json()
    const movies = json.Search
    
  // Evitar que este atado a la API
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

  } catch(err){
    throw new Error(`Error searchin movies`)
  }
}