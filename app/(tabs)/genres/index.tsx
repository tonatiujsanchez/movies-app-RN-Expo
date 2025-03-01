import { Redirect } from "expo-router"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useGenres } from "@/presentation/hooks/useGenres"
import MainLoadingIndicator from "@/presentation/components/ui/MainLoadingIndicator"
import GenreMoviesView from "@/presentation/components/movies/GenreMoviesView"
import CustomTabBar from "@/presentation/components/ui/CustomTabBar"
import { RouteTabViewMapper } from "@/infrastructure/mappers/route-tabview.mapper"
import { Genre } from "@/infrastructure/interfaces/moviedb-genres-response"

const Tab = createMaterialTopTabNavigator()


const GenresScreen = () => {

  const { genresQuery } = useGenres()

  if (genresQuery.isLoading) {
    return <MainLoadingIndicator />
  }

  if (!genresQuery.data) {
    return <Redirect href="/(tabs)/home" />
  }

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        lazy: true,
      }}
    >
      {genresQuery.data.map((genre: Genre) => (
        <Tab.Screen key={genre.id} name={genre.name}>
          {() => (
            <GenreMoviesView
              genre={RouteTabViewMapper.fromTheMovieDBGenreToRouteTabView(genre)}
            />
          )}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  )
}

export default GenresScreen