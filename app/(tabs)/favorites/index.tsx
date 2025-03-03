import { Text, View } from "react-native"
import { useFavoriteMovies } from "@/presentation/hooks/useFavoriteMovies"
import MovieGridTwoColumn from "@/presentation/components/movies/MovieGridTwoColumn"

const FavoritesScreen = () => {

  const { favoriteMovies } = useFavoriteMovies()

  return (
    <View>
      <Text>Favorites</Text>
      <View className="mt-4">
        <MovieGridTwoColumn
          movies={favoriteMovies}
        />
      </View>
    </View>
  )
}

export default FavoritesScreen
