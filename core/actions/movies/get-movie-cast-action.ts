import { movieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/moviedb-credits-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

interface Options {
  movieId: number | string
}
export const getMovieCastAction = async ({ movieId }:Options) => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

    const cast = data.cast.map(CastMapper.fromMovieDBCastToEntity);

    return cast;
  } catch (error) {
    console.log(error);
    throw "Connot load now playing movies";
  }
};
