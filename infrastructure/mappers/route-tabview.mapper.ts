import { Genre } from "@/infrastructure/interfaces/moviedb-movie-response";
import { RouteTabView } from "../interfaces/route-tabview.interface";

export class RouteTabViewMapper {
  static fromTheMovieDBGenreToRouteTabView = (genre: Genre):RouteTabView => {
    return { 
      key: `${genre.id}`, 
      title: genre.name 
    }
  };
}
