import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?:number
  limit?:number
}
export const topRatedMoviesAction = async ({ page=1, limit=20 }:Options) => {
  try {
    const { data } = await movieApi<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page,
        limit
      }
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Connot load now playing movies";
  }
};
