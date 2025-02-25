import { getMovieByIdAction } from "@/core/actions/movies/get-movie-by-id.action"
import { useQuery } from "@tanstack/react-query"

interface Options {
  id: string | number
}
export const useMovie = ({ id }:Options) => {
  
  const movieDetailsQuery = useQuery({
    queryKey:['movie', `${ id }`],
    queryFn: ()=> getMovieByIdAction({ id }),
    staleTime: 1000 * 60 * 60 * 24 // Refresh in 24hrs
  })

  return {
    movieDetailsQuery
  }
}
