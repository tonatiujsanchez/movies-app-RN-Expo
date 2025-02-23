import { useQuery } from "@tanstack/react-query"
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"

export const useMovies = () => {

    const nowPlatingQuery = useQuery({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // Refresh in 24hrs
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })
    const topRatedQuery = useQuery({
        queryKey: ['movies', 'top-rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlatingQuery,
        popularQuery,
        topRatedQuery,
    }

}