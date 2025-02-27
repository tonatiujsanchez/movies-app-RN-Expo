export interface MovieDBGenreResponse {
  genres: Genre[];
}

export interface Genre {
  id:   number;
  name: string;
}
