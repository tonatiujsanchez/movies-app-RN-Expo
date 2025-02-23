import { useQuery } from "@tanstack/react-query"
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"

export const useMovies = () => {

    const nowPlatingQuery = useQuery({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // Refresh in 24hrs
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // Refresh in 24hrs
    })

    return {
        nowPlatingQuery,
        popularQuery
    }

}