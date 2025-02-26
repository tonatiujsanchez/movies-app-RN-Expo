import { getMovieCastAction } from "@/core/actions/movies/get-movie-cast-action"
import { useQuery } from "@tanstack/react-query"


interface Options {
  movieId: number | string
}
export const useCast = ({ movieId }: Options) => {

  const castQuery = useQuery({
    queryKey: ['cast', `${movieId}`],
    queryFn: () => getMovieCastAction({ movieId }),
    staleTime: 1000 * 60 * 60 * 24 // Refresh in 24hrs
  })

  return {
    castQuery
  }
}