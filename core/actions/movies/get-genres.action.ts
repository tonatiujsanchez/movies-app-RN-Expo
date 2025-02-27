import { genreApi } from "@/core/api/movie-api";
import { MovieDBGenreResponse } from "@/infrastructure/interfaces/moviedb-genres-response";

export const getGenres = async() => {
  try {
    const { data } = await genreApi<MovieDBGenreResponse>(`/movie/list`);
    return data.genres

  } catch (error) {
    console.log(error);
    throw "Connot load now plating movies";
  }
}
