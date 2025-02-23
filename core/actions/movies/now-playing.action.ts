import { movieApi } from "@/core/api/movie-api"
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

export const nowPlayingAction = async() => {
    try {

        const { data } = await movieApi<MovieDBMoviesResponse>('/now_playing')
        
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie )

        return movies
        
    } catch (error) {
        console.log(error)
        throw 'Connot load now playing movies'
    }
}
