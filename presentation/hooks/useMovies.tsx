import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    const nowPlatingQuery = useQuery({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // Refresh in 24hrs
    })

    return {
        nowPlatingQuery
    }

}