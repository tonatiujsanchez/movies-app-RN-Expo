import { Text, View } from "react-native"
import { useFavoriteMovies } from "@/presentation/hooks/useFavoriteMovies"
import MovieGrid from "@/presentation/components/movies/MovieGrid"

const FavoritesScreen = () => {

  const { favoriteMovies } = useFavoriteMovies()

  return (
    <View>
      <Text>Favorites</Text>
      <View className="mt-4">
        <MovieGrid
          movies={favoriteMovies}
        />
      </View>
    </View>
  )
}

export default FavoritesScreen
