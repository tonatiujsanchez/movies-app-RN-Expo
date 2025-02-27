import { useQuery } from "@tanstack/react-query"
import { getGenres } from "@/core/actions/movies/get-genres.action"

export const useGenres = () => {

  const genresQuery = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
    staleTime: 1000 * 60 * 60 * 24
  })

  return {
    genresQuery
  }
}
