import { movieApi } from '@/core/api/movie-api'
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { MovieDBMovieResponse } from '@/infrastructure/interfaces/moviedb-movie-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

interface Options {
  id: number | string
}
export const getMovieByIdAction = async({ id }:Options):Promise<CompleteMovie> => {
  try {
    
    const { data } = await movieApi<MovieDBMovieResponse>(`${id}`)
    
    const movie = MovieMapper.fromTheMovieDBToCompleteMovie(data)

    return movie

  } catch (error) {
    console.log(error)
    throw 'Connot load now plating movies'
  }
}