import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"

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

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'top-rated'],
        queryFn: ({ pageParam }) => {
            console.log({pageParam})
            return topRatedMoviesAction({ page: pageParam })
        },
        getNextPageParam: (_lastPage, pages) => pages.length,
        staleTime: 1000 * 60 * 60 * 24,
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlatingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    }

}