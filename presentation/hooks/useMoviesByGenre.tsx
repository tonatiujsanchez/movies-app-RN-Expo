import { getMoviesByGenreAction } from "@/core/actions/movies/get-movies-by-genre.action"
import { useInfiniteQuery } from "@tanstack/react-query"

interface Options {
  genreId: string | number
}
export const useMoviesByGenre = ({ genreId }:Options) => {

  const moviesByGenreQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movie', `genre-${genreId}`],
    queryFn: ({ pageParam }) => {
      return getMoviesByGenreAction({ 
        genreId,
        page: pageParam,
      })
    },
    getNextPageParam: (_lastPage, pages) => pages.length,
    staleTime: 1000 * 60 * 60 * 24,
  })

  return {
    moviesByGenreQuery
  }
}
