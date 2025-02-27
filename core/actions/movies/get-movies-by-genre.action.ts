import { discoverApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  genreId: number | string;
  page?: number;
  limit?: number;
}
export const getMoviesByGenreAction = async ({ genreId, page=1, limit=20 }: Options) => {
  try {
    const { data } = await discoverApi("/movie", {
      params: {
        with_genres: genreId,
        page,
        limit
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Connot load now playing movies";
  }
};
